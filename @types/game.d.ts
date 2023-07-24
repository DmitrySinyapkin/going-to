interface GamesResponse {
    count: number
    next: string
    previous: string
    results: Result[]
}
  
interface Game {
    id: number
    slug: string
    name: string
    released: string
    tba: boolean
    background_image: string
    genres: Genre[]
    rating: number
    rating_top: number
    ratings: Ratings
    ratings_count: number
    reviews_text_count: string
    added: number
    added_by_status: AddedByStatus
    metacritic: number
    playtime: number
    suggestions_count: number
    updated: string
    esrb_rating: EsrbRating
    platforms: Platform[]
}
  
interface Ratings {}
  
interface AddedByStatus {}
  
interface EsrbRating {
    id: number
    slug: string
    name: string
}
  
interface Platform {
    platform: PlatformDesc
    released_at: string
    requirements: Requirements
}
  
interface PlatformDesc {
    id: number
    slug: string
    name: string
}
  
interface Requirements {
    minimum: string
    recommended: string
}

interface Genre {
    games_count: number
    id: number
    image_background: string
    name: string
    slug: string
}
  