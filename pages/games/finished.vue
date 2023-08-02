<template>
    <section class="tw-p-2">
        <h1 class="tw-mb-10">Finished games</h1>
        <section class="tw-w-full tw-flex tw-flex-wrap tw-gap-4">
            <GamesCard
                v-for="game in gamesStore.finishedList"
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
    const gamesCollections = useGamesCollections()

    await gamesCollections.getFinished()
</script>
