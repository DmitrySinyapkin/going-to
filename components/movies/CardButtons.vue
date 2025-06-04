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
    const moviesStore = useMoviesStore()

    const isFavorite = computed(() => moviesStore.favoritesList.some(item => item.kinopoiskId === id))
    const isFinished = computed(() => moviesStore.finishedList.some(item => item.kinopoiskId === id))

    const addToFavorites = async() => {
        //await moviesStore.getMovieDetails(id)
        alert('Not implemented yet')
    }

    const addToFinished = async() => {
        //await moviesStore.getMovieDetails(id)
        alert('Not implemented yet')
    }

    const removeFromFavorites = async() => {
        alert('Not implemented yet')
    }

    const removeFromFinished = async() => {
        alert('Not implemented yet')
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
