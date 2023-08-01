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
  
  if (user.value) {
    const { data } = await useAsyncData('games', async () => {
      const { data } = await client.from('profiles').select('gamesFinished, gamesFavorites').eq('id', user.value?.id).single()
          return data
    })
    
    if (data.value?.gamesFinished) {
      gamesStore.setFinishedList(JSON.parse(data.value?.gamesFinished))
    }

    if (data.value?.gamesFavorites) {
      gamesStore.setFavoritesList(JSON.parse(data.value?.gamesFavorites))
    }
  }
</script>
