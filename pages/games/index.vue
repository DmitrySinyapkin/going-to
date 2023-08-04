<template>
    <section class="tw-p-2">
        <h1 class="tw-mb-10 max-sm:tw-text-center">Games</h1>
        <section class="tw-w-1/2 tw-mx-auto">
            <v-text-field
                placeholder="Search"
                v-model="search"
                append-inner-icon="mdi-magnify"
                @click:append-inner="onSearch"
                @click:clear="gamesStore.getGamesList"
                @keyup.enter="onSearch"
                clearable
            ></v-text-field>
        </section>
        <section class="tw-w-full tw-flex tw-flex-wrap tw-gap-4 max-sm:tw-justify-center">
            <GamesCard
                v-for="game in gamesStore.gamesList"
                :key="game.slug"
                :game="game"
            />
            <CommonObserver @intersect="intersected" />
        </section>
    </section>
</template>

<script setup lang='ts'>
    const search = ref<string>('')

    const gamesStore = useGamesStore()
    const route = useRoute()
    
    await gamesStore.getGamesList({ params: { ...route.query } })
    
    const intersected = async() => {
        if (gamesStore.nextPageUrl) {
            await gamesStore.getNextPage()
        }
    }

    const onSearch = () => {
        if (search.value) {
            gamesStore.getGamesList({ params: { search: search.value } })
        } else {
            gamesStore.getGamesList()
        }
    }
</script>
