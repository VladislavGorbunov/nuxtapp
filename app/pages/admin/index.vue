<script setup>
    definePageMeta({
        layout: 'admin',
        middleware: ['auth-admin'],
    })  

    async function logout() {
        try {
            await $fetch('/api/admin/logout', {
                method: 'POST',
            })

            await navigateTo('/admin/auth')
        } catch {
            alert('Error logout')
        }
    }
</script>

<template>
    <button @click="logout">Выйти</button>
</template>

<style>
</style>