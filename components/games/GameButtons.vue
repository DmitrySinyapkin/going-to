<template>
    <div v-if="user" class="tw-flex tw-gap-1">
        <v-btn
            v-if="!isFavorite && !isFinished"
            density="compact"
            icon="mdi-plus"
            @click="addToFavorites"
        />
        <v-btn
            v-if="!isFinished"
            density="compact"
            icon="mdi-check"
            @click="addToFinished"
        />
        <v-btn
            v-if="isFavorite"
            density="compact"
            icon="mdi-close"
            @click="removeFromFavorites"
        />
        <v-btn
            v-if="isFinished"
            density="compact"
            icon="mdi-close"
            @click="removeFromFinished"
        />
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
