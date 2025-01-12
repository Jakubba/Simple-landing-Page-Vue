<template>
  <header
    class="fixed top-0 z-50 flex items-center justify-between w-screen p-6 bg-opacity-50 bg-gradient-to-t from-transparent to-black"
    data-aos="fade-down"
    data-aos-delay="1000"
    data-aos-easing="linear"
    data-aos-duration="1500"
  >
    <div class="text-3xl font-bold text-white">
      <img class="w-[auto] h-[100px]" src="./../assets/image/icons/logo.svg" alt="logo" />
    </div>
    <div class="absolute z-30 md:hidden right-4 top-6">
      <button
        type="button"
        class="block focus:outline-none"
        @click="isMenuOpen = !isMenuOpen"
        aria-label="Toggle navigation menu"
      >
        <span v-if="isMenuOpen">
          <img
            src="https://img.icons8.com/ios-filled/50/FFFFFF/delete-sign.png"
            alt="Close menu"
            width="24"
            height="24"
          />
        </span>
        <span v-else>
          <img
            src="https://img.icons8.com/ios-filled/50/FFFFFF/menu--v6.png"
            alt="Open menu"
            width="24"
            height="24"
          />
        </span>
      </button>
    </div>
    <nav
      :class="[
        'fixed h-fit inset-0 flex flex-col items-center justify-center bg-[#111827] md:relative md:bg-transparent md:justify-between md:flex-row md:block p-6',
        isMenuOpen ? 'block' : 'hidden',
      ]"
    >
      <ul
        class="flex flex-col items-center space-y-5 md:flex-row md:space-x-5 md:space-y-0"
      >
        <li v-for="item in Menu" :key="item.name">
          <a
            :href="item.href"
            class="block text-4xl text-white transition ease-linear font-secondary hover:text-primary md:text-lg"
            @click="scrollToSection(item.href)"
            >{{ item.name }}</a
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const Menu = ref([
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
  { name: 'Testimonials', href: '#testimonials' },
]);

const isMenuOpen = ref(false);

const scrollToSection = (href) => {
  isMenuOpen.value = false;
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};
</script>
