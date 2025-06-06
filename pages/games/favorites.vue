<template>
    <section class="tw-p-2">
        <h1 class="tw-mb-10 max-sm:tw-text-center">Going to play</h1>
        <section class="tw-w-full tw-flex tw-flex-wrap tw-gap-4 max-sm:tw-justify-center">
            <GamesCard
                v-for="game in gamesStore.favoritesList"
                :key="game.slug"
                :game="game"
            />
        </section>
    </section>
</template>

<script setup lang="ts">
    definePageMeta({
        middleware: 'auth',
    })

    const gamesStore = useGamesStore()
    const collections = useCollections()

    await collections.getCollection('gamesFavorites')
</script>
