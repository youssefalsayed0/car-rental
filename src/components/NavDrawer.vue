<template lang="">
  <!-- Drawer Sidebar (Menu) -->
  <div class="drawer-side">
      <label for="menu-drawer" class="drawer-overlay"></label>
      <div class="menu p-4 w-80 min-h-full bg-base-200 text-base-content relative">
        <!-- Close Button -->
        <label
          for="menu-drawer"
          class="absolute right-5 top-8 text-xl cursor-pointer transition-transform duration-400 transform hover:rotate-180"
        >
        <i class="fa-solid fa-xmark "></i>
        </label>

        <!-- Logo inside Drawer -->
        <div class="flex items-center gap-2 text-xl font-bold  pt-3">
          <router-link to="#home" class=" text-2xl md:text-4xl  font-bold ">CAR<span class="main-color">RENTAL</span></router-link>
        </div>

        <!-- Navigation Links --> 
          <ul class="pt-[50px]">
            <li><router-link to="#home">Home</router-link></li>
            <li><router-link to="#categories">Categories</router-link></li>
            <li><router-link to="#offers">Offers</router-link></li>
            <li><router-link to="#testimonials">Testimonials</router-link></li>
          </ul>

      </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>