<template>
    <section v-if="isOpen" class="tw-w-full tw-h-full tw-z-10 tw-bg-black/90 tw-absolute tw-top-0 tw-left-0">
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
            <template #addons>
                <Navigation />
            </template>
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

<style>   
    .carousel__prev,
    .carousel__next {
        box-sizing: content-box;
        border: 5px solid white;
        border-radius: 50%;
        background-color: white;
    }
</style>
