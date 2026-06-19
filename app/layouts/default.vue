<script setup>
    provide(/* key */ 'city', /* value */ 'msk')
</script>

<template>
  <div>
      <Topmenu />
      <slot />
      <CityModal />
  </div>
</template>