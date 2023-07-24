<template>
    <v-card width="300">
        <v-img
            :src="game.background_image"
            height="200px"
            cover
        ></v-img>
        <v-card-title>{{ game.name }}</v-card-title>
        <v-card-subtitle>{{ genres }}</v-card-subtitle>
        <v-card-text>
            <p class="text--primary mb-2">Платформа: {{ platforms }}</p>
            <p class="text--primary">Дата выхода: {{ game.released }}</p>
        </v-card-text>
    </v-card>
</template>

<script setup lang="ts">
    const { game } = defineProps<{
        game: Game
    }>()

    const genres = computed(() => {
        return game.genres.reduce((acc, item, i, arr) => i === arr.length - 1 ? acc + item.name : acc + item.name + ', ', '')
    })

    const platforms = computed(() => {
        return game.platforms.reduce((acc, item, i, arr) => i === arr.length - 1 ? acc + item.platform.name : acc + item.platform.name + ', ', '')
    })
</script>
