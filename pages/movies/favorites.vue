<template>
    <section class="tw-p-2">
        <h1 class="tw-mb-10 max-sm:tw-text-center">Going to watch</h1>
        <section class="tw-w-full tw-flex tw-flex-wrap tw-gap-4 max-sm:tw-justify-center">
            <MoviesCard
                v-for="movie in moviesStore.favoritesList"
                :key="movie.kinopoiskId"
                :movie="movie"
            />
        </section>
    </section>
</template>

<script setup lang="ts">
    definePageMeta({
        middleware: 'auth',
    })

    const moviesStore = useMoviesStore()
    const collections = useCollections()

    await collections.getCollection('moviesFavorites')
</script>
