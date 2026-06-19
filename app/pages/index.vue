<script setup>
import VacancyBlock from '~/components/VacancyBlock.vue';

const city = inject('city')
useHead({
    title: 'Работа в Санкт-Петербурге, свежие вакансии от прямых работадателей',
    meta: [
        { name: 'description', content: 'My amazing site.' },
    ],
})

// const { data: offers } = await useFetch("/api/offers")
// const { data: users } = await useFetch("/api/users")

const { data: vacancies } = await useFetch('/api/getVacanciesIndex');


</script>

<template>
    <Header regionName="Санкт-Петербург" regionNameIn="в Санкт-Петербурге" />

    <div class="container">
        {{ city }}
        <h2 class="text-center mt-4 mb-0">Свежие вакансии в Санкт-Петербурге</h2>
        <p class="text-center mt-0">ТОП-6 выгодных вакансий курьером</p>
        <div class="row">

            <VacancyBlock v-for="vacancyData of vacancies" :vacancy="vacancyData" />

        </div>
    </div>
</template>