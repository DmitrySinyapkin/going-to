<template>
    <section v-if="isOpen" class="tw-w-full tw-h-full tw-z-10 tw-bg-gray-400/50 tw-absolute tw-top-0 tw-left-0">
        <div class="tw-flex tw-justify-end tw-p-2">
            <v-btn
                    density="comfortable"
                    icon="mdi-close"
                    @click="handleClose"
                />
        </div>
        <Carousel :model-value="current">
            <Slide v-for="item in items" :key="item.id">
                <v-img
                    :src="item.image"
                    cover
                />
            </Slide>
        </Carousel>
    </section>
</template>

<script setup lang="ts">
    const { isOpen, items, current } = defineProps<{
        isOpen: boolean
        items: Screenshot[]
        current: number
    }>()

    const emit = defineEmits(['onClose'])

    const handleClose = () => {
        emit('onClose')
    }
</script>
