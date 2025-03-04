<script setup>
import bgImage from '@/assets/images/hero-bg.jpg' // Import the image
import MainBtn from '../components/ui/MainBtn.vue'
import Reservation from '../components/ReservationDate.vue'
</script>

<template>
  <section id="home">
    <div class="container !px-0">
      <div
        class="hero min-h-screen lg:rounded-[46px] md:rounded-[0px]"
        :style="{ backgroundImage: `url(${bgImage})` }"
      >
        <!-- start overlay -->
        <div class="hero-overlay lg:rounded-[46px] md:rounded-[0px]"></div>
        <!-- end overlay -->
        <div class="hero-content w-full text-neutral-content text-center py-10 md:py-0">
          <div class="w-full text-center">
            <h1
              class="mb-5 text-4xl md:text-5xl lg:text-7xl font-bold lg:leading-22 max-w-4xl mx-auto  wow animate__animated animate__fadeIn   "
            >
              Looking to save more on your rental car?
            </h1>
            <p class="mt-9 max-w-3xl mx-auto text-[18px] font-medium leading-relaxed   wow animate__animated animate__fadeInUp">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
              exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <div class="mt-7 flex items-center justify-center   wow animate__animated animate__fadeInUp">
              <MainBtn text="book a rental" class="me-4" />
              <MainBtn
                text="Lear More"
                class="!bg-white hover:!bg-black hover:!text-white !text-black"
                to="#about"
              />
            </div>
            <Reservation class="mt-[80px]" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang=""></style>
