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
  
  if (user.value) {
    const { favorites, finished } = await useGamesCollections()

    gamesStore.setFavoritesList(JSON.parse(favorites!))
    gamesStore.setFinishedList(JSON.parse(finished!))
  }
</script>
