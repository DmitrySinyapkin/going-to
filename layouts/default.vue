<template>
  <v-app>
      <v-app-bar class="flex justify-between p-5 bg-black text-white">
          <nuxt-link to="/">GOING-TO</nuxt-link>
      </v-app-bar>
      <v-navigation-drawer class="bg-gray-200 pt-20" permanent disable-resize-watcher>
          <SidebarMenu />
      </v-navigation-drawer>
      <v-main class="bg-gray pt-40">
          <slot />
      </v-main>
      <v-footer class="bg-black text-white">
          <span>footer</span>
      </v-footer>
  </v-app>
</template>

<script setup>
  import SidebarMenu from '../components/common/SidebarMenu.vue';
</script>
