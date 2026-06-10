<template>
    
    <nav class="navbar navbar-expand-lg navbar-light" aria-label="Eighth navbar example"> 
        <div class="container">
            <a class="navbar-brand" href="#"><span class="green">Job</span>Ster</a> 
            <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation"> 
                <span class="navbar-toggler-icon"></span> 
            </button> 
            
            <div class="navbar-collapse collapse" id="navbarsExample07" style=""> 
                <ul class="navbar-nav me-auto mb-2 mb-lg-0"> 
                    
                    
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
        position: relative;
        z-index: 1;
        background-image: linear-gradient(90deg, rgb(255, 255, 255), rgb(239, 237, 253));
        padding: 7px 0;
        box-shadow: 0 2px 15px -16px #655671;
    }

    .nav-link {
        font-size: 14px;
    }

    .btn-navbar {
        padding: 8px 20px;
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