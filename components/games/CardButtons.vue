<template>
    <div v-if="user" class="tw-flex tw-gap-1">
        <template v-for="button in buttons" :key="button.name">
            <CommonCardButton
                v-if="button.visibility"
                :tooltip="button.name"
                :icon="button.icon"
                @click="button.handler"
            />
        </template>
    </div>
</template>

<script setup lang="ts">
    const { id } = defineProps<{
        id: number
    }>()

    const user = useSupabaseUser()
    const gamesStore = useGamesStore()
    const collections = useCollections()

    const isFavorite = computed(() => gamesStore.favoritesList.some(item => item.id === id))
    const isFinished = computed(() => gamesStore.finishedList.some(item => item.id === id))

    const addToFavorites = async() => {
        await gamesStore.getGameDetails(id.toString())
        const favorites = gamesStore.game !== undefined ? [...gamesStore.favoritesList, gamesStore.game] : [...gamesStore.favoritesList]
        await collections.updateCollection('gamesFavorites', favorites)
    }

    const addToFinished = async() => {
        await gamesStore.getGameDetails(id.toString())
        const finished = gamesStore.game !== undefined ? [...gamesStore.finishedList, gamesStore.game] : [...gamesStore.finishedList]
        await collections.updateCollection('gamesFinished', finished)

        if (isFavorite) {
            await removeFromFavorites()
        }
    }

    const removeFromFavorites = async() => {
        const favorites = gamesStore.favoritesList.filter(item => item.id !== id)
        await collections.updateCollection('gamesFavorites', favorites)
    }

    const removeFromFinished = async() => {
        const finished = gamesStore.finishedList.filter(item => item.id !== id)
        await collections.updateCollection('gamesFinished', finished)
    }

    const buttons = computed(() => [
        {
            name: 'Add to favorites',
            icon: 'mdi-plus',
            handler: addToFavorites,
            visibility: !isFavorite.value && !isFinished.value
        },
        {
            name: 'Add to finished',
            icon: 'mdi-check',
            handler: addToFinished,
            visibility: !isFinished.value
        },
        {
            name: 'Remove from favorites',
            icon: 'mdi-close',
            handler: removeFromFavorites,
            visibility: isFavorite.value
        },
        {
            name: 'Remove from finished',
            icon: 'mdi-close',
            handler: removeFromFinished,
            visibility: isFinished.value
        }
    ])
</script>
