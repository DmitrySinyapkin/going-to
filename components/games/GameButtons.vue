<template>
    <div v-if="user" class="tw-flex tw-gap-1">
        <v-tooltip text="Add to favorites" location="bottom">
            <template v-slot:activator="{ props }">
                <v-btn
                    v-if="!isFavorite && !isFinished"
                    v-bind="props"
                    density="compact"
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
                    density="compact"
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
                    density="compact"
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
                    density="compact"
                    icon="mdi-close"
                    @click="removeFromFinished"
                />
            </template>
        </v-tooltip>
    </div>
</template>

<script setup lang="ts">
    const gamesStore = useGamesStore()
    const user = useSupabaseUser()
    const client = useSupabaseClient()

    const isFavorite = computed(() => gamesStore.favoritesList.some(item => item.id === gamesStore.game?.id))
    const isFinished = computed(() => gamesStore.finishedList.some(item => item.id === gamesStore.game?.id))

    const addToFavorites = async() => {
        const favorites = [...gamesStore.favoritesList, gamesStore.game]
        const json = JSON.stringify(favorites)
        const { data, error } = await client.from('profiles').update({gamesFavorites: json}).eq('id', user.value?.id)

        if (!error) {
            gamesStore.setFavoritesList(favorites)
        }
    }

    const addToFinished = async() => {
        const finished = [...gamesStore.finishedList, gamesStore.game]
        const json = JSON.stringify(finished)
        const { data, error } = await client.from('profiles').update({gamesFinished: json}).eq('id', user.value?.id)

        if (!error) {
            gamesStore.setFinishedList(finished)

            if (isFavorite) {
                await removeFromFavorites()
            }
        }
    }

    const removeFromFavorites = async() => {
        const favorites = gamesStore.favoritesList.filter(item => item.id !== gamesStore.game?.id)
        const json = JSON.stringify(favorites)
        const { data, error } = await client.from('profiles').update({gamesFavorites: json}).eq('id', user.value?.id)

        if (!error) {
            gamesStore.setFavoritesList(favorites)
        }
    }

    const removeFromFinished = async() => {
        const finished = gamesStore.finishedList.filter(item => item.id !== gamesStore.game?.id)
        const json = JSON.stringify(finished)
        const { data, error } = await client.from('profiles').update({gamesFinished: json}).eq('id', user.value?.id)

        if (!error) {
            gamesStore.setFinishedList(finished)
        }
    }
</script>
