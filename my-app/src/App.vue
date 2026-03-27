<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { ref, onMounted, onUnmounted } from 'vue'
import './style.css'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

const route = useRoute()
const hideHeaderFooter = computed(() => route.path === '/err' || route.name === 'Err')

const show = ref(false)

const checkScroll = () => {
  show.value = window.scrollY > 300
}
const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
onMounted(() => {
  window.addEventListener('scroll', checkScroll)
  checkScroll()
})
onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
})
</script>

<template>
  <Header v-if="!hideHeaderFooter" />
  <router-view />
  <Footer v-if="!hideHeaderFooter" />
  <button
    :class="{ visible: show }"
    @click="scrollTop"
    class="scroll-top" 
    id="scrollTop">
    ↑
  </button>
</template>