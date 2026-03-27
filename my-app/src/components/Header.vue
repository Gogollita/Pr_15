<template>
  <nav class="bg-[#E8ECF2] sticky top-0 z-50 h-[70px] relative flex place-content-evenly md:place-content-evenly px-6 md:px-16 lg:px-24 xl:px-32 items-center z-20 text-gray-700 shadow-[0px_4px_25px_0px_#0000000D] transition-all">
      <img class="w-[60px] h-[45px] md:w-[75px] md:h-[55px]" src="..\assets\icons\LOGO.png" alt="Logo">

    <div>
      <ul class="md:flex hidden items-center gap-4 lg:gap-10">
        <li><a class="hover:text-gray-500/80 transition" href="/">Главная</a></li>
        <li><router-link class="hover:text-gray-500/80 transition" to="/err">Услуги</router-link></li>
        <li><a class="hover:text-gray-500/80 transition" href="/#about">О нас</a></li>
        <li><router-link class="hover:text-gray-500/80 transition" to="/reviews">Отзывы</router-link></li>
        <li><a class="hover:text-gray-500/80 transition" href="/#faq">FAQ</A></li>
      </ul>
    </div>

    <a href="/#contacts" class="bg-white text-gray-700 border-b border-gray-300 md:inline-flex hidden items-center justify-center text-sm hover:bg-gray-100 active:scale-95 transition-all w-40 h-11 rounded-full">
      Записаться
    </a>

    <button @click="toggleMenu" class="md:hidden active:scale-90 transition">
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="#000">
        <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"/>
      </svg>
    </button>
     <div
      v-show="isMenuOpen"
      class="mobile-menu absolute top-[70px] left-0 w-full bg-[#E8ECF2] p-6 shadow-lg rounded-b-2xl md:hidden"
    >
      <ul class="flex flex-col space-y-4 gap-2 h-full">
        <li><a @click="toggleMenu" href="/" class="text-sm">Главная</a></li>
        <li><a @click="toggleMenu" href="/err" class="text-sm">Услуги</a></li>
        <li><a @click="toggleMenu" href="/#about" class="text-sm">О нас</a></li>
        <li><a @click="toggleMenu" href="/reviews" class="text-sm">Отзывы</a></li>
        <li><a @click="toggleMenu" href="/#faq" class="text-sm">FAQ</a></li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
const isMenuOpen = ref(false)
const toggleMenu = () => { isMenuOpen.value = !isMenuOpen.value }
</script>