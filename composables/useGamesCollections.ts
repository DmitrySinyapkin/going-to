export async function useGamesCollections() {
    const user = useSupabaseUser()
    const client = useSupabaseClient()

    const { data } = await useAsyncData('games', async () => {
        const { data } = await client.from('profiles').select('gamesFinished, gamesFavorites').eq('id', user.value?.id).single()
            return data
    })
    return {
        favorites: data.value?.gamesFavorites,
        finished: data.value?.gamesFinished
    }
}
