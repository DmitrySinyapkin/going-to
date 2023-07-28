<template>
    <div class="tw-pt-20 tw-mx-auto">
        <v-sheet width="300" class="mx-auto">
            <h2 class="tw-mb-2">SignUp</h2>
            <v-form ref="form" fast-fail @submit.prevent="onSubmit">
                <v-text-field
                    v-model="email"
                    label="E-mail"
                    :rules="[required, isEmail]"
                ></v-text-field>

                <v-text-field
                    v-model="password"
                    label="Password"
                    :rules="[required]"
                ></v-text-field>

                <v-btn type="submit" block class="mt-2">Sign up</v-btn>
            </v-form>
        </v-sheet>
    </div>
</template>

<script setup lang="ts">
    import { VNodeRef } from 'nuxt/dist/app/compat/capi';
    import { required, isEmail } from '@/utils/validationRules'

    definePageMeta({
        layout: 'main',
    })

    const form = ref<VNodeRef | null>(null)
    const email = ref<string>('')
    const password = ref<string>('')
    const supabase = useSupabaseAuthClient()
    const user = useSupabaseUser()
    const router = useRouter()

    const onSubmit = async() => {
        const { valid } = await form.value.validate()

        if (valid) {
            const { data, error } = await supabase.auth.signUp({
                email: email.value,
                password: password.value,
                options: {
                    emailRedirectTo: 'http://localhost:3000/login'
                }
            })

            if (error) return alert(`Sign up failed! ${error}`)

            alert('Please, confirm your email!')
        }
    }

    watchEffect(async() => {
        if (user.value) {
            await router.push('/')
        }
    })

</script>
