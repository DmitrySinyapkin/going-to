<template>
    <section class="tw-p-2 tw-relative">
        <v-card
            width="100%"
            height="300"
            :image="moviesStore.movie?.posterUrl"
        >
            <v-card-text class="tw-w-full tw-h-full tw-flex tw-place-content-center">
                <h1 class="tw-self-center tw-text-6xl tw-text-white tw-drop-shadow-[0_10px_10px_rgb(0,0,0)]">
                    {{ moviesStore.movie?.nameRu || moviesStore.movie?.nameOriginal }}
                </h1>
            </v-card-text>
        </v-card>
        <div class="tw-container tw-mx-auto tw-p-4">
            <div class="tw-flex tw-gap-10">
                <h2>{{ moviesStore.movie?.nameRu || moviesStore.movie?.nameOriginal }}</h2>
                <MoviesCardButtons :id="Number(route.params.id)" />
            </div>
            <p class="tw-text-gray-600" v-if="moviesStore.movie?.nameRu || moviesStore.movie?.nameOriginal">{{  moviesStore.movie?.nameOriginal }}</p>
            <p class="tw-pt-3"><span class="tw-font-bold">Year:</span> {{ moviesStore.movie?.year }}</p>
            <p class="tw-pt-3"><span class="tw-font-bold">Genres:</span> {{ genres }}</p>
            <p class="tw-pt-3" v-if="contries"><span class="tw-font-bold">Contries:</span> {{ contries }}</p>
            <p class="tw-pt-3">{{ moviesStore.movie?.description }}</p>
        </div>

    </section>
</template>

<script setup lang="ts">
    import { getStringFromObjArray } from '@/utils/listUtils'

    const route = useRoute()
    const moviesStore = useMoviesStore()
    await moviesStore.getMovieDetails(Number(route.params.id))

    const genres = computed(() => moviesStore.movie?.genres ? getStringFromObjArray(moviesStore.movie.genres, 'genre') : '')
    const contries = computed(() => moviesStore.movie?.countries ? getStringFromObjArray(moviesStore.movie.countries, 'country') : '')
</script>
