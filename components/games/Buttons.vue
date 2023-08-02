<template>
    <div v-if="user" class="tw-flex tw-gap-1">
        <v-tooltip text="Add to favorites" location="bottom">
            <template v-slot:activator="{ props }">
                <v-btn
                    v-if="!isFavorite && !isFinished"
                    v-bind="props"
                    density="compact"
                    icon="mdi-plus"
                    @click="gamesCollections.addToFavorites"
                />
            </template>
        </v-tooltip>
        <v-tooltip text="Add to finished" location="bottom">
            <template v-slot:activator="{ props }">
                <v-btn
                    v-if="!isFinished"
                    v-bind="props"
                    density="compact"
                    icon="mdi-check"
                    @click="gamesCollections.addToFinished"
                />
            </template>
        </v-tooltip>
        <v-tooltip text="Remove from favorites" location="bottom">
            <template v-slot:activator="{ props }">
                <v-btn
                    v-if="isFavorite"
                    v-bind="props"
                    density="compact"
                    icon="mdi-close"
                    @click="gamesCollections.removeFromFavorites"
                />
            </template>
        </v-tooltip>
        <v-tooltip text="Remove from finished" location="bottom">
            <template v-slot:activator="{ props }">
                <v-btn
                    v-if="isFinished"
                    v-bind="props"
                    density="compact"
                    icon="mdi-close"
                    @click="gamesCollections.removeFromFinished"
                />
            </template>
        </v-tooltip>
    </div>
</template>

<script setup lang="ts">
    const user = useSupabaseUser()
    const gamesStore = useGamesStore()
    const gamesCollections = useGamesCollections()

    const isFavorite = computed(() => gamesStore.favoritesList.some(item => item.id === gamesStore.game?.id))
    const isFinished = computed(() => gamesStore.finishedList.some(item => item.id === gamesStore.game?.id))
</script>
