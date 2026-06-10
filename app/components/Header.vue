<script setup lang="ts">
import Brends from './Brends.vue';

</script>

<template>
    <Navbar />
    <header>
    
        <div class="flex-container d-flex flex-column align-items-center justify-content-center">
            <div class="container">
                <h1 class="text-center col-9 mx-auto fs-1">Работа <span class="green">в Санкт-Петербурге</span> - свежие вакансии от работадателей каждый день</h1>
                <p class="text-center col-8 mx-auto fs-6">JobSter.net - это свежие вакансии от прямых работадаталей в Санкт-Петербурге и Ленинградской области. Найти работу в своём городе проще чем кажется!</p>
            </div>

            <HeaderListVacancy />
            <Brends />
            <Search />
        </div>

        <div class="arrow-bottom">
            <i class="bi bi-caret-down-fill"></i>
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
    }

    .arrow-bottom {
        position: absolute;
        width: 32px;
        height: 32px;
        bottom: -10px;
        left: calc(50% - 16px);
        text-align: center;
    }

    .arrow-bottom .bi {
        font-size: 30px;
        background: -webkit-linear-gradient(90deg, #12bd68, transparent);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
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