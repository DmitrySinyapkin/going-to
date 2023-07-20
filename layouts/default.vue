<template>
  <v-app>
      <v-app-bar class="flex justify-between p-5 bg-black text-white">
          <div>GOING-TO</div>
          <div>User</div>
      </v-app-bar>
      <v-navigation-drawer class="bg-gray-200" permanent disable-resize-watcher>
          <SidebarMenu />
      </v-navigation-drawer>
      <v-main class="bg-gray">
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
