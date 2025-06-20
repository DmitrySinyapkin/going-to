import { UseFetchOptions } from "nuxt/app"

interface State {
    gamesList: Game[] | undefined
    nextPageUrl: string | undefined
    game: GameDetails | undefined
    favoritesList: GameDetails[]
    finishedList: GameDetails[]
}

export const useGamesStore = defineStore('games', {
    state: (): State => {
        return {
            gamesList: [],
            nextPageUrl: undefined,
            game: undefined,
            favoritesList: [],
            finishedList: [],
        }
    },

    actions: {
        async getGamesList(options?: UseFetchOptions<GamesResponse>) {
            const { data } = await useGamesFetch<GamesResponse>('/games', options)
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
        async getGameDetails(id: string | string[]) {
            const { data } = await useGamesFetch<GameDetails>(`/games/${id}`)
            if (data.value) {
                this.game = data.value
            }
        },
        async getGameScreenshots() {
            if (this.game?.id) {
                const { data } = await useGamesFetch<ScreenshotsResponse>(`/games/${this.game.id}/screenshots`)
                if (data.value) {
                    this.game = {...this.game, screenshots: data.value?.results}
                }
            }
        },
        setFavoritesList(data: GameDetails[]) {
            this.favoritesList = data
        },
        setFinishedList(data: GameDetails[]) {
            this.finishedList = data
        },
    }
})
