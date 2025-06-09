<template>
    <v-tooltip :text="tooltip" location="bottom">
        <template v-slot:activator="{ props }">
            <v-btn
                v-bind="props"
                size="22"
                :icon="icon"
                @click="emit('click')"
            />
        </template>
    </v-tooltip>
</template>

<script setup lang="ts">
    interface Props {
        tooltip: string
        icon: string
    }

    const props = defineProps<Props>()

    const emit = defineEmits(['click'])
</script>
