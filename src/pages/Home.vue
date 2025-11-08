
<template>
  <section class="home-hero" data-aos="fade-up">
    <div class="hero-inner">
      <!-- Foto Profil -->
      <div class="hero-photo" data-aos="zoom-in" data-aos-delay="200">
        <img src="/src/assets/img/profile1.png" alt="Profile">
      </div>

      <!-- Konten -->
      <div class="hero-content" data-aos="fade-left" data-aos-delay="400">
        <h1>{{ name }}</h1>
        <p class="desc">
          <span id="typed-text"></span> <!-- ✅ Tempat animasi typing -->
        </p>

        <!-- Social Links -->
        <div class="socials">
          <a
            v-for="(link, index) in socials"
            :key="index"
            :href="link.url"
            :aria-label="link.label"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i :class="link.icon"></i>
          </a>
        </div>

        <!-- Tombol -->
        <div class="actions">
          <button @click="downloadCV">Download CV</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import Typed from 'typed.js';

interface SocialLink {
  label: string;
  url: string;
  icon: string;
}

// Data dinamis
const name = 'HELLO, I`M DEGI CANDRA';
const cvPath = '/degi-portfolio/CV-Degi-Candra-Kamarullah.pdf';

const socials: SocialLink[] = [
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/degicandra/', icon: 'fab fa-linkedin-in' },
  { label: 'Instagram', url: 'https://www.instagram.com/dgcndr/', icon: 'fab fa-instagram' },
  { label: 'GitHub', url: 'https://github.com/degicandra', icon: 'fab fa-github' }
];

// Job titles untuk animasi typing
const jobTitles = [
  'IT Staff Specialist',
  'Web Developer',
  'IT Application Staff'
  
];

// Download CV dengan error handling
const downloadCV = () => {
  fetch(cvPath)
    .then(response => {
      if (!response.ok) throw new Error('CV tidak ditemukan');
      window.open(cvPath, '_blank');
    })
    .catch(err => alert(err.message));
};

// Inisialisasi Typed.js
onMounted(() => {
  new Typed('#typed-text', {
    strings: jobTitles.map(title => `${title} `), // Tambahkan "|" di akhir
    typeSpeed: 30,
    backSpeed: 20,
    backDelay: 1500,
    loop: true,
    showCursor: true,
    cursorChar: '|'
  });
});
</script>

<style lang="scss" scoped>
:root {
  --main-text: #111;
  --desc-text: #333;
}
.dark-mode {
  --main-text: #fff;
  --desc-text: #b2ebf2;
}

$primary: #00bcd4;
$secondary: #2196f3;
$text-light: #fff;

.home-hero {
  width: 100%;
  min-height: 45vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  background: transparent;
  transition: background 0.3s ease, color 0.3s ease; /* ✅ Smooth transition */
}

.hero-inner {
  display: flex;
  gap: 48px;
  max-width: 1100px;
  width: 100%;
  padding: 10vh 0vh 0vh 0vh;
  border-radius: 32px;
  transition: background 0.3s ease, color 0.3s ease;
}

.hero-photo img {
  width: 100%;
  height: 580px;
  object-fit: cover;
  transition: border-color 0.3s ease;
}

.hero-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

h1 {
  font-size: 1rem;
  font-weight: 800;
  color: var(--main-text);
  margin-bottom: 0vh;
  transition: color 0.3s ease;
}

.desc {
  font-size: 2rem;
  color: var(--desc-text);
  span {
    color: var(--main-text);
    font-weight: bold;
  }
  margin-bottom: 2vh;
  transition: color 0.3s ease;
}

.socials a {
  background: $primary;
  color: $text-light;
  width: 44px;
  height: 44px;
  margin-top: 15px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  margin-bottom: 1.25vh;
  transition: background 0.3s ease, transform 0.3s ease;
  &:hover {
    background: $secondary;
    transform: scale(1.05);
  }
}

.actions button {
  margin-top: 20px;
  margin-right: 12px;
  padding: 14px 20px;
  background: linear-gradient(90deg, $primary, $secondary);
  color: $text-light;
  border: none;
  border-radius: 24px;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 16px rgba(0, 188, 212, 0.18);
  }
}

@media (max-width: 900px) {
  .hero-inner {
    flex-direction: column;
    text-align: center;
  }

  .hero-photo img {
    width: 0px;
    height: 0px;
    margin: 0;
  }
}
</style>
