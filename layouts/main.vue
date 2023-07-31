<template>
    <v-app>
      <v-app-bar>
          <div class="tw-w-full tw-h-full tw-px-5 tw-flex tw-justify-between tw-items-center tw-bg-black tw-text-white">
            <nuxt-link class="tw-text-white" to="/">GOING-TO</nuxt-link>
            <UserTopMenu />
          </div>
      </v-app-bar>
      <v-main class="bg-gray pt-40">
          <slot />
      </v-main>
  </v-app>
</template>

<script setup lang="ts">
    import UserTopMenu from '@/components/common/UserTopMenu.vue';
</script>
