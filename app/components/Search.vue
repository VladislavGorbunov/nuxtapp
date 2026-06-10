<script setup>

    const posts = [
        {
            name: 'Мойщик окон',
            slug: 'moyshik-okon',
        },
        {
            name: 'Мойщик автомобилей',
            slug: 'moyshik-avtomobiley',
        },
        {
            name: 'Курьер пеший',
            slug: 'curier-peshiy',
        }, 
        {
            name: 'Курьер на автомобиле',
            slug: 'curier-na-avto',
        }
    ]

    const searchPost = ref()
    const searchPostArray = ref([])
    const selectPostSlug = ref()

    function postInputEvent() {

        searchPostArray.value = []

        if (searchPost.value != '') {
            posts.forEach((post) => {

                const searchPostLowerCase = searchPost.value.toLowerCase()
                const postNameLowerCase = post.name.toLowerCase()
                
                if (postNameLowerCase.startsWith(searchPostLowerCase)) {
                    searchPostArray.value.push(post)
                } else {
                    
                }
            })
        } else {
            searchPostArray.value = []
        }
    }

    function selectPost(post) {
        searchPost.value = post.name
        selectPostSlug.value = post.slug
        searchPostArray.value = []
    }
</script>

<template>
    <div class="container position-relative">
<form action="search" method="GET">
<div class="search-block d-flex flex-column flex-md-row gap-3 justify-content-center align-items-center">
        
        <div class="w-100 position-relative">
            <input v-model="searchPost" @input="postInputEvent" type="text" class="form-control" placeholder="Должность">
            <div class="post-search-block" v-if="searchPostArray.length > 0">
                <p v-for="(post, index) in searchPostArray" @click="selectPost(post)">
                    {{ post.name }}
                </p>
            </div>

            <select class="form-select" name="doljnost" hidden>
                <option selected :value="selectPostSlug"></option>
            </select>
        </div>

        
        <select class="form-select" name="opit">
            <option disabled selected>Опыт работы</option>
            <option value="1">от 1 до 3 лет</option>
            <option value="2">от 3 до 6 лет</option>
            <option value="3">Более 6 лет</option>
        </select>
       
        <input type="text" class="form-control" placeholder="Зарплата от, руб.">
        
        <select class="form-select" name="opit">
            <option disabled selected>График работы</option>
            <option value="1">Полный день</option>
            <option value="2">Сменный график</option>
            <option value="3">Свободный график</option>
        </select>
        
        <div class="w-100">
            <button type="submit" class="w-100 btn btn-bold btn-primary"><i class="bi bi-search d-inline-block d-md-none d-xl-inline-block"></i> Найти</button>
        </div>
</div>
</form>


</div>

</template> 


<style>
.search-block {
    position: relative;
    background: rgba(255,255,255, 1);
    min-height: 100px;
    border-radius: 20px;
    position: relative;
    padding: 20px;
    box-shadow: 0 2px 15px -12px #111;
    margin-top: 30px;
    z-index: 1;
}

.search-block .form-control, .form-select {
    padding: 13px;
    border-radius: 12px;
    background: none;
    font-size: 15px;
}

.post-search-block {
    position: absolute;
    top: 60px;
    left: 0px;
    width: 100%;
    background: #fff;
    border: 1px solid #eaedee;
    z-index: 99;
    border-radius: 20px;
    padding: 10px 15px;
}

.post-search-block p {
    border-bottom: 1px solid #eaedee;  
    padding: 5px 0px;
    margin: 0px;
    font-size: 15px;
    cursor: pointer;
}

.post-search-block p:last-child {
    border-bottom: 0px solid #eaedee;  
    padding: 10px 0px;
    margin: 0px;
    font-size: 15px;
    cursor: pointer;
}

.search-block .btn-primary {
    font-size: 15px;
    padding: inherit 5px;
}
</style>