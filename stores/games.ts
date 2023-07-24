export const useGamesStore = defineStore('games', {
    state: (): any => {
        return {
            gamesList: [],
        }
    },

    actions: {
        async getGamesList() {
            const resp: any = await useGamesFetch('/games')
            this.gamesList = resp.data.value.results
        }
    }
})
