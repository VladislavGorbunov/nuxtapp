<script setup>

</script>

<template>
  <div class="body">
      <slot />
  </div>
</template>

<style scoped>
  .body {
    width: 100%;
    height: 100vh;
    margin: 0;
    top: 0;
    overflow: hidden;
    background-image: linear-gradient(90deg, rgb(245, 250, 255), rgb(242, 233, 255));
  }
</style>