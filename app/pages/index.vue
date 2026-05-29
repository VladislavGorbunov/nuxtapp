<script setup>

    useHead({
        title: 'Работа в Колпино, свежие вакансии от прямых работадателей',
        meta: [
            { name: 'description', content: 'My amazing site.' },
        ],
    })

    const { data: offers } = await useFetch("/api/offers")
    const { data: users } = await useFetch("/api/users")

</script>

<template>
    <Header />

    <div class="container">
        <h2 class="text-center mt-4 mb-0">Актуальные вакансии на сегодня</h2>
        <p class="text-center mt-0">ТОП-6 выгодных вакансий курьером</p>
    <div class="row">
    <div class="col-4 mb-4" v-for="offer of offers">
        <div class="col-12 p-3">
            <img src="https://sun9-29.userapi.com/impf/OouxBR6IgMCiNEN1BiEGE-luU_bZtyotPt-N8A/L4BSDhVYSlw.jpg?size=1920x768&quality=95&crop=0,0,1920,767&sign=e1f4c3ab9a3b86f1f991949bd9157a7b&type=cover_group" class="img-fluid">
            <h3 class="text-center fs-5 mt-3 mb-4">{{ offer.name }}</h3>
            <p>Доход до 8 500 руб/день</p>
            <p>Средний доход велокурьера: 103 110 руб/мес.</p>
            <p>Средний доход автокурьера: 211 320 руб/мес.</p>
        </div>
    </div>

    <div v-for="user of users">
        {{ user.name }}
    </div>

       
    </div>
    </div>
</template>