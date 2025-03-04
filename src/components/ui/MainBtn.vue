<script setup>
defineProps({
  text: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <router-link
    to=""
    class="bg-main rounded-[100px] border-0 text-white  capitalize py-[12px] px-[22px] text-[16px] duration-400 hover:!bg-black inline-block"
  > 
    {{ text }}
  </router-link>
</template>
