<template>
    <v-card width="300" :to="detailsUrl">
        <v-img
            :src="game.background_image"
            height="200px"
            cover
        ></v-img>
        <v-card-title>{{ game.name }}</v-card-title>
        <v-card-subtitle>{{ genres }}</v-card-subtitle>
        <v-card-text>
            <p class="text--primary mb-2"><span class="tw-font-bold">Platforms:</span> {{ platforms }}</p>
            <p class="text--primary"><span class="tw-font-bold">Released:</span> {{ game.released }}</p>
        </v-card-text>
    </v-card>
</template>

<script setup lang="ts">
    import { getGameGenres, getGamePlatforms } from '@/utils/gamesUtils';

    const { game } = defineProps<{
        game: Game
    }>()

    const genres = computed(() => getGameGenres(game.genres))
    const platforms = computed(() => getGamePlatforms(game.platforms))
    const detailsUrl = computed(() => `/games/${game.id}`)
</script>
