type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

interface Database {
  public: {
    Tables: {
      _prisma_migrations: {
        Row: {
          applied_steps_count: number
          checksum: string
          finished_at: string | null
          id: string
          logs: string | null
          migration_name: string
          rolled_back_at: string | null
          started_at: string
        }
        Insert: {
          applied_steps_count?: number
          checksum: string
          finished_at?: string | null
          id: string
          logs?: string | null
          migration_name: string
          rolled_back_at?: string | null
          started_at?: string
        }
        Update: {
          applied_steps_count?: number
          checksum?: string
          finished_at?: string | null
          id?: string
          logs?: string | null
          migration_name?: string
          rolled_back_at?: string | null
          started_at?: string
        }
        Relationships: []
      }
      Game: {
        Row: {
          background_image: string
          background_image_additional: string
          description: string
          description_raw: string
          id: number
          name: string
          name_original: string
          rating: number
          rating_top: number
          released: string
          screenshots_count: number
          slug: string
          tba: boolean
          updated: string
          userFinishedId: number
          userWishlistId: number
          website: string
        }
        Insert: {
          background_image: string
          background_image_additional: string
          description: string
          description_raw: string
          id: number
          name: string
          name_original: string
          rating: number
          rating_top: number
          released: string
          screenshots_count: number
          slug: string
          tba: boolean
          updated: string
          userFinishedId: number
          userWishlistId: number
          website: string
        }
        Update: {
          background_image?: string
          background_image_additional?: string
          description?: string
          description_raw?: string
          id?: number
          name?: string
          name_original?: string
          rating?: number
          rating_top?: number
          released?: string
          screenshots_count?: number
          slug?: string
          tba?: boolean
          updated?: string
          userFinishedId?: number
          userWishlistId?: number
          website?: string
        }
        Relationships: [
          {
            foreignKeyName: "Game_userFinishedId_fkey"
            columns: ["userFinishedId"]
            referencedRelation: "Users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Game_userWishlistId_fkey"
            columns: ["userWishlistId"]
            referencedRelation: "Users"
            referencedColumns: ["id"]
          }
        ]
      }
      Genre: {
        Row: {
          gameId: number
          games_count: number
          id: number
          image_background: string
          name: string
          slug: string
        }
        Insert: {
          gameId: number
          games_count: number
          id: number
          image_background: string
          name: string
          slug: string
        }
        Update: {
          gameId?: number
          games_count?: number
          id?: number
          image_background?: string
          name?: string
          slug?: string
        }
        Relationships: [
          {
            foreignKeyName: "Genre_gameId_fkey"
            columns: ["gameId"]
            referencedRelation: "Game"
            referencedColumns: ["id"]
          }
        ]
      }
      Platform: {
        Row: {
          gameId: number
          id: number
          released_at: string
        }
        Insert: {
          gameId: number
          id?: number
          released_at: string
        }
        Update: {
          gameId?: number
          id?: number
          released_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "Platform_gameId_fkey"
            columns: ["gameId"]
            referencedRelation: "Game"
            referencedColumns: ["id"]
          }
        ]
      }
      PlatformDesc: {
        Row: {
          id: number
          name: string
          platformId: number
          slug: string
        }
        Insert: {
          id: number
          name: string
          platformId: number
          slug: string
        }
        Update: {
          id?: number
          name?: string
          platformId?: number
          slug?: string
        }
        Relationships: [
          {
            foreignKeyName: "PlatformDesc_platformId_fkey"
            columns: ["platformId"]
            referencedRelation: "Platform"
            referencedColumns: ["id"]
          }
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          full_name: string | null
          gamesFavorites: string | null
          gamesFinished: string | null
          id: string
          updated_at: string | null
          username: string | null
          website: string | null
        }
        Insert: {
          avatar_url?: string | null
          full_name?: string | null
          gamesFavorites?: string | null
          gamesFinished?: string | null
          id: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Update: {
          avatar_url?: string | null
          full_name?: string | null
          gamesFavorites?: string | null
          gamesFinished?: string | null
          id?: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      Requirements: {
        Row: {
          id: number
          minimum: string
          platformId: number
          recommended: string
        }
        Insert: {
          id?: number
          minimum: string
          platformId: number
          recommended: string
        }
        Update: {
          id?: number
          minimum?: string
          platformId?: number
          recommended?: string
        }
        Relationships: [
          {
            foreignKeyName: "Requirements_platformId_fkey"
            columns: ["platformId"]
            referencedRelation: "Platform"
            referencedColumns: ["id"]
          }
        ]
      }
      Screenshot: {
        Row: {
          gameId: number
          height: number
          id: number
          image: string
          is_deleted: boolean
          width: number
        }
        Insert: {
          gameId: number
          height: number
          id: number
          image: string
          is_deleted: boolean
          width: number
        }
        Update: {
          gameId?: number
          height?: number
          id?: number
          image?: string
          is_deleted?: boolean
          width?: number
        }
        Relationships: [
          {
            foreignKeyName: "Screenshot_gameId_fkey"
            columns: ["gameId"]
            referencedRelation: "Game"
            referencedColumns: ["id"]
          }
        ]
      }
      Users: {
        Row: {
          email: string
          id: number
        }
        Insert: {
          email: string
          id: number
        }
        Update: {
          email?: string
          id?: number
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
