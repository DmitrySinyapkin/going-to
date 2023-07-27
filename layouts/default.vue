<template>
  <v-app>
    <v-app-bar>
        <div class="tw-w-full tw-h-full tw-px-5 tw-flex tw-justify-between tw-items-center tw-bg-black tw-text-white">
          <nuxt-link class="tw-text-white" to="/">GOING-TO</nuxt-link>
          <UserTopMenu />
        </div>
    </v-app-bar>
    <v-navigation-drawer class="bg-gray-200 pt-20" permanent disable-resize-watcher>
        <SidebarMenu />
    </v-navigation-drawer>
    <v-main class="bg-gray pt-40">
        <slot />
    </v-main>
  </v-app>
</template>

<script setup>
  import SidebarMenu from '@/components/common/SidebarMenu.vue';
  import UserTopMenu from '@/components/common/UserTopMenu.vue';
</script>
