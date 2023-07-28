<template>
    <section class="tw-p-2">
        <h1 class="tw-mb-10">Going to play</h1>
        <section class="tw-w-full tw-flex tw-flex-wrap tw-gap-4">
            <GameCard
                v-for="game in gamesStore.favoritesList"
                :key="game.slug"
                :game="game"
            />
        </section>
    </section>
</template>

<script setup lang="ts">
    import GameCard from '@/components/games/GameCard.vue';

    definePageMeta({
        middleware: 'auth',
    })

    const gamesStore = useGamesStore()
    const user = useSupabaseUser()
    const client = useSupabaseClient()
    const { data } = await useAsyncData('profiles', async () => {
    const { data } = await client.from('profiles').select('gamesFavorites').eq('id', user.value?.id).single()
        return data
    })

    if (data.value?.gamesFavorites) {
        gamesStore.setFavoritesList(data.value?.gamesFavorites)
    }
</script>
