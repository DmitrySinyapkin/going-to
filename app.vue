<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
  const gamesCollections = useGamesCollections()
  const user = useSupabaseUser()
  
  if (user.value) {
    await gamesCollections.getCollections()
  }
</script>
