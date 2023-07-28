<template>
    <div v-if="user" class="tw-flex tw-gap-1">
        <v-btn density="compact" icon="mdi-plus" @click="addToFavorites"></v-btn>
    </div>
</template>

<script setup lang="ts">
    const gamesStore = useGamesStore()
    const user = useSupabaseUser()
    const client = useSupabaseClient()

    const addToFavorites = async() => {
        if (!gamesStore.favoritesList.some(item => item.id === gamesStore.game?.id)) {
            const json = JSON.stringify([...gamesStore.favoritesList, gamesStore.game])
            const { data, error } = await client.from('profiles').update({gamesFavorites: json}).eq('id', user.value?.id)
        }
    }
</script>
