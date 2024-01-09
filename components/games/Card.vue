<template>
    <v-card width="300">
        <NuxtLink  :to="detailsUrl" class="tw-text-current tw-no-underline">
            <v-img
                :src="game.background_image"
                height="200px"
                cover
            ></v-img>
            <v-card-title>{{ game.name }}</v-card-title>
        </NuxtLink>
        <v-card-subtitle>{{ genres }}</v-card-subtitle>
        <div class="tw-px-3 tw-pt-2">
            <GamesCardButtons :id="game.id"/>
        </div>
        <v-card-text>
            <p class="text--primary mb-2"><span class="tw-font-bold">Platforms:</span> {{ platforms }}</p>
            <p class="text--primary"><span class="tw-font-bold">Released:</span> {{ game.released }}</p>
        </v-card-text>
    </v-card>
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
