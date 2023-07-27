interface GamesResponse {
    count: number
    next: string
    previous: string
    results: Game[]
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
  
interface Ratings {
    id: number
    title: string
    count: number
    percent: number
}
  
interface AddedByStatus {
    yet: number
    owned: number
    beaten: number
    toplay: number
    dropped: number
    playing: number
}
  
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

interface GameDetails {
    id: number
    slug: string
    name: string
    name_original: string
    description: string
    description_raw: string
    genres: Genre[]
    metacritic?: number
    metacritic_platforms?: MetacriticPlatform[]
    released: string
    tba: boolean
    updated: string
    background_image: string
    background_image_additional: string
    website: string
    rating?: number
    rating_top?: number
    ratings?: Ratings
    reactions: Reactions
    added?: number
    added_by_status?: AddedByStatus
    playtime?: number
    screenshots_count: number
    screenshots?: Screenshot[]
    movies_count?: number
    creators_count?: number
    achievements_count?: number
    parent_achievements_count?: string
    reddit_url?: string
    reddit_name?: string
    reddit_description?: string
    reddit_logo?: string
    reddit_count?: number
    twitch_count?: string
    youtube_count?: string
    reviews_text_count?: string
    ratings_count?: number
    suggestions_count?: number
    alternative_names?: string[]
    metacritic_url?: string
    parents_count?: number
    additions_count?: number
    game_series_count?: number
    esrb_rating?: EsrbRating
    platforms: Platform[]
  }
  
  interface MetacriticPlatform {
    metascore: number
    url: string
  }

  interface ScreenshotsResponse {
    count: number
    next: any
    previous: any
    results: Result[]
  }
  
  interface Screenshot {
    id: number
    image: string
    width: number
    height: number
    is_deleted: boolean
  }
  
  