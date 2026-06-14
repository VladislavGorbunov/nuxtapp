<script setup>

    useHead({
        title: 'Работа в Колпино, свежие вакансии от прямых работадателей',
        meta: [
            { name: 'description', content: 'My amazing site.' },
        ],
    })

    // const { data: offers } = await useFetch("/api/offers")
    // const { data: users } = await useFetch("/api/users")

    const { data } = await useFetch('http://laravel.local');
    console.log('------------------')
    console.log(data)
</script>

<template>
    <Header />
    
    <div class="container">
        <h2 class="text-center mt-4 mb-0">Свежие вакансии в Санкт-Петербурге</h2>
        <p class="text-center mt-0">ТОП-6 выгодных вакансий курьером</p>
    <div class="row">
    

    

       
    </div>
    </div>
</template>