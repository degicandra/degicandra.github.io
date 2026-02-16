<template>
  <section class="photo-gallery" data-aos="fade-up">
    <div class="container">
      <h2>Photo Gallery</h2>
      <p class="subtitle">Captured moments and creative visuals</p>

      <div class="photos-grid masonry">
        <div 
          v-for="photo in photos" 
          :key="photo.id"
          class="photo-card"
          data-aos="fade-up"
          :data-aos-delay="photo.id * 40"
        >
          <div class="photo-wrapper">
            <img :src="photo.image" :alt="photo.title" loading="lazy">
            <div class="photo-overlay">
              <div class="photo-info">
                <h3>{{ photo.title }}</h3>
                <p>{{ photo.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

interface Photo {
  id: number
  title: string
  description: string
  image: string
}

const photos = ref<Photo[]>([
  {
    id: 1,
    title: 'Mountain Landscape',
    category: 'Nature',
    description: 'Beautiful mountain view during sunset',
    image: 'https://placehold.co/600x400/22c55e/white?text=Mountain+View'
  },
  {
    id: 2,
    title: 'Modern Workspace',
    category: 'Technology',
    description: 'Minimalist tech workspace setup',
    image: 'https://placehold.co/600x400/3b82f6/white?text=Workspace'
  },
  {
    id: 3,
    title: 'Abstract Art',
    category: 'Art',
    description: 'Digital abstract artwork composition',
    image: 'https://placehold.co/600x400/8b5cf6/white?text=Abstract+Art'
  },
  {
    id: 4,
    title: 'Coffee Moments',
    category: 'Lifestyle',
    description: 'Perfect coffee break moment',
    image: 'https://placehold.co/600x400/f59e0b/white?text=Coffee+Time'
  },
  {
    id: 5,
    title: 'City Skyline',
    category: 'Nature',
    description: 'Urban landscape with city lights',
    image: 'https://placehold.co/600x400/ef4444/white?text=City+View'
  },
  {
    id: 6,
    title: 'Code Interface',
    category: 'Technology',
    description: 'Clean code editor interface',
    image: 'https://placehold.co/600x400/14b8a6/white?text=Code+Editor'
  },
  {
    id: 7,
    title: 'Creative Design',
    category: 'Art',
    description: 'Colorful creative design work',
    image: 'https://placehold.co/600x400/ec4899/white?text=Design+Work'
  },
  {
    id: 8,
    title: 'Reading Time',
    category: 'Lifestyle',
    description: 'Peaceful reading session',
    image: 'https://placehold.co/600x400/84cc16/white?text=Reading'
  }
])
</script>

<style lang="scss" scoped>
.photo-gallery {
  padding: 80px 20px;
  background-color: var(--bg-color);
  color: var(--text-color);
  min-height: 100vh;

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 15px;
    color: var(--text-color);
  }

  .subtitle {
    text-align: center;
    font-size: 1.1rem;
    margin-bottom: 50px;
    color: var(--text-secondary);
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  /* filters removed - gallery displays all photos in masonry columns */

  /* Masonry-like layout using CSS columns (keeps portrait/landscape images tidy) */
  .photos-grid.masonry {
    column-count: 3;
    column-gap: 1rem;
  }

  .photo-card {
    display: inline-block;
    width: 100%;
    margin: 0 0 1rem;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 6px 18px rgba(2,6,23,0.06);
    transition: transform 0.25s ease, box-shadow 0.25s ease;
    break-inside: avoid;

    &:hover {
      transform: translateY(-6px);
      box-shadow: 0 14px 34px rgba(2,6,23,0.08);
    }
  }

  .photo-wrapper {
    position: relative;
    overflow: hidden;
    max-height: 420px; /* limit thumbnail height so top cropping is visible */

    img {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
      object-position: top center; /* show top part of images */
      transition: transform 0.45s ease;
    }

    .photo-overlay {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 14px;
      background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%);
      display: flex;
      align-items: flex-end;
      opacity: 0;
      transition: opacity 0.25s ease;

      .photo-info {
        color: #fff;
        h3 { margin: 0 0 6px 0; font-size: 1rem; }
        p { margin: 0; font-size: 0.85rem; opacity: 0.95; }
      }
    }

    &:hover {
      img { transform: scale(1.03); }
      .photo-overlay { opacity: 1; }
    }
  }
}

@media (max-width: 768px) {
  .photo-gallery {
    padding: 60px 15px;

    h2 {
      font-size: 2rem;
    }

    .photos-grid.masonry { column-count: 2; column-gap: 12px; }
  }

  @media (max-width: 480px) {
    .photo-gallery .photos-grid.masonry { column-count: 1; column-gap: 0; }
  }
}
</style>