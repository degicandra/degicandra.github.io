<template>
  <nav class="navbar">
    <router-link to="/" class="logo">
      <img src="/src/assets/img/logo.png" alt="Logo">
    </router-link>
    
    <div class="mobile-actions">
      <button
        class="dark-toggle"
        :class="{ active: isDark }"
        @click="toggleDarkMode"
        aria-label="Toggle dark mode"
      >
        <span class="icon">{{ isDark ? '☀️' : '🌙' }}</span>
      </button>
      <button
        class="hamburger"
        :class="{ active: menuOpen }"
        @click="toggleMenu"
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
    <ul :class="{ open: menuOpen }">
      <li><router-link to="/home">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <!-- <li><router-link to="/projects">Projects</router-link></li> -->
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>
    <button
      class="dark-toggle desktop-toggle"
      :class="{ active: isDark }"
      @click="toggleDarkMode"
      aria-label="Toggle dark mode"
    >
      <span class="icon">{{ isDark ? '☀️' : '🌙' }}</span>
    </button>
  </nav>
</template>


<script lang="ts" setup>
import { ref, onMounted } from 'vue';

const isDark = ref(false);
const menuOpen = ref(false);

// Cek localStorage saat halaman dimuat
onMounted(() => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    isDark.value = true;
    document.documentElement.classList.add('dark-mode');
  }
});

const toggleDarkMode = () => {
  isDark.value = !isDark.value;
  document.documentElement.classList.toggle('dark-mode', isDark.value);
  // Simpan ke localStorage
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light');
};

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};
</script>


<style lang="scss" scoped>
.navbar { 
  display: flex; 
  justify-content: space-between; 
  align-items: center; 
  padding: 15px 30px; 
  background-color: var(--bg-color); 
  color: var(--text-color);
  position: relative;

  .logo {
    font-size: 1.5rem;
    font-weight: bold;
    letter-spacing: 1px;
  }

  
.logo img {
  height: 23px;
  width: auto;
  display: block;
}


  .mobile-actions {
    display: none;
    align-items: center;
    gap: 8px;
  }

  .hamburger {
    display: none;
    flex-direction: column;
    gap: 4px;
    background: none;
    border: none;
    cursor: pointer;
    margin-left: auto;
    width: 32px;
    height: 32px;
    justify-content: center;
    align-items: center;
    span {
      display: block;
      width: 24px;
      height: 3px;
      background: var(--text-color);
      border-radius: 2px;
      transition: 0.3s;
      position: relative;
    }
    &.active span:nth-child(1) {
      transform: translateY(7px) rotate(45deg);
    }
    &.active span:nth-child(2) {
      opacity: 0;
    }
    &.active span:nth-child(3) {
      transform: translateY(-7px) rotate(-45deg);
    }
  }

  ul { 
    display: flex; 
    gap: 20px; 
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      a { 
        color: var(--text-color); 
        text-decoration: none; 
        transition: color 0.3s ease;
        &:hover { 
          color: #00bcd4; 
        }
      }
    }
  }


ul li a {
  position: relative;
  text-decoration: none;
}

ul li a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 0;
  height: 2px;
  background: #00bcd4;
  transition: width 0.3s ease;
}

ul li a:hover::after {
  width: 100%;
}


ul li a.router-link-active,
ul li a.router-link-exact-active {
  color: #00bcd4; /* Warna aksen */
  font-weight: bold;
}

ul li a.router-link-active::after,
ul li a.router-link-exact-active::after {
  width: 100%; /* Tampilkan underline animasi penuh */
}


  .dark-toggle { 
    background: #e0e0e0;
    border: none; 
    font-size: 1.2rem; 
    cursor: pointer; 
    color: #333; 
    margin-left: 18px;
    border-radius: 20px;
    padding: 6px 18px;
    transition: background 0.2s, color 0.2s, box-shadow 0.2s;
    box-shadow: 0 2px 8px rgba(44,83,100,0.06);
    display: flex;
    align-items: center;
    .icon {
      font-size: 1.2rem;
    }
    &.active {
      background: #222;
      color: #fff;
      box-shadow: 0 4px 16px rgba(0,188,212,0.18);
    }
  }
  .desktop-toggle {
    display: inline-block;
  }
}

@media (max-width: 700px) {
  .navbar {
    flex-wrap: wrap;
    padding: 12px 16px;

    .mobile-actions {
      display: flex;
      margin-left: auto;
      z-index: 21;
    }
    .hamburger {
      display: flex;
      margin-left: 0;
      z-index: 20;
    }
    .dark-toggle {
      margin-left: 0;
      margin-top: 0;
    }
    .desktop-toggle {
      display: none;
    }
    ul {
      position: absolute;
      top: 60px;
      left: 0;
      right: 0;
      background: var(--bg-color);
      flex-direction: column;
      align-items: flex-start;
      gap: 0;
      display: none;
      box-shadow: 0 8px 24px rgba(44,83,100,0.10);
      z-index: 10;
      transition: all 0.3s;
      li {
        width: 100%;
        a {
          display: block;
          width: 100%;
          padding: 16px 30px;
        }
      }
    }
    ul.open {
      display: flex;
      animation: fadeInMenu 0.3s;
    }
  }
}

@keyframes fadeInMenu {
  from { opacity: 0; transform: translateY(-10px);}
  to { opacity: 1; transform: translateY(0);}
}
</style>