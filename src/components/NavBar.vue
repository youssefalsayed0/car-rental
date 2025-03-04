<script setup>
import Drawer from './NavDrawer.vue'
import MainBtn from '../components/ui/MainBtn.vue'
</script>

<template>
  <div class="drawer py-[20px] z-[999]">
    <!-- Drawer Toggle Checkbox -->
    <input id="menu-drawer" type="checkbox" class="drawer-toggle" />
    <!-- Drawer Content (Main Page) -->
    <div class="drawer-content">
      <nav>
        <div class="container !max-w-[1320px]">
          <div class="navbar">
            <div class="navbar-start">
              
              <router-link to="#home" class=" text-2xl md:text-4xl  font-bold ">CAR<span class="main-color">RENTAL</span></router-link>
            </div>
            <div class="navbar-center hidden lg:flex">
              <ul class="menu menu-horizontal px-1">
                <li class="hover:bg-none">
                  <router-link to="#home" class="font-medium text-[16px] hover:text-[#ff3600] hover:bg-transparent   ">
                    Home
                  </router-link>
                </li>
                <li>
                  <router-link   class="font-medium text-[16px] hover:text-[#ff3600] hover:bg-transparent   "
                    to="#categories"
                  >
                    Categories
                  </router-link>
                </li>
                <li>
                  <router-link  class="font-medium text-[16px] hover:text-[#ff3600] hover:bg-transparent   "
                    to="#offers"
                  >
                    Offers
                  </router-link>
                </li>
                <li>
                  <router-link  class="font-medium text-[16px] hover:text-[#ff3600] hover:bg-transparent   "
                    to="#testimonials"
                  >
                    Testimonials
                  </router-link>
                </li>
              </ul>
            </div>
            <div class="navbar-end">
              <MainBtn text="book a rental" class="!hidden md:!inline-block" to="#reservation" />
              <!-- Drawer Toggle Button -->
              <label for="menu-drawer" class="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>

    <!-- Drawer Sidebar (Menu) -->
    <Drawer />
  </div>
</template>

<style scoped>
html {
  scroll-behavior: smooth;
}
</style>
