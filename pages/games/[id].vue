<template>
    <section class="tw-p-2">
        <h1>{{ gamesStore.game?.name }}</h1>
    </section>
</template>

<script setup lang="ts">
    const route = useRoute()
    const gamesStore = useGamesStore()
    await gamesStore.getGameDetails(route.params.id)
</script>
