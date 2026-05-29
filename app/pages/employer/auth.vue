<script setup>
    definePageMeta({
        layout: 'auth-layout',
    })

    const checkbox = ref(false)
    const email = ref('')
    const companyType = ref('')
    const companyName = ref('')
    const phone = ref('')

    function submitForm() {
        console.log(email.value)
        console.log(companyType.value)
        console.log(companyName.value)
        console.log(phone.value)
    }

</script>
<template>
    <div class="container mt-4">
      <div class="col-md-5 auth-form-bg col-12 mx-auto">
        <h1 class="text-center fs-4 mb-3">Регистрация работадателя</h1>

        <div class="mt-3">
            <label for="exampleFormControlInput1" class="form-label">Email:</label>
            <input v-model="email" type="email" class="form-control" placeholder="maria-hr@yandex.ru">
        </div>

        <div class="mt-3">
        <label for="exampleFormControlInput1" class="form-label">Тип компании:</label>
        <select v-model="companyType" class="form-select" aria-label="Default select example">
            <option value="ООО" selected>ООО</option>
            <option value="ОАО">ОАО</option>
            <option value="АО">АО</option>
            <option value="ПАО">ПАО</option>
        </select>
        </div>

        <div class="mt-3">
            <label for="exampleFormControlInput1" class="form-label">Название компании:</label>
            <input v-model="companyName" type="text" class="form-control" placeholder="Успешная компания">
        </div>

        <div class="mt-3">
            <label for="exampleFormControlInput1" class="form-label">Телефон:</label>
            <input v-model="phone" type="email" class="form-control" placeholder="+7 (812) 123-45-67">
        </div>

        <div class="form-check mt-3">
            
            <input @click="check" v-model="checkbox" class="form-check-input" type="checkbox" value="" id="check">
                <label class="form-check-label" for="checkDefault">
                    Даю своё согласие на обработку персональных данных, подтверждаю согласие с Пользовательским соглашением и Правилами размещения 
                </label>
        </div>

        <div class="mt-4">
            <button v-bind:disabled="!checkbox" @click="submitForm" type="submit" class="btn btn-primary mb-3 col-12" >Зарегистрироваться</button>
        </div>

        <NuxtLink to="/" class="back-link blue"><i class="bi bi-arrow-left-circle"></i> Вернуться назад</NuxtLink>
      </div>
    </div>
</template>   

<style>
    .auth-form-bg {
        position: relative;
        background: #fff;
        padding: 40px 30px;
        border-radius: 12px;
        box-shadow: 0 2px 15px -13px #111;
    }

    .back-link {
        font-size: 15px;
        color: #4d475f;
        text-decoration: none;
    }

    .form-control, .form-select {
        padding: 10px 10px;
    }
    
    .form-check-label {
        font-size: 13px;
    }
</style>