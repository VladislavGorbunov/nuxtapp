<script setup>
definePageMeta({
    layout: 'admin',
})

const errorMessage = ref('')

const { loggedIn, user, fetch: refreshSession } = useUserSession()

const credentials = reactive({
    email: '',
    password: '',
})

async function login() {

    try {
        await $fetch('/api/admin/login', {
            method: 'POST',
            body: credentials,
        })
        
        // Refresh the session on client-side and redirect to the home page
        await refreshSession()

        
        errorMessage.value = 'Входим'
     
        let int = setTimeout(async () => {
            await navigateTo('/admin')
        }, 1000)

        
    } catch (e) {
        errorMessage.value = 'Ошибка авторизации'
    }

    
}
</script>

<template>
    <form @submit.prevent="login">
        
        <input v-model="credentials.email" type="email" placeholder="Email">
        <input v-model="credentials.password" type="password" placeholder="Password">
        <button type="submit">
            Login go!
        </button>
        <hr>
        {{ errorMessage }}
    </form>
</template>
