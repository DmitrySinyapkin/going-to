<template>
    <v-card width="300">
        <NuxtLink  :to="link" class="tw-text-current tw-no-underline">
            <v-img
                :src="image"
                height="200px"
                cover
            ></v-img>
            <v-card-title>{{ title }}</v-card-title>
        </NuxtLink>
        <v-card-subtitle>{{ subtitle }}</v-card-subtitle>
        <div class="tw-px-3 tw-pt-2">
            <slot name="buttons"></slot>
        </div>
        <v-card-text>
            <slot name="content"></slot>
        </v-card-text>
    </v-card>
</template>

<script setup lang="ts">
    interface Props {
        link: string
        image: string
        title: string
        subtitle: string
        id?: number
        content?: string
    }

    const props = defineProps<Props>()
</script>
