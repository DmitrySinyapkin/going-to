<template>
    <section class="tw-p-2">
        <h1 class="tw-mb-10">Games</h1>
        <section class="tw-w-full tw-flex tw-flex-wrap tw-gap-4">
            <GameCard
                v-for="game in gamesStore.gamesList"
                :key="game.slug"
                :game="game"
            />
            <ObserverComponent @intersect="intersected" />
        </section>
    </section>
</template>

<script setup lang='ts'>
    import GameCard from '../../components/games/GameCard.vue';
    import ObserverComponent from '../../components/common/ObserverComponent.vue';

    const gamesStore = useGamesStore()
    await gamesStore.getGamesList()
    
    const intersected = async() => {
        if (gamesStore.nextPageUrl) {
            await gamesStore.getNextPage()
        }
    }
</script>
