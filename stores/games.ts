interface State {
    gamesList: Game[] | undefined,
    nextPageUrl: string | null 
}

export const useGamesStore = defineStore('games', {
    state: (): State => {
        return {
            gamesList: [],
            nextPageUrl: null,
        }
    },

    actions: {
        async getGamesList() {
            const { data } = await useGamesFetch<GamesResponse>('/games')
            this.gamesList = data.value.results
            this.nextPageUrl = data.value.next
        },
        async getNextPage() {
            const { data } = await useFetch<GamesResponse>(this.nextPageUrl)
            this.gamesList = [...this.gamesList, ...data.value.results]
            this.nextPageUrl = data.value.next
        }
    }
})
