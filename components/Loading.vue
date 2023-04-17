<template>
  <div style="z-index: 1000" v-if="loading" class="loading-logo fixed w-full h-full inset-0 grid place-items-center bg-white">
    <img src="~/assets/images/global/bg-logo.png" alt="" class="rounded-xl w-52" />
  </div>
</template>

<script setup>
let loading = ref(true);
setTimeout(() => {
  loading.value = false;
}, 1000);
</script>
<style>
.loading-logo img {
  animation: scale-logo 1.5s alternate infinite;
}
@keyframes scale-logo {
  from {
    transform: scale(1);
    opacity: 0.5;
  }
  to {
    transform: scale(2);
    opacity: 1;
  }
}
</style>
