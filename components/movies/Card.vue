<template>
    <CommonCard
        :link="detailsUrl"
        :image="movie.posterUrlPreview"
        :title="movie.nameRu || movie.nameOriginal"
        :subtitle="movie.nameOriginal"
    >
        <template #buttons>
            <MoviesCardButtons :id="movie.kinopoiskId"/>
        </template>
        <template #content>
            <p class="text--primary mb-2"><span class="tw-font-bold">Genre:</span> {{ genres }}</p>
            <p class="text--primary"><span class="tw-font-bold">Year:</span> {{ movie.year }}</p>
        </template>
    </CommonCard>
</template>

<script setup lang="ts">
    import { getStringFromObjArray } from '@/utils/listUtils';

    const { movie } = defineProps<{
        movie: Movie | MovieDetails
    }>()

    const genres = computed(() => getStringFromObjArray(movie.genres, 'genre'))
    //const contries = computed(() => getStringFromObjArray(movie.contries, 'contry'))
    const detailsUrl = computed(() => `/films/${movie.kinopoiskId}`)
</script>
