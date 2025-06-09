<template>
    <section class="tw-p-2">
        <h1 class="tw-mb-10 max-sm:tw-text-center">Games</h1>
        <section class="tw-w-1/2 max-md:tw-w-3/4 tw-mx-auto">
            <v-text-field
                placeholder="Search"
                v-model="search"
                append-inner-icon="mdi-magnify"
                @click:append-inner="onSearch"
                @click:clear="moviesStore.getMoviesList()"
                @keyup.enter="onSearch"
                clearable
            ></v-text-field>
        </section>
        <section class="tw-w-full tw-flex tw-flex-wrap tw-gap-4 max-sm:tw-justify-center">
            <MoviesCard
                v-for="movie in moviesStore.moviesList"
                :key="movie.kinopoiskId"
                :movie="movie"
            />
            <CommonObserver @intersect="intersected" />
        </section>
    </section>
</template>

<script setup lang='ts'>
    const search = ref<string>('')

    const moviesStore = useMoviesStore()
    
    await moviesStore.getMoviesList()
    
    const intersected = async() => {
        if (moviesStore.totalPages && moviesStore.currentPage < moviesStore.totalPages) {
            await moviesStore.getNextPage(search.value)
        }
    }

    const onSearch = async() => {
        if (search.value) {
            await moviesStore.getMoviesList(search.value, moviesStore.currentPage + 1)
        } else {
            await moviesStore.getMoviesList()
        }
    }
</script>
