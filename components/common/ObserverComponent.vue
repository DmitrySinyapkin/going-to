<template>
    <div class="observer" ref="root"></div>
</template>

<script setup lang="ts">
    const root = ref<HTMLElement | null>(null)
    const observer = ref<IntersectionObserver | null>(null)
    const emit = defineEmits(['intersect'])

    onMounted(() => {
        observer.value = new IntersectionObserver(([entry]) => {
            if (entry && entry.isIntersecting) {
                emit('intersect')
            }
        })

        if (root.value) {
            observer.value?.observe(root.value)
        }
    })

    onBeforeUnmount(() => {
        observer.value?.disconnect()
    })
</script>
