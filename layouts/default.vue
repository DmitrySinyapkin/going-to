<template>
  <v-app>
      <v-app-bar class="flex justify-between p-5 bg-black text-white">
          <div>GOING-TO</div>
          <div>User</div>
      </v-app-bar>
      <v-navigation-drawer class="bg-gray-200">
          
      </v-navigation-drawer>
      <v-main class="bg-gray">
          <slot />
      </v-main>
      <v-footer class="bg-black text-white">
          <span>footer</span>
      </v-footer>
  </v-app>
</template>
