<template>
    
    <header>
        <Navbar />
        
        <div class="flex-container d-flex flex-column align-items-center justify-content-center">
            <div class="container">
                <h1 class="text-center col-9 mx-auto fs-1"><span class="green">Работа в Санкт-Петербурге</span> - свежие вакансии от работадателей каждый день</h1>
                <p class="text-center col-8 mx-auto">Свежие вакансии от прямых работадаталей в Колпино. Найти работу в своём городе проще чем кажется!</p>
            </div>

            <div class="d-flex flex-column flex-md-row justify-content-center align-items-center mt-2">
                <a href="" class="btn btn-primary btn-header me-0 me-md-2"><i class="bi bi-briefcase me-1"></i> Смотреть вакансии</a>
                <NuxtLink to="/employer/auth" class="btn btn-primary-outline btn-header mt-2 mt-md-0">Найти сотрудника</NuxtLink>
            </div>

            <div class="container brend-block d-none d-lg-flex justify-content-evenly align-items-center position-absolute gap-5">
            
                <div class="brend-col d-flex align-items-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/%D0%90%D0%9E_%D0%90%D0%AD%D0%9C-%D0%A2%D0%95%D0%A5%D0%9D%D0%9E%D0%9B%D0%9E%D0%93%D0%98%D0%98_%D0%BB%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_%D0%B3%D0%BE%D1%80%D0%B8%D0%B7%D0%BE%D0%BD%D1%82%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_%D1%80%D1%83%D1%81.png/1280px-%D0%90%D0%9E_%D0%90%D0%AD%D0%9C-%D0%A2%D0%95%D0%A5%D0%9D%D0%9E%D0%9B%D0%9E%D0%93%D0%98%D0%98_%D0%BB%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_%D0%B3%D0%BE%D1%80%D0%B8%D0%B7%D0%BE%D0%BD%D1%82%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_%D1%80%D1%83%D1%81.png" class="img-fluid">
                </div>

                <div class="brend-col d-flex align-items-center">
                    <img src="https://upload.wikimedia.org/wikipedia/ru/thumb/4/4a/Pyaterochka_2020.svg/1280px-Pyaterochka_2020.svg.png" class="img-fluid">
                </div>

                <div class="brend-col d-flex align-items-center">
                    <img src="https://hvac-expert.ru/upload/iblock/7b6/yrbfrti4hyfbbg3xlzsoa1z452jl4poh.png" class="img-fluid">
                </div>

                <div class="brend-col d-flex align-items-center">
                    <img src="https://regentrus.ru/upload/iblock/f81/vy6f7x6ar1a047wx1mxf0jj4rpihmevs.jpg" class="img-fluid">
                </div>

                <div class="brend-col d-flex align-items-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Magnit_logo.svg/1280px-Magnit_logo.svg.png" class="img-fluid">
                </div>

                <div class="brend-col d-flex align-items-center">
                    <img src="https://regentrus.ru/upload/iblock/ca7/ivb4rn461a6zw498rs5rlv3jr635vpa6.jpg" class="img-fluid">
                </div>

                <div class="brend-col d-flex align-items-center">
                    <img src="https://tbolimpiada.ru/vardata/modules/dynalenta/files/1/2022/12/51/4e13305ddba3293fb0208bc65f3b0be3.jpg" class="img-fluid">
                </div>
            
            </div>
        </div>
        
        
    </header>
</template>

<style>
    header {
        position: relative;
        height: 600px;
        background-image: linear-gradient(90deg, rgb(245, 250, 255), rgb(242, 233, 255));
        background-size: cover;
    }

    .flex-container {
        height: 440px;
    }

    .header-layer {
        position: absolute;
        width: 100%;
        height: 150px;
        bottom: 0;
        background: rgba(231, 237, 245, 1);
        backdrop-filter: blur(2px);
    }

    .brend-block {
        bottom: 60px;
    }

    .brend-col {
        background: #fff;
        width: 15%;
        border-radius: 10px;
        height: 60px;
        padding: 0 30px;
        opacity: 0.4;
        transform: rotate(0deg);
        border: 1px solid rgba(76, 51, 228, 0.2);
        transition: 1s;
        box-shadow: 0 0px 15px -12px #111;
    }

    .brend-col:hover {
        opacity: 1;
        transform: rotate(0deg);
        border: 1px solid rgba(76, 51, 228, 0.1);
        transition: 1s;
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
        width: 225px;
    }


</style>