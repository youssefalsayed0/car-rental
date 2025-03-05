<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination, Autoplay } from 'swiper/modules'
import MainHeading from './MainHeading.vue'
</script>

<template>
  <section class="main-p" id="testimonials">
    <div class="container text-center">
      <!-- render heading component -->
      <MainHeading header="What Our Clients Say" subheader="Our Testimonials" />

      <!-- swiper settings -->
      <Swiper
        :modules="[Pagination, Autoplay]"
        :pagination="{ clickable: true }"
        :autoplay="{ delay: 3000, disableOnInteraction: false }"
        :loop="true"
        :slides-per-view="1"
        :breakpoints="{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 1 },
        }"
        class="!pb-14"
      >
        <SwiperSlide>
          <div class="w-full flex flex-col items-center justify-center gap-8">
            <h1 class="text-2xl md:text-3xl text-gray-600 leading-relaxed text-center w-4/5">
              "Very easy rental experience...so important when driving in another country. Car was
              great and no hidden fees."
            </h1>
            <div class="flex items-center gap-4">
              <div class="avatar">
                <div class="w-24 rounded-full">
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    alt="avatar"
                  />
                </div>
              </div>
              <div class="flex flex-col tracking-wider">
                <label class="text-gray-600 font-bold text-base">Lisa R., Rome</label>
                <label class="text-gray-400 font-normal text-sm">Developer</label>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="w-full flex flex-col items-center justify-center gap-8">
            <h1 class="text-2xl md:text-3xl text-gray-600 leading-relaxed text-center w-4/5">
              "Very easy rental experience...so important when driving in another country. Car was
              great and no hidden fees."
            </h1>
            <div class="flex items-center gap-4">
              <div class="avatar">
                <div class="w-24 rounded-full">
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    alt="avatar"
                  />
                </div>
              </div>
              <div class="flex flex-col tracking-wider">
                <label class="text-gray-600 font-bold text-base">Lisa R., Rome</label>
                <label class="text-gray-400 font-normal text-sm">Developer</label>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="w-full flex flex-col items-center justify-center gap-8">
            <h1 class="text-2xl md:text-3xl text-gray-600 leading-relaxed text-center w-4/5">
              "Very easy rental experience...so important when driving in another country. Car was
              great and no hidden fees."
            </h1>
            <div class="flex items-center gap-4">
              <div class="avatar">
                <div class="w-24 rounded-full">
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    alt="avatar"
                  />
                </div>
              </div>
              <div class="flex flex-col tracking-wider">
                <label class="text-gray-600 font-bold text-base">Lisa R., Rome</label>
                <label class="text-gray-400 font-normal text-sm">Developer</label>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<style>
/* Swiper Pagination Styling */
.swiper-pagination-bullet {
  background-color: #db2100 !important; 
}
</style>
