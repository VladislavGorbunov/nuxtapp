<script setup lang="ts">
import Brends from './Brends.vue';

</script>

<template>
    
    <header>
        <Navbar />
        
        <div class="flex-container d-flex flex-column align-items-center justify-content-center">
            <div class="container">
                <h1 class="text-center col-9 mx-auto fs-1"><span class="green">Работа в Санкт-Петербурге</span> - свежие вакансии от работадателей каждый день</h1>
                <p class="text-center col-8 mx-auto">Свежие вакансии от прямых работадаталей в Санкт-Петербурге и Ленинградской области. Найти работу в своём городе проще чем кажется!</p>
            </div>

            <div class="d-flex flex-column flex-md-row justify-content-center align-items-center mt-2">
                <a href="" class="btn btn-primary btn-header me-0 me-md-4">Смотреть вакансии</a>
                <NuxtLink to="/employer/auth" class="btn btn-primary-outline btn-header mt-2 mt-md-0">Найти сотрудника</NuxtLink>
            </div>
            <!-- <div class="container mt-5">
                <div class="d-flex align-items-center justify-content-between flex-wrap gap-3">
                    <div class="category-col">Продавец-консультант</div>
                    <div class="category-col">Водитель</div>
                    <div class="category-col">Велокурьер</div>
                    <div class="category-col">Автокурьер</div>
                    <div class="category-col">Слесарь ремонтник</div>
                    <div class="category-col">Электромонтёр</div>
                    <div class="category-col">Разнорабочий</div>

                    <div class="category-col">Охранник</div>
                    <div class="category-col">Производитель работ</div>
                    <div class="category-col">Менеджер по продажам</div>
                    <div class="category-col">Оператор станка с ЧПУ</div>
                    <div class="category-col">Слесарь ремонтник</div>
                    <div class="category-col">Электромонтёр</div>
                    <div class="category-col">Разнорабочий</div>
                </div>
            </div> -->
            <Brends />
        </div>
        
        
    </header>
</template>

<style>
    header {
        position: relative;
        height: 600px;
        background-image: linear-gradient(90deg, rgb(245, 250, 255), rgb(235, 224, 252));
        background-size: cover;
    }

    .flex-container {
        height: 480px;
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
        font-size: 44px;
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
        width: 200px;
    }

    .category-col {
        font-size: 14px;
        color: #6b618a;
        border: 1px dashed #d6cfeb;
        border-radius: 20px;
        text-align: center;
        padding: 5px 25px;
    }
</style>