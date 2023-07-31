import { defu } from "defu"
import { UseFetchOptions } from "nuxt/app"

const baseUrl = 'https://api.rawg.io/api'

export function useGamesFetch<T>(url: string, params: UseFetchOptions<T> = {}) {
    const config = useRuntimeConfig()

    const defaults: UseFetchOptions<T> = {
        baseURL: baseUrl,
        params: {
            key:  config.public.ragwApiKey,
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
