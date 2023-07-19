export const useGamesStore = defineStore('games', {
    state: (): any => {
        return {
            gamesList: [],
        }
    },

    actions: {
        async getGamesList() {
            const { results } = await (await fetch(`https://api.rawg.io/api/games?key=${process.env.RAGW_API_KEY}`)).json()
            this.gamesList = results
        }
    }
})
