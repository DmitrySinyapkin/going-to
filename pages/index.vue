<template>
  <div class="tw-flex tw-flex-col tw-items-center tw-justify-center tw-pt-10">
    <h1 class="tw-mb-10">Welcome to GOING-TO App</h1>
    <div v-if="user" class="tw-mt-6">
      <SidebarMenu />
    </div>
    <div v-else>
      <v-list>
        <v-list-item
          variant="plain"
          to="/login"
          title="Log in" 
        />
        <v-list-item
          variant="plain"
          to="/signup"
          title="Sign Up" 
        />
      </v-list>
    </div>
  </div>
</template>

<script setup lang="ts">
  import SidebarMenu from '@/components/common/SidebarMenu.vue';

  definePageMeta({
    layout: 'main',
  })

  const user = useSupabaseUser()
</script>
