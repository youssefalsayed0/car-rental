<template>
  <section class="py-7">
    <div class="container">
      <div class="bg-black main-p !px-5 rounded-[46px]">
        <div class="flex flex-wrap items-center justify-center">
          <div class="w-full md:w-7/12 lg:w-5/12 px-5   wow animate__animated animate__fadeInLeft">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Ready to hit the road?
                Book your car today !
            </h2>
            <p class=" mb-8 font-light text-gray-500 sm:text-xl dark:text-gray-400">
                Our friendly customer service team is here to help. Contact us anytime for support and inquiries.
            </p>
            <div class="group flex items-center">
                <MainBtn text="Book now" to="#reservation"/><ArrowCircule />
            </div>
          </div>
          <div class=" w-full md:w-5/12  lg:w-7/12 px-5 mt-8 md:mt-0 flex justify-center">
            <img :src="car" alt="car" class=" wow animate__animated animate__fadeInRight"  />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import car from '@/assets/images/cta-car-img.png'
import MainBtn from './ui/MainBtn.vue';
import ArrowCircule from './ui/ArrowCircule.vue';
</script>
<style lang=""></style>
