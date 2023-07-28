<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
  const gamesStore = useGamesStore()
  const user = useSupabaseUser()
  const client = useSupabaseClient()
  const { data } = await useAsyncData('profiles', async () => {
    const { data } = await client.from('profiles').select('gamesFinished, gamesFavorites').eq('id', user.value?.id).single()
        return data
  })

  if (data.value?.gamesFinished) {
    gamesStore.setFavoritesList(JSON.parse(data.value?.gamesFinished))
  }

  if (data.value?.gamesFavorites) {
    gamesStore.setFavoritesList(JSON.parse(data.value?.gamesFavorites))
  }
</script>
