<script setup>
import MainBtn from '../components/ui/MainBtn.vue'
/* Import Dependencies */
import { onBeforeUnmount, onMounted, ref } from 'vue'
import Pikaday from 'pikaday' // The date picker library.
import 'pikaday/css/pikaday.css' // The date picker library css.

const pickUpDateInput = ref(null)
const returnDateInput = ref(null)
let pickUpPicker = null // Variable to store the Pikaday instance for pick-up date
let returnPicker = null // Variable to store the Pikaday instance for return date

onMounted(() => {
  // Initialize Pikaday for pick-up date
  pickUpPicker = new Pikaday({
    field: pickUpDateInput.value, // Attach to the pick-up date input field
    format: 'YYYY-MM-DD', // Date format
  })

  // Initialize Pikaday for return date
  returnPicker = new Pikaday({
    field: returnDateInput.value, // Attach to the return date input field
    format: 'YYYY-MM-DD', // Date format
  })
})

onBeforeUnmount(() => {
  // Destroy Pikaday instances to avoid memory leaks
  if (pickUpPicker) pickUpPicker.destroy()
  if (returnPicker) returnPicker.destroy()
})
</script>

<template>
  <div class="flex flex-wrap items-center bg-white p-5 text-black text-start rounded-[30px]" id="reservation">
    <div class="w-12/12 px-3 mb-7">
      <p class="text-2xl font-bold">Need to Rent a Luxury Car ?</p>
    </div>
    <div class=" w-full md:w-6/12 lg:w-2/12 px-3 md:border-r border-base-300 mt-2">
      <label class="mb-2 font-semibold"
        >Phone number <i class="fa-solid fa-phone ms-2 text-gray-700"></i
      ></label>
      <input
        type="text"
        class="input  pika-single !z-10 !border-0 focus:outline-0 !m-0 !p-0"
        value=""
        placeholder="add phone number"
      />
    </div>
    <div class=" w-full md:w-6/12 lg:w-2/12 px-3 md:border-r border-base-300 mt-2">
      <label class="mb-2 font-semibold"
        >Pick-up Location <i class="fa-solid fa-location-arrow ms-2 text-gray-700"></i
      ></label>
      <input
        type="text"
        class="input  pika-single !z-10 !border-0 focus:outline-0 !m-0 !p-0"
        value=""
        placeholder="add pick-up location"
      />
    </div>

    <div class="w-12/12 md:w-6/12 lg:w-2/12 px-3 md:border-r border-base-300 mt-2">
      <label class="mb-2 font-semibold"
        >Return Location <i class="fa-solid fa-location-arrow ms-2 text-gray-700"></i
      ></label>
      <input
        type="text"
        class="input pika-single !z-10 !border-0 focus:outline-0 !m-0 !p-0"
        value=""
       placeholder="add return location"
      />
    </div>

    <div class=" w-12/12 md:w-6/12 lg:w-2/12 px-3 md:border-r border-base-300 mt-2">
      <label class="mb-2 font-semibold"
        >Pick-up date <i class="fa-solid fa-calendar-days ms-2 text-gray-700"></i
      ></label>
      <input
        type="text"
        class="input pika-single !z-10 !border-0 focus:outline-0 !m-0 !p-0"
        ref="pickUpDateInput"
        value=""
        placeholder="Pick a Date"
      />
    </div>

    <div class="w-12/12 md:w-6/12 lg:w-2/12 px-3 md:border-r border-base-300 mt-2">
      <label class="mb-2 font-semibold"
        >Return date <i class="fa-solid fa-calendar-days ms-2 text-gray-700"></i
      ></label>
      <input
        type="text"
        class="input pika-single !z-10 !border-0 focus:outline-0 !m-0 !p-0"
        ref="returnDateInput"
        value=""
        placeholder="Pick a Date"
      />
    </div>

    <div class=" w-12/12 text-end lg:w-2/12 px-3 lg:text-center">
      <MainBtn text="Send" />
    </div>

  </div>
</template>

<style lang=""></style>
