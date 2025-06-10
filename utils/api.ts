export const createFetchInstance = (options: ExternalApiConfig) => $fetch.create({
    ...options,
    onResponse({ response }) {
        return response._data
    },
    onResponseError({ response }) {
        throw new Error(response._data.error)
    },
})
