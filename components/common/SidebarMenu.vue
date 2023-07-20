<template>
    <section class="pt-20">
        <template v-for="item in sidebarItems" :key="item.value">
            <v-list>
                <v-list-item
                    :title="item.title"
                    :value="item.value"
                    :to="item.to"
                    variant="tonal"
                />
            </v-list>
            <v-list class="mb-2">
                <v-list-item
                    v-for="subitem in item.subitems"
                    :key="subitem.value"
                    :title="subitem.title"
                    :value="subitem.value"
                    :to="`${item.to}${subitem.to}`"
                    variant="plain"
                />
            </v-list>
        </template>
    </section>
</template>

