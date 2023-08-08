<template>
    <div>
        <div v-if="user" class="tw-flex tw-gap-1">
            <div>{{ user.email }}</div>
            <div>|</div>
            <button type="button" class="hover:tw-font-bold" @click="logout">Log Out</button>
        </div>
        <div v-else  class="tw-flex tw-gap-1">
            <NuxtLink to="/login" class="tw-text-white tw-no-underline hover:tw-font-bold">Log In</NuxtLink>
            <div>|</div>
            <NuxtLink to="/signup" class="tw-text-white tw-no-underline hover:tw-font-bold">Sign Up</NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
    const supabase = useSupabaseClient()
    const user = useSupabaseUser()
    const router = useRouter()

    const logout = async() => {
        const { error } = await supabase.auth.signOut()

        if (error) {
            console.log(error)
        } else {
            await router.push('/')
        }
    }
</script>
