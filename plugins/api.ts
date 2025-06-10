import { createFetchInstance } from "~/utils/api"

export default defineNuxtPlugin(async () => {
    const { data } = await useFetch<ExternalApiConfigList>('/api/external-api-config')

    if (!data.value) {
        return {
            provide: {
                api: {} as ExternalApiList,
            }
        }
    }

    const api = Object.fromEntries(Object.entries(data.value).map(item => [
        item[0],
        createFetchInstance(item[1])
    ])) as ExternalApiList

    return {
        provide: {
            api,
        }
    }
})
