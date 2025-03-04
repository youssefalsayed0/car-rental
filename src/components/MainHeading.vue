<template>
    <div class="max-w-2xl text-center mx-auto mb-[80px]">
      <p class="font-semibold main-color mb-2 wow animate__animated animate__zoomIn ">
        <i class="fa-solid fa-star-of-life me-1 fa-sm"></i>{{ subheader }}
      </p>
      <p class="text-[44px] leading-tight font-bold text-black  wow animate__animated animate__zoomIn">
        {{ header }}
      </p>
    </div>
  </template>
  
  <script setup>
  defineProps({
    subheader: String,
    header: String,
  })
  </script>
  
  <style lang=""></style>
  