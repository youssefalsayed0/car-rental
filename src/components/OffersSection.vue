<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination, Autoplay } from 'swiper/modules'
import MainBtn from './ui/MainBtn.vue'
import ArrowCircule from './ui/ArrowCircule.vue'
import offer1 from '@/assets/images/067e1605-e03f-4b7e-8b0d-1bca166bf4f7.webp'
import offer2 from '@/assets/images/72c09d5f-a5f4-400a-b217-350309e15c23.webp'
import offer3 from '@/assets/images/12315f78-1484-4294-a049-d0803a60c12f.webp'
import offer4 from '@/assets/images/f77b34fe-b837-4a74-81a0-ace8fde63bad.webp'
import MainHeading from './MainHeading.vue'
</script>

<template>
  <section class="main-p offers" id="offers">
    <div class="container mx-auto">
      <MainHeading header="Unlock exclusive offers today" subheader="Our Offers" />

      <!-- swiper settings -->
      <Swiper
        :modules="[Pagination, Autoplay]"
        :pagination="{ clickable: true }"
        :autoplay="{ delay: 2500, disableOnInteraction: false }"
        :loop="true"
        :slides-per-view="1"
        :spaceBetween="20"
        :breakpoints="{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }"
        class="!justify-center !flex !items-center flex-row"
      >
        <SwiperSlide class="py-12">
          <div class="card bg-base-100 w-96 shadow-sm min-h-[400px] flex flex-col wow animate__animated animate__zoomIn">
            <figure>
              <img :src="offer1" alt="Shoes" class="w-full object-cover" />
            </figure>
            <div class="card-body flex flex-col flex-grow">
              <h2 class="card-title">Save up to 25%</h2>
              <p class="flex-grow">Save up to 25% on Rentals of 5 Days or More</p>
              <div class="card-actions justify-start items-center group mt-4">
                <MainBtn text="Book now" /> <ArrowCircule class="group-hover:!bg-black" />
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide class="py-12">
          <div class="card bg-base-100 w-96 shadow-sm min-h-[400px] flex flex-col wow animate__animated animate__zoomIn">
            <figure>
              <img :src="offer2" alt="Shoes" class="w-full object-cover" />
            </figure>
            <div class="card-body flex flex-col flex-grow">
              <h2 class="card-title">FLASH SALE!</h2>
              <p class="flex-grow">Save up to 30% on top of already discounted rates</p>
              <div class="card-actions justify-start items-center mt-4 group">
                <MainBtn text="Book now" /> <ArrowCircule class="group-hover:!bg-black" />
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide class="py-12">
          <div class="card bg-base-100 w-96 shadow-sm min-h-[400px] flex flex-col wow animate__animated animate__zoomIn">
            <figure>
              <img :src="offer3" alt="Shoes" class="w-full object-cover" />
            </figure>
            <div class="card-body flex flex-col flex-grow">
              <h2 class="card-title">GET A FREE UPGRADE!</h2>
              <p class="flex-grow">Travel in a roomier ride.</p>
              <div class="card-actions justify-start items-center items-center mt-4 group">
                <MainBtn text="Book now" /> <ArrowCircule class="group-hover:!bg-black" />
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide class="py-12">
          <div class="card bg-base-100 w-96 shadow-sm min-h-[400px] flex flex-col wow animate__animated animate__zoomIn">
            <figure>
              <img :src="offer4" alt="Shoes" class="w-full object-cover" />
            </figure>
            <div class="card-body flex flex-col flex-grow">
              <h2 class="card-title">Your airport transfers with SIXT ride</h2>
              <p class="flex-grow">Choose SIXT times more comfort.</p>
              <div class="card-actions justify-start items-center mt-4 group">
                <MainBtn text="Book now" /> <ArrowCircule class="group-hover:!bg-black" />
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
  background-color: #eb2910 !important;
}

.offers .card {
  width: 100%;
}
</style>
