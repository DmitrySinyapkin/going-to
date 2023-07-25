interface State {
    gamesList: Game[] | undefined
    nextPageUrl: string | undefined
    game: GameDetails | undefined
}

export const useGamesStore = defineStore('games', {
    state: (): State => {
        return {
            gamesList: [],
            nextPageUrl: undefined,
            game: undefined,
        }
    },

    actions: {
        async getGamesList() {
            const { data } = await useGamesFetch<GamesResponse>('/games')
            this.gamesList = data.value?.results
            this.nextPageUrl = data.value?.next
        },
        async getNextPage() {
            const { data } = await useFetch<GamesResponse>(this.nextPageUrl!)
            const gamesList = this.gamesList || []
            const results = data.value?.results || []
            this.gamesList = [...gamesList, ...results]
            this.nextPageUrl = data.value?.next
        },
        async getGameDetails(id: string) {
            const { data } = await useGamesFetch<GameDetails>(`/games/${id}`)
            if (data.value) {
                this.game = data.value
                const resp = await useGamesFetch<ScreenshotsResponse>(`/games/${id}/screenshots`)
                this.game.screenshots = resp.data.value?.results
            }
        },
    }
})
