<template>
  <div id="app">
    <Navbar />
    <main class="container">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
</script>

<style lang="scss">
@import './assets/styles/main.scss';
#app { display: flex; flex-direction: column; min-height: 100vh; }
.container { flex: 1; padding: 20px; }
</style>
