<template>
    <div>
        <div v-if="user" class="tw-flex tw-gap-1">
            <div>{{ user.email }}</div>
            <div>|</div>
            <button type="button" @click="logout">Log Out</button>
        </div>
        <div v-else  class="tw-flex tw-gap-1">
            <NuxtLink to="/login" class="tw-text-white">Log In</NuxtLink>
            <div>|</div>
            <NuxtLink to="/signup" class="tw-text-white">Sign Up</NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
    const supabase = useSupabaseAuthClient()
    const user = useSupabaseUser()

    const logout = async() => {
        console.log('click')
        const { error } = await supabase.auth.signOut()

        if (error) console.log(error)
    }
</script>
