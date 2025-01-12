<template>
  <div class="bg-[#000000] min-h-screen min-w-[100vw] overflow-x-hidden">
    <div
      v-if="isLoading"
      class="flex items-center justify-center h-screen w-[100vw]"
      aria-live="polite"
    >
      <img
        class="w-[auto] h-[100px] z-10 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] anim-logo"
        src="./assets/image/icons/logo.svg"
        alt="logo"
      />
      <div class="burn">
        <div class="flame"></div>
        <div class="flame"></div>
        <div class="flame"></div>
        <div class="flame"></div>
        <div class="flame"></div>
        <div class="flame"></div>
        <div class="flame"></div>
        <div class="flame"></div>
        <div class="flame"></div>
        <div class="flame"></div>
      </div>
    </div>
    <div
      v-else
      class="bg-[#000000] min-h-screen min-w-[100vw] relative fade-in-animation"
    >
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CardsSection />
      <Banner />
      <CheckProducts />
      <Counter />
      <ServiceSection />
      <Footer />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Navbar from './components/Navbar.vue';
import HeroSection from './components/HeroSection.vue';
import CardsSection from './components/CardsSection.vue';
import Banner from './components/Banner.vue';
import Counter from './components/Counter.vue';
import ServiceSection from './components/ServiceSection.vue';
import Footer from './components/Footer.vue';
import AboutSection from './components/AboutSection.vue';
const isLoading = ref(true);
import AOS from 'aos';
import CheckProducts from './components/CheckProducts.vue';
onMounted(() => {
  AOS.init();
  setTimeout(() => {
    isLoading.value = false;
  }, 8000);
});
</script>
