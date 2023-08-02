export function useGamesCollections() {
    const user = useSupabaseUser()
    const client = useSupabaseClient()
    const gamesStore = useGamesStore()


    const getCollections = async() => {
        const { data } = await useAsyncData('games', async () => {
            const { data } = await client.from('profiles').select('gamesFinished, gamesFavorites').eq('id', user.value?.id).single()
                return data
        })

        if (data.value?.gamesFavorites) gamesStore.setFavoritesList(JSON.parse(data.value?.gamesFavorites))
        if (data.value?.gamesFinished) gamesStore.setFinishedList(JSON.parse(data.value.gamesFinished))
    }

    const getFavorites = async() => {
        const { data } = await useAsyncData('games', async () => {
            const { data } = await client.from('profiles').select('gamesFavorites').eq('id', user.value?.id).single()
                return data
        })

        if (data.value?.gamesFavorites) gamesStore.setFavoritesList(JSON.parse(data.value?.gamesFavorites))
    }

    const getFinished = async() => {
        const { data } = await useAsyncData('games', async () => {
            const { data } = await client.from('profiles').select('gamesFinished').eq('id', user.value?.id).single()
                return data
        })

        if (data.value?.gamesFinished) gamesStore.setFinishedList(JSON.parse(data.value.gamesFinished))
    }

    const isFavorite = computed(() => gamesStore.favoritesList.some(item => item.id === gamesStore.game?.id))
    const isFinished = computed(() => gamesStore.finishedList.some(item => item.id === gamesStore.game?.id))

    const addToFavorites = async() => {
        const favorites = [...gamesStore.favoritesList, gamesStore.game]
        const json = JSON.stringify(favorites)
        const { data, error } = await client.from('profiles').update({gamesFavorites: json}).eq('id', user.value?.id)

        if (!error) {
            gamesStore.setFavoritesList(favorites)
        }
    }

    const addToFinished = async() => {
        const finished = [...gamesStore.finishedList, gamesStore.game]
        const json = JSON.stringify(finished)
        const { data, error } = await client.from('profiles').update({gamesFinished: json}).eq('id', user.value?.id)

        if (!error) {
            gamesStore.setFinishedList(finished)

            if (isFavorite) {
                await removeFromFavorites()
            }
        }
    }

    const removeFromFavorites = async() => {
        const favorites = gamesStore.favoritesList.filter(item => item.id !== gamesStore.game?.id)
        const json = JSON.stringify(favorites)
        const { data, error } = await client.from('profiles').update({gamesFavorites: json}).eq('id', user.value?.id)

        if (!error) {
            gamesStore.setFavoritesList(favorites)
        }
    }

    const removeFromFinished = async() => {
        const finished = gamesStore.finishedList.filter(item => item.id !== gamesStore.game?.id)
        const json = JSON.stringify(finished)
        const { data, error } = await client.from('profiles').update({gamesFinished: json}).eq('id', user.value?.id)

        if (!error) {
            gamesStore.setFinishedList(finished)
        }
    }
    
    return {
        getCollections,
        getFavorites,
        getFinished,
        addToFavorites,
        addToFinished,
        removeFromFavorites,
        removeFromFinished,
    }
}
