<script setup>
    defineProps(['regionName'])
</script>

<template>

    <nav class="navbar navbar-expand-lg navbar-light" aria-label="Eighth navbar example"> 
        <div class="container">
            <a class="navbar-brand" href="#"><span class="green">Like</span><i class="bi bi-hand-thumbs-up-fill"></i>Work</a> 
            <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation"> 
                <span class="navbar-toggler-icon"></span> 
            </button> 
            
            <div class="navbar-collapse collapse" id="navbarsExample07" style=""> 
                <ul class="navbar-nav me-auto mb-2 mb-lg-0"> 
                    <li class="nav-item"> 
                        <NuxtLink to="/" class="nav-link me-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i class="bi bi-compass"></i> {{ regionName }}</NuxtLink>
                    </li> 
                    
                    <li class="nav-item"> 
                        <NuxtLink to="/" class="nav-link">Вакансии</NuxtLink>
                    </li> 

                    <li class="nav-item"> 
                        <NuxtLink to="/" class="nav-link">База резюме</NuxtLink>
                    </li> 

                    <li class="nav-item"> 
                        <NuxtLink to="/" class="nav-link">Наши контакты</NuxtLink>
                    </li> 

                    <li class="nav-item"> 
                        <NuxtLink to="/" class="nav-link">Реклама</NuxtLink>
                    </li>
                </ul> 
                <a href="" class="btn btn-navbar-resume btn-bold me-2"><i class="bi bi-person-plus-fill me-1"></i> Создать резюме</a> 
                <a href="" class="btn btn-primary btn-bold btn-navbar">Добавить вакансию</a> 
            </div> 
        </div>
    </nav>
    
</template>

<style>
    .blue {
        color: rgb(51, 113, 228);
    }

    .navbar {
        width: 100%;
        z-index: 10;
        background-image: linear-gradient(90deg, rgba(255, 255, 255, 0.8), rgba(239, 237, 253, 0.8));
        padding: 15px 0;
        box-shadow: 0 2px 15px -16px #655671;
        backdrop-filter: blur(15px);
    }

    .navbar-brand {
        font-family: "Geologica", sans-serif;
        font-optical-sizing: auto;
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        color: #223;
    }

    .navbar-brand .bi {
        position: relative;
        top: -2px;
        margin: 0 2px;
        background: -webkit-linear-gradient(25deg, #12bd68, transparent);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .nav-link {
        font-size: 14px;
        color: rgb(78, 78, 102);
        font-weight: 500;
    }

    .city {
        border: 1px solid rgb(211, 221, 226);
        border-radius: 10px;
        padding: inherit 25px;
    }

    .btn-navbar {
        padding: 10px 20px;
        /* background: #fff; */
        border: 0px solid rgba(51, 113, 228, 0.3);
        color: rgb(255, 255, 255);
        font-size: 14px;
        
    }

    .btn-navbar-resume, .btn-navbar-resume:hover {
        background: #fff;
        color: rgb(53, 55, 58);
        padding: 8px 20px;
        font-size: 14px;
        border-radius: none !important;
    }
</style>