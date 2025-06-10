const externalApiList: ExternalApiConfigList = {
    games: {
        baseURL: 'https://api.rawg.io/api',
        params: {
            key: process.env.NUXT_RAGW_API_KEY
        }
    },
    movies: {
        baseURL: 'https://kinopoiskapiunofficial.tech/api/v2.2',
        headers: {
            ['X-API-KEY']:  process.env.NUXT_KPUN_API_KEY,
        },
    }
}

export default defineEventHandler((event) => {
    return externalApiList
})
