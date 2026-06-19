<script setup>

defineProps(
    ['vacancy']
)



</script>

<template>
    <div class="col-12 vacancy-block p-4 mt-3 mb-3">
        <h2 class="fs-4">{{ vacancy.title }}</h2>
        <p class="fs-5">{{ vacancy.min_salary }} - {{ vacancy.max_salary }} руб.</p>
        {{ vacancy["Employer.legal_form"] }} {{ vacancy["Employer.company"] }}
        <hr>
        {{ vacancy.description }}
        
        <hr>
        
    </div>
</template>

<style>
.vacancy-block {
    border: 1px solid rgb(227, 235, 246);
    border-radius: 20px;
}
</style>