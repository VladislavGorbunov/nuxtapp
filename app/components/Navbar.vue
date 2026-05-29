<template>
    
    <nav class="navbar navbar-expand-lg navbar-light" aria-label="Eighth navbar example"> 
        <div class="container">
            <a class="navbar-brand" href="#"><span class="green">Job</span>Spb.pro</a> 
            <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation"> 
                <span class="navbar-toggler-icon"></span> 
            </button> 
            
            <div class="navbar-collapse collapse" id="navbarsExample07" style=""> 
                <ul class="navbar-nav me-auto mb-2 mb-lg-0"> 
                    <li class="nav-item"> 
                        <NuxtLink to="/" class="nav-link">Главная</NuxtLink> 
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

                    <li class="nav-item"> 
                        <NuxtLink to="/" class="nav-link">Блог</NuxtLink>
                    </li>
                    
                </ul> 
                <a href="" class="btn btn-navbar-resume me-2">Добавить резюме</a> 
                <a href="" class="btn btn-primary btn-navbar">Личный кабинет</a> 
            </div> 
        </div>
    </nav>
    
</template>

<style>
    .blue {
        color: rgb(76, 51, 228);
    }

    .navbar {
        position: relative;
        z-index: 1;
        background: rgba(255,255,255,0.3);
        padding: 15px 0;
        box-shadow: 0 2px 15px -15px #655671;
    }

    .nav-link {
        font-size: 14px;
    }

    .btn-navbar {
        padding: 8px 24px;
        background: none;
        border: 1px solid rgba(76, 51, 228, 0.3);
        color: rgb(76, 51, 228);
        font-size: 14px;
    }

    .btn-navbar-resume {
        
        background: none;
        color: rgb(76, 51, 228);
        font-size: 14px;
        border-radius: none !important;
    }
</style>