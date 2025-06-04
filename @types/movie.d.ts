interface Movie {
    kinopoiskId: number
    nameRu: string
    nameOriginal: string
    contries: MovieCountry[]
    genres: MovieGenre[]
    ratingKinopoisk: number
    ratingImdb: number
    year: number
    posterUrl: string
    posterUrlPreview: string
}

interface MovieDetails extends Movie {
    description: string
    shortDescription: string
    serial: boolean
    coverUrl: string
    logoUrl: string
}

interface MovieGenre {
    genre: string
}

interface MovieCountry {
    country: string
}

interface MoviesResponse {
    total: number
    totalPages: number
    items: Movie[]
}