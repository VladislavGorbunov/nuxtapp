<script setup lang="ts">
import Brends from './Brends.vue';

</script>

<template>
    <Navbar />
    <header>
    
        <div class="flex-container d-flex flex-column align-items-center justify-content-center">
            <div class="container">
                <h1 class="text-center col-9 mx-auto fs-1">Работа <span class="green">в Санкт-Петербурге</span> - свежие вакансии от работадателей каждый день</h1>
                <p class="text-center col-8 mx-auto fs-6">НаРаботе.топ - это свежие вакансии от прямых работадаталей в Санкт-Петербурге и Ленинградской области. Найти работу в своём городе проще чем кажется!</p>
            </div>

            <HeaderListVacancy />
            <Brends />
            <div class="d-flex flex-column flex-md-row justify-content-center align-items-center mt-5 mb-5">
                <a href="" class="btn btn-primary btn-header me-0 me-md-4">Смотреть все вакансии</a>
                <NuxtLink to="/employer/auth" class="btn btn-primary-outline btn-header mt-2 mt-md-0">Найти сотрудника</NuxtLink>
            </div>
            
        </div>
        
        
    </header>
</template>

<style>
    header {
        position: relative;
        min-height: 470px;
        background-image: linear-gradient(90deg, rgb(245, 250, 255), rgb(239, 236, 255));
        background-size: cover;
        padding: 30px 0px;
        overflow: hidden;
    }

    .flex-container {
        min-height: 470px;
    }

    .header-layer {
        position: absolute;
        width: 100%;
        height: 150px;
        bottom: 0;
        background: rgba(231, 237, 245, 1);
        backdrop-filter: blur(2px);
    }

    h1 {
        position: relative;
        font-family: "Rubik", sans-serif !important;
        font-optical-sizing: auto;
        font-style: normal;
        font-weight: 600;
        font-size: 40px;
        color: #223;
        z-index: 1;
    }

    .green {
        color: rgb(18, 189, 104);
    }

    p {
        position: relative;
        z-index: 1;
        color: #223;
    }

    .filter-block {
        position: relative;
        z-index: 1;
    }

    .btn-header {
        width: 240px;
    }

    


</style>