import { defu } from "defu"
import { UseFetchOptions } from "nuxt/app"

const baseUrl = 'https://kinopoiskapiunofficial.tech/api/v2.2'

export function useMoviesFetch<T>(url: string, params: UseFetchOptions<T> = {}) {
    const config = useRuntimeConfig()

    const defaults: UseFetchOptions<T> = {
        baseURL: baseUrl,
        headers: {
            ['X-API-KEY']:  config.public.kpApiKey,
        },

        onResponse({ response }) {
            return response._data
        },

        onResponseError({ response }) {
            throw new Error(response._data.error)
        },
    }
    
    const options = defu(params, defaults)

    return useFetch(url, options)
}
