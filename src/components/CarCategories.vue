<script setup>
import MainHeading from '@/components/MainHeading.vue'
import Arrow from '@/components/ui/ArrowCircule.vue'
import car1 from '@/assets/images/luxury-collection-img-1.jpg'
import car2 from '@/assets/images/luxury-collection-img-2.jpg'
import car3 from '@/assets/images/luxury-collection-img-3.jpg'
import car4 from '@/assets/images/luxury-collection-img-4.jpg'
</script>

<template>
  <section class="main-p" id="categories">
    <div class="container">
      <MainHeading header="Explore our perfect and extensive fleet" subheader="Our Services" />

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

        <!-- card -->
        <div class="relative group overflow-hidden rounded-[30px] wow animate__animated animate__fadeInUp" data-wow-delay="0.4s" >
          <!-- start overlay -->
          <div
            class="top-0 bottom-0 start-0 end-0 bg-black opacity-20 absolute rounded-[30px] z-10"
          ></div>
          <!-- end overlay -->
          <p class="absolute top-8 start-8 text-white text-[28px] font-semibold z-10">Sport Car</p>
          <img
            :src="car1"
            alt="car"
            class="w-full rounded-[30px] group-hover:scale-110 duration-700 transform"
          />
          <Arrow class="group-hover:!bg-black !absolute bottom-8 end-8" />
        </div>

        <!-- card -->
        <div class="relative group overflow-hidden rounded-[30px]  wow animate__animated animate__fadeInUp" data-wow-delay="0.5s">
          <!-- start overlay -->
          <div
            class="top-0 bottom-0 start-0 end-0 bg-black opacity-20 absolute rounded-[30px] z-10"
          ></div>
          <!-- end overlay -->
          <p class="absolute top-8 start-8 text-white text-[28px] font-semibold z-10">
            Convertible Car
          </p>
          <img
            :src="car2"
            alt="car"
            class="w-full rounded-[30px] group-hover:scale-110 duration-700 transform"
          />
          <Arrow class="group-hover:!bg-black !absolute bottom-8 end-8" />
        </div>

        <!-- card -->
        <div class="relative group overflow-hidden rounded-[30px] wow animate__animated animate__fadeInUp" data-wow-delay="0.6s">
          <!-- start overlay -->
          <div
            class="top-0 bottom-0 start-0 end-0 bg-black opacity-20 absolute rounded-[30px] z-10"
          ></div>
          <!-- end overlay -->
          <p class="absolute top-8 start-8 text-white text-[28px] font-semibold z-10">Sedan Car</p>
          <img
            :src="car3"
            alt="car"
            class="w-full rounded-[30px] group-hover:scale-110 duration-700 transform"
          />
          <Arrow class="group-hover:!bg-black !absolute bottom-8 end-8" />
        </div>

        <!-- card -->
        <div class="relative group overflow-hidden rounded-[30px] wow animate__animated animate__fadeInUp "  data-wow-delay="0.7s">
          <!-- start overlay -->
          <div
            class="top-0 bottom-0 start-0 end-0 bg-black opacity-20 absolute rounded-[30px] z-10"
          ></div>
          <!-- end overlay -->
          <p class="absolute top-8 start-8 text-white text-[28px] font-semibold z-10">Luxury car</p>
          <img
            :src="car4"
            alt="car"
            class="w-full rounded-[30px] group-hover:scale-110 duration-700 z-0 transform"
          />
          <Arrow class="group-hover:!bg-black !absolute bottom-8 end-8" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang=""></style>
