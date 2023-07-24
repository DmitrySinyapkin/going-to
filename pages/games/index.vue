<template>
    <section>
        <h1>Games</h1>
        <section class="tw-w-1/4 tw-rounded-3xl tw-border tw-border-gray-700 tw-bg-gray-900 tw-text-gray-400 tw-shadow-2xl">
            <div v-for="game in gamesStore.gamesList" :key="game.slug" class="tw-text-center">
                {{ game.name }}
            </div>
        </section>
    </section>
</template>

<script setup lang='ts'>
    const gamesStore = useGamesStore()
    await gamesStore.getGamesList() 
</script>
