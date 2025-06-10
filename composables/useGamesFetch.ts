import { UseFetchOptions } from "nuxt/app"

export function useGamesFetch<T>(url: string, options: UseFetchOptions<T> = {}) {
    const { $api } = useNuxtApp()

    return useFetch(url, {
        ...options,
        $fetch: $api.games
    })
}
