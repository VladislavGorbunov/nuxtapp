<script setup>
import VacancyBlock from '~/components/VacancyBlock.vue';
const { params } = useRoute()
const { data: region } = await useFetch(`/api/getRegion/${params.region}`);

if (!region.value) {
    throw createError({
        status: 404,
        statusText: 'Page Not Found',
    })
}

const { data: vacancies } = await useFetch('/api/getVacanciesIndex');

useHead({
    title: `Работа ${region.value.name_in}, свежие вакансии от прямых работадателей`,
    meta: [
        { name: 'description', content: 'My amazing site.' },
    ],
})

</script>

<template>
    <Header :regionName="region.name" :regionNameIn="region.name_in" />

    <div class="container">
        <h2 class="text-center mt-4 mb-0">Свежие вакансии {{ region.name_in }}</h2>
        <p class="text-center mt-0">ТОП-6 выгодных вакансий курьером</p>
        <div class="row">
            <VacancyBlock v-for="vacancyData of vacancies" :vacancy="vacancyData" />
        </div>
    </div>
</template>