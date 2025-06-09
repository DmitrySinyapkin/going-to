<template>
    <CommonCard
        :link="detailsUrl"
        :image="game.background_image"
        :title="game.name"
        :subtitle="genres"
    >
        <template #buttons>
            <GamesCardButtons :id="game.id"/>
        </template>
        <template #content>
            <p class="text--primary mb-2"><span class="tw-font-bold">Platforms:</span> {{ platforms }}</p>
            <p class="text--primary"><span class="tw-font-bold">Released:</span> {{ game.released }}</p>
        </template>
    </CommonCard>
</template>

<script setup lang="ts">
    import { getGameGenres, getGamePlatforms } from '@/utils/gamesUtils';

    const { game } = defineProps<{
        game: Game | GameDetails
    }>()

    const genres = computed(() => getGameGenres(game.genres))
    const platforms = computed(() => getGamePlatforms(game.platforms))
    const detailsUrl = computed(() => `/games/${game.id}`)
</script>
