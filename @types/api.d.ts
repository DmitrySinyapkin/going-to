type ExternalApi = 'games' | 'movies'

interface ExternalApiConfig {
    baseURL: string
    [key: string]: any
}

type ExternalApiConfigList = Record<ExternalApi, ExternalApiConfig>

type ExternalApiList = Record<ExternalApi, ReturnType<typeof $fetch.create>>
