<template>
    <section class="tw-p-2">
        <h1>Games</h1>
        <section class="tw-w-full tw-flex tw-flex-wrap tw-gap-4">
            <GameCard
                v-for="game in gamesStore.gamesList"
                :key="game.slug"
                :game="game"
            ></GameCard>
        </section>
    </section>
</template>

<script setup lang='ts'>
    import GameCard from '../../components/games/GameCard.vue';

    const gamesStore = useGamesStore()
    await gamesStore.getGamesList() 
</script>
