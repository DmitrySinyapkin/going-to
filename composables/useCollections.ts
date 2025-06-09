export function useCollections() {
    const user = useSupabaseUser()
    const client = useSupabaseClient<Database>()
    const gamesStore = useGamesStore()
    const moviesStore = useMoviesStore()

    const collections = {
        gamesFavorites: gamesStore.setFavoritesList,
        gamesFinished: gamesStore.setFinishedList,
        moviesFavorites: moviesStore.setFavoritesList,
        moviesFinished: moviesStore.setFinishedList,
    }

    type Collection = keyof typeof collections
    
    type CollectionResponse = {
        [K in Collection]?: string | null
    }

    type UpdateCollection = {
        (collection: "gamesFavorites" | "gamesFinished", items: GameDetails[]): void
        (collection: "moviesFavorites" | "moviesFinished", items: MovieDetails[]): void
    }

    const getCollections = async() => {
        if (user.value?.id) {
            const { data } = await useAsyncData('games', async () => {
                const { data } = await client.from('profiles').select('gamesFavorites, gamesFinished, moviesFavorites, moviesFinished').eq('id', user.value?.id!).single()
                    return data
            })

            if (data.value?.gamesFavorites) gamesStore.setFavoritesList(JSON.parse(data.value?.gamesFavorites))
            if (data.value?.gamesFinished) gamesStore.setFinishedList(JSON.parse(data.value.gamesFinished))
            if (data.value?.moviesFavorites) moviesStore.setFavoritesList(JSON.parse(data.value?.moviesFavorites))
            if (data.value?.moviesFinished) moviesStore.setFinishedList(JSON.parse(data.value.moviesFinished))
        }
    }

    const getCollection = async (collection: Collection) => {
        const { data } = await useAsyncData(collection, async () => {
            const { data } = await client.from('profiles').select(collection).eq('id', user.value?.id!).single()
                return data as CollectionResponse
        })

        if (data.value?.[collection]) collections[collection](JSON.parse(data.value?.[collection]))
    }

    const updateCollection: UpdateCollection = async (collection, items) => {
        const json = JSON.stringify(items)
        const { data, error } = await client.from('profiles').update({[collection]: json}).eq('id', user.value?.id!)
        
        if (!error) {
            collections[collection](items)
        }
    }
    
    return {
        getCollections,
        getCollection,
        updateCollection
    }
}
