<template>
    <section class="tw-p-2 tw-relative">
        <v-card
            width="100%"
            height="300"
            :image="gamesStore.game?.background_image"
        >
            <v-card-text class="tw-w-full tw-h-full tw-flex tw-place-content-center">
                <h1 class="tw-self-center tw-text-6xl tw-text-white tw-drop-shadow-[0_10px_10px_rgb(0,0,0)]">
                    {{ gamesStore.game?.name }}
                </h1>
            </v-card-text>
        </v-card>
        <div class="tw-container tw-mx-auto tw-p-4">
            <div class="tw-flex tw-gap-10">
                <h2>{{ gamesStore.game?.name }}</h2>
                <GamesButtons />
            </div>
            <p class="tw-text-gray-600">{{ genres }}</p>
            <p class="tw-pt-3"><span class="tw-font-bold">Platforms:</span> {{ platforms }}</p>
            <p class="tw-pt-3"><span class="tw-font-bold">Released:</span> {{ gamesStore.game?.released }}</p>
            <p class="tw-pt-3">
                <span class="tw-font-bold">Developers: </span>
                <span v-for="(developer, i) in gamesStore.game?.developers">
                    <NuxtLink
                        v-if="gamesStore.game?.developers && i === gamesStore.game?.developers.length - 1"
                        :to="`/games?developers=${developer.id}`"
                        class="tw-text-gray-600 tw-no-underline hover:tw-font-bold"
                    >
                        {{ developer.name }}
                    </NuxtLink>
                    <NuxtLink
                        v-else
                        :to="`/games?developers=${developer.id}`"
                        class="tw-text-gray-600 tw-no-underline hover:tw-font-bold"
                    >
                        {{ developer.name }}, 
                    </NuxtLink>
                </span>
            </p>
            <p class="tw-pt-3">{{ gamesStore.game?.description_raw }}</p>
        </div>
        <v-row class="tw-pt-4 tw-px-16">
            <v-col
                v-for="(screen, i) in gamesStore.game?.screenshots"
                :key="screen.id"
                class="d-flex child-flex"
                cols="4"
            >
                <v-img
                    :src="screen.image"
                    class="tw-cursor-pointer"
                    @click="onOpen(i)"
                    cover
                />
            </v-col>
        </v-row>
        <CommonCarousel
            :isOpen="isOpen"
            @onClose="onClose"
            :items="gamesStore.game?.screenshots!"
            :current="current"
        />
    </section>
</template>

<script setup lang="ts">
    const route = useRoute()
    const gamesStore = useGamesStore()
    await gamesStore.getGameDetails(route.params.id)

    if (gamesStore.game?.id) {
        await gamesStore.getGameScreenshots()
    }

    const genres = computed(() => getGameGenres(gamesStore.game!.genres))
    const platforms = computed(() => getGamePlatforms(gamesStore.game!.platforms))

    const isOpen = ref<boolean>(false)
    const current = ref<number>(0)

    const onOpen = (index: number) => {
        current.value = index
        isOpen.value = true
    }

    const onClose = () => {
        isOpen.value = false
    }
</script>
