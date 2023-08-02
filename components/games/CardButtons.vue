<template>
    <div v-if="user" class="tw-flex tw-gap-1">
        <v-tooltip text="Add to favorites" location="bottom">
            <template v-slot:activator="{ props }">
                <v-btn
                    v-if="!isFavorite && !isFinished"
                    v-bind="props"
                    size="22"
                    icon="mdi-plus"
                    @click="addToFavorites"
                />
            </template>
        </v-tooltip>
        <v-tooltip text="Add to finished" location="bottom">
            <template v-slot:activator="{ props }">
                <v-btn
                    v-if="!isFinished"
                    v-bind="props"
                    size="22"
                    icon="mdi-check"
                    @click="addToFinished"
                />
            </template>
        </v-tooltip>
        <v-tooltip text="Remove from favorites" location="bottom">
            <template v-slot:activator="{ props }">
                <v-btn
                    v-if="isFavorite"
                    v-bind="props"
                    size="22"
                    icon="mdi-close"
                    @click="removeFromFavorites"
                />
            </template>
        </v-tooltip>
        <v-tooltip text="Remove from finished" location="bottom">
            <template v-slot:activator="{ props }">
                <v-btn
                    v-if="isFinished"
                    v-bind="props"
                    size="22"
                    icon="mdi-close"
                    @click="removeFromFinished"
                />
            </template>
        </v-tooltip>
    </div>
</template>

<script setup lang="ts">
    const { id } = defineProps<{
        id: number
    }>()

    const user = useSupabaseUser()
    const gamesStore = useGamesStore()
    const gamesCollections = useGamesCollections()

    const isFavorite = computed(() => gamesStore.favoritesList.some(item => item.id === id))
    const isFinished = computed(() => gamesStore.finishedList.some(item => item.id === id))

    const addToFavorites = async() => {
        await gamesStore.getGameDetails(id.toString())
        await gamesCollections.addToFavorites()
    }

    const addToFinished = async() => {
        await gamesStore.getGameDetails(id.toString())
        await gamesCollections.addToFinished()
    }

    const removeFromFavorites = async() => {
        await gamesStore.getGameDetails(id.toString())
        await gamesCollections.removeFromFavorites()
    }

    const removeFromFinished = async() => {
        await gamesStore.getGameDetails(id.toString())
        await gamesCollections.removeFromFinished()
    }
</script>
