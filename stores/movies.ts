import { UseFetchOptions } from "nuxt/app"

export const useMoviesStore = defineStore('movies', () => {
    const moviesList = ref<Movie[] | []>([])
    const currentPage = ref<number>(1)
    const totalPages = ref<number | null>(null)
    const movie = ref<MovieDetails | null>(null)
    const favoritesList = ref<Array<Movie | MovieDetails> | []>([])
    const finishedList = ref<Array<Movie | MovieDetails> | []>([])

    const getMoviesList = async (keyword: string = '', page: number = 1) => {
        try {
            const { data } = await useMoviesFetch<MoviesResponse>('/films', {
                params: {
                    keyword,
                    page
                }
            })

            moviesList.value = data?.value?.items || []
            currentPage.value = page
            totalPages.value = data?.value?.totalPages || null
        } catch(err: unknown) {
            console.log(err)
        }
    }

    const getNextPage = async (keyword: string = '') => {
        try {
            const { data } = await useMoviesFetch<MoviesResponse>('/films', {
                params: {
                    keyword,
                    page: currentPage.value + 1
                }
            })

            if (data?.value?.items.length) {
                moviesList.value = [...moviesList.value, ...data.value.items]
                currentPage.value += 1
            }
        } catch(err: unknown) {
            console.log(err)
        }
    }

    const getMovieDetails = async (id: number) => {
        try {
            const { data } = await useMoviesFetch<MovieDetails>(`/films/${id}`)

            if (data.value?.kinopoiskId) {
                movie.value = data.value
            }
        } catch(err: unknown) {
            console.log(err)
        }
    }

    return {
        moviesList,
        currentPage,
        totalPages,
        movie,
        favoritesList,
        finishedList,
        getMoviesList,
        getNextPage,
        getMovieDetails
    }
})
