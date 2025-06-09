<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
  const collections = useCollections()
  const user = useSupabaseUser()
  
  if (user.value) {
    await collections.getCollections()
  }
</script>
