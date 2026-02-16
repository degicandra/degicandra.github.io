<template>
  <section class="projects" data-aos="fade-up">
    <div class="container">
      <h2>My Projects</h2>
      <p class="subtitle">Explore my latest works and creative projects</p>
      
      <!-- filters removed: show all projects -->

      <div class="projects-grid">
        <div 
          v-for="project in projects" 
          :key="project.id"
          class="project-card"
          data-aos="fade-up"
          :data-aos-delay="project.id * 100"
        >
          <div class="project-image">
            <img :src="project.image" :alt="project.title" loading="lazy">
            <div class="project-overlay">
              <button class="view-btn" @click="openProject(project)">
                View Project
              </button>
            </div>
          </div>
          <div class="project-content">
            <h3>{{ project.title }}</h3>
            <p class="project-category">{{ project.category }}</p>
            <p class="project-description">{{ project.description }}</p>
            <div class="project-tags">
              <span v-for="tag in project.tags" :key="tag" class="tag">
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Image lightbox modal -->
  <div v-if="showModal" class="project-modal" @click.self="closeModal">
    <button class="modal-close" @click="closeModal" aria-label="Close">✕</button>
    <div class="modal-inner">
      <img :src="modalImage" alt="Project image" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, nextTick } from 'vue'
import tvDisplay from '../assets/projects/tv-display.png'
import ticketingImg from '../assets/projects/ticketing.png'
import riskRegisterImg from '../assets/projects/risk-register.png'
import portofolioImg from '../assets/projects/portofolio.png'

interface Project {
  id: number
  title: string
  category: string
  description: string
  image: string
  tags: string[]
  link?: string
  github?: string
}

const projects = ref<Project[]>([
  {
    id: 1,
    title: 'Ticketing Apps',
    category: 'Web Development',
    description: 'A comprehensive ticketing system for managing customer support tickets, incidents, and requests. Features role-based access, real-time notifications, and integration with email systems for seamless ticket tracking.',
    image: ticketingImg,
    tags: ['Vue.js', 'Node.js', 'MongoDB'],
    link: '#',
    github: '#'
  },
  {
    id: 2,
    title: 'Risk Register App',
    category: 'Web Development',
    description: 'A risk register management application for hospital environments. Built with Vue.js and Supabase (PostgreSQL) to track, log, and report clinical and operational risks with user roles and audit trails.',
    image: riskRegisterImg,
    tags: ['Vue.js', 'Supabase', 'PostgreSQL'],
    link: '#',
    github: '#'
  },
  {
    id: 3,
    title: 'Portfolio Website',
    category: 'Web Development',
    description: 'A personal portfolio application to showcase projects, experience, education, and a responsive gallery. Built with modern frontend practices including smooth transitions and optimized for performance across all devices.',
    image: portofolioImg,
    tags: ['Vue 3', 'TypeScript', 'SCSS'],
    link: '#',
    github: '#'
  },
  {
    id: 4,
    title: 'TV Display Hospital Lobby',
    category: 'Web Development',
    description: 'TV display solution for hospital lobbies — responsive Bootstrap frontend with a native PHP backend for content scheduling and MySQL database. Features doctor schedule, promo, and marketing content.',
    image: tvDisplay,
    tags: ['Bootstrap', 'PHP (native)', 'MySQL'],
    link: '#',
    github: '#'
  },
  {
    id: 5,
    title: 'Analytics Dashboard',
    category: 'Web Development',
    description: 'Interactive analytics dashboard with charts and KPIs for monitoring system performance and usage metrics.',
    image: 'https://placehold.co/600x400/0ea5e9/ffffff?text=Analytics',
    tags: ['React', 'D3.js', 'REST API'],
    link: '#',
    github: '#'
  },
  {
    id: 6,
    title: 'Chat Application',
    category: 'Web Development',
    description: 'Real-time chat application with group channels, direct messages, and typing indicators.',
    image: 'https://placehold.co/600x400/f97316/ffffff?text=Chat+App',
    tags: ['Socket.io', 'Node.js', 'Redis'],
    link: '#',
    github: '#'
  }
])

// show all projects (filters removed)

const showModal = ref(false)
const modalImage = ref<string | null>(null)

const openProject = async (project: Project) => {
  modalImage.value = project.image
  showModal.value = true
  await nextTick()
}

const closeModal = () => {
  showModal.value = false
  modalImage.value = null
}
</script>
<style lang="scss" scoped>
.projects {
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

  .filter-buttons {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-bottom: 50px;
    flex-wrap: wrap;

    button {
      padding: 12px 25px;
      background: transparent;
      border: 2px solid var(--text-color);
      color: var(--text-color);
      border-radius: 30px;
      cursor: pointer;
      transition: all 0.3s ease;
      font-weight: 500;

      &:hover,
      &.active {
        background: var(--text-color);
        color: var(--bg-color);
        transform: translateY(-2px);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
      }
    }
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }

  .project-card {
    background: var(--card-bg);
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
    }
  }

  .project-image {
    position: relative;
    height: 250px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
        object-fit: cover;
        object-position: top center;
      transition: transform 0.5s ease;
    }

    .project-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.7);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.3s ease;

      .view-btn {
        padding: 12px 25px;
        background: #00bcd4;
        color: white;
        border: none;
        border-radius: 30px;
        cursor: pointer;
        font-weight: 600;
        transition: transform 0.3s ease;

        &:hover {
          transform: scale(1.05);
        }
      }
    }

    &:hover {
      img {
        transform: scale(1.1);
      }

      .project-overlay {
        opacity: 1;
      }
    }
  }

  .project-content {
    padding: 25px;

    h3 {
      margin: 0 0 10px 0;
      font-size: 1.4rem;
      color: var(--text-color);
    }

    .project-category {
      color: #00bcd4;
      font-weight: 600;
      margin: 0 0 15px 0;
      font-size: 0.9rem;
    }

    .project-description {
      color: var(--text-secondary);
      margin: 0 0 20px 0;
      line-height: 1.6;
    }

    .project-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;

      .tag {
        background: var(--tag-bg);
        color: var(--tag-color);
        padding: 6px 12px;
        border-radius: 20px;
        font-size: 0.8rem;
        font-weight: 500;
      }
    }
  }
}

/* Modal styles */
.project-modal {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(2,6,23,0.6);
  z-index: 9999;
}
.modal-inner {
  max-width: min(900px, 80vw);
  max-height: 70vh;
  padding: 8px;
  box-shadow: 0 20px 60px rgba(2,6,23,0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.modal-inner img {
  display: block;
  max-width: 100%;
  max-height: 70vh;
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: 6px;
}
.modal-close {
  position: fixed;
  top: 18px;
  right: 18px;
  background: rgba(255,255,255,0.06);
  color: #fff;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  cursor: pointer;
  z-index: 10000;
}

@media (max-width: 768px) {
  .modal-close { top: 12px; right: 12px; }
}

@media (max-width: 1024px) {
  .projects .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .projects {
    padding: 60px 15px;

    h2 {
      font-size: 2rem;
    }

    .projects-grid {
      grid-template-columns: 1fr;
      gap: 25px;
    }

    .filter-buttons {
      gap: 10px;

      button {
        padding: 10px 20px;
        font-size: 0.9rem;
      }
    }
  }
}
</style>
