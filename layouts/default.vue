<template>
  <v-app>
    <v-app-bar>
        <div class="tw-w-full tw-h-full tw-px-5 tw-flex tw-justify-between tw-items-center tw-bg-black tw-text-white">
          <nuxt-link v-if="mdAndUp" class="tw-text-white" to="/">GOING-TO</nuxt-link>
          <v-menu v-else>
            <template v-slot:activator="{ props }">
              <v-btn icon="mdi-dots-vertical" v-bind="props"></v-btn>
            </template>

            <SidebarMenu />
          </v-menu>
          <UserTopMenu />
        </div>
    </v-app-bar>
    <v-navigation-drawer class="bg-gray-200 pt-20" :permanent="mdAndUp">
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
  import { useDisplay } from 'vuetify';

  const { mdAndUp } = useDisplay()
</script>
