export default defineNuxtRouteMiddleware((to, _from) => {
    const user = useSupabaseUser()
    const router = useRouter()

    if (!user.value) {
        router.push('/login')
    }
})
