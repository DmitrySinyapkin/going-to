<template>
  <div class="tw-p-2">
    <h1>Home</h1>
    <div>
      <nuxt-link to="/games">games</nuxt-link>
    </div>
  </div>
</template>

<script setup lang="ts">
  definePageMeta({
    layout: 'main',
  })
</script>
