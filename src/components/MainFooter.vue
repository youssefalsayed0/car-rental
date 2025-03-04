<template>
  <footer class="bg-black text-white">
    <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div class="lg:flex lg:items-start lg:gap-8">
        <div class="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
          <div class="col-span-2 lg:col-span-5">
            <router-link to="/" class="text-3xl md:text-4xl font-bold">
              CAR<span class="main-color">RENTAL</span>
            </router-link>
          </div>

          <div class="col-span-2">
            <div>
              <h2 class="text-2xl font-bold">Get the latest news!</h2>
              <p class="mt-4">
                Subscribe to the Newsletter to get updated offers.
              </p>
            </div>
          </div>

          <div class="col-span-2 lg:col-span-3 lg:flex lg:items-end">
            <form class="w-full">
              <label for="UserEmail" class="sr-only"> Email </label>
              <div class="border border-gray-100 p-2 focus-within:ring-3 sm:flex sm:items-center sm:gap-4">
                <input
                  type="email"
                  id="UserEmail"
                  placeholder="john@rhcp.com"
                  class="w-full border-none focus:border-transparent focus:ring-transparent sm:text-sm"
                />
                <button
                  class="mt-1 w-full bg-[#ff3600] px-6 py-3 text-sm font-bold tracking-wide text-white uppercase transition-none sm:mt-0 sm:w-auto sm:shrink-0"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>

          <div class="col-span-2 sm:col-span-1">
            <p class="font-medium">Our Services</p>
            <ul class="mt-6 space-y-4 text-sm">
              <li><router-link to="/rental-cars" class="transition hover:opacity-75"> Rental Cars </router-link></li>
              <li><router-link to="/luxury-cars" class="transition hover:opacity-75"> Luxury Cars </router-link></li>
              <li><router-link to="/long-term-rental" class="transition hover:opacity-75"> Long-Term Rental </router-link></li>
              <li><router-link to="/chauffeur-service" class="transition hover:opacity-75"> Chauffeur Service </router-link></li>
              <li><router-link to="/airport-pickup" class="transition hover:opacity-75"> Airport Pickup </router-link></li>
            </ul>
          </div>

          <div class="col-span-2 sm:col-span-1">
            <p class="font-medium">Company</p>
            <ul class="mt-6 space-y-4 text-sm">
              <li><router-link to="/about" class="transition hover:opacity-75"> About Us </router-link></li>
              <li><router-link to="/team" class="transition hover:opacity-75"> Meet the Team </router-link></li>
              <li><router-link to="/testimonials" class="transition hover:opacity-75"> Customer Reviews </router-link></li>
            </ul>
          </div>

          <div class="col-span-2 sm:col-span-1">
            <p class="font-medium">Helpful Links</p>
            <ul class="mt-6 space-y-4 text-sm">
              <li><router-link to="/contact" class="transition hover:opacity-75"> Contact </router-link></li>
              <li><router-link to="/faqs" class="transition hover:opacity-75"> FAQs </router-link></li>
              <li><router-link to="/support" class="transition hover:opacity-75"> Customer Support </router-link></li>
            </ul>
          </div>

          <div class="col-span-2 sm:col-span-1">
            <p class="font-medium">Legal</p>
            <ul class="mt-6 space-y-4 text-sm">
              <li><router-link to="/terms" class="transition hover:opacity-75"> Terms & Conditions </router-link></li>
              <li><router-link to="/privacy-policy" class="transition hover:opacity-75"> Privacy Policy </router-link></li>
              <li><router-link to="/refund-policy" class="transition hover:opacity-75"> Refund Policy </router-link></li>
            </ul>
          </div>
          
          <div class="col-span-2 sm:col-span-1">
            <p class="font-medium">Legal</p>
            <ul class="mt-6 space-y-4 text-sm">
              <li><router-link to="/terms" class="transition hover:opacity-75"> Terms & Conditions </router-link></li>
              <li><router-link to="/privacy-policy" class="transition hover:opacity-75"> Privacy Policy </router-link></li>
              <li><router-link to="/refund-policy" class="transition hover:opacity-75"> Refund Policy </router-link></li>
            </ul>
          </div>

          <ul class="col-span-2 flex justify-start gap-6 lg:col-span-5 lg:justify-end">
            <li><a href="https://facebook.com" target="_blank" class="transition hover:opacity-75" title="social"><i class="fa-brands fa-facebook fa-lg"></i></a></li>
            <li><a href="https://instagram.com" target="_blank" class="transition hover:opacity-75" title="social"><i class="fa-brands fa-instagram fa-lg"></i></a></li>
            <li><a href="https://twitter.com" target="_blank" class="transition hover:opacity-75" title="social"><i class="fa-brands fa-x-twitter fa-lg"></i></a></li>
       
          </ul>
        </div>
      </div>

      <div class="mt-8 border-t border-gray-100 pt-8">
        <div class="sm:flex sm:justify-between">
          <p class="text-xs">&copy; 2025. Car Rental. All rights reserved.</p>
          <ul class="mt-8 flex flex-wrap justify-start gap-4 text-xs sm:mt-0 lg:justify-end">
            <li><router-link to="/terms" class="transition hover:opacity-75"> Terms & Conditions </router-link></li>
            <li><router-link to="/privacy-policy" class="transition hover:opacity-75"> Privacy Policy </router-link></li>
            <li><router-link to="/cookies" class="transition hover:opacity-75"> Cookies </router-link></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style>
footer a {
  transition: all 0.3s ease-in-out;
}
</style>
