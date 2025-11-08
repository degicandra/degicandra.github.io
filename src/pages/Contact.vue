
<template>
  <section class="contact" data-aos="fade-up">
    <div class="contact-inner">
      <h2 class="title" data-aos="fade-up">Get in Touch</h2>
      <p class="subtitle" data-aos="fade-up" data-aos-delay="100">
        Feel free to reach out for collaborations or just a friendly hello 👋
      </p>

      <form @submit.prevent="sendEmail" class="contact-form" data-aos="zoom-in" data-aos-delay="200">
        <input type="text" v-model="name" placeholder="Your Name" required />
        <input type="email" v-model="email" placeholder="Your Email" required />
        <textarea v-model="message" placeholder="Your Message" required></textarea>
        <button type="submit" class="btn-submit" data-aos="fade-up" data-aos-delay="40">
          <i class="fas fa-paper-plane"></i> Send Message
        </button>
      </form>

      <div class="social-links" data-aos="fade-up" data-aos-delay="600">
        <a href="https://www.linkedin.com/in/degicandra/" target="_blank">
        <i class="fab fa-linkedin-in"></i>
        </a>
        <a href="https://github.com/degicandra" target="_blank">
          <i class="fab fa-github"></i>
        </a>
        <a href="https://www.instagram.com/dgcndr/" target="_blank">
          <i class="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const name = ref('');
const email = ref('');
const message = ref('');

const sendEmail = () => {
  emailjs.send('service_nsffj2c', 'template_q26ihus', {
    from_name: name.value,
    from_email: email.value,
    message: message.value,
  }, '8hv30dl7Y_0iQajL-')
    .then(() => {
     Swal.fire({
        title: '✅ Message Sent!',
        text: 'Thank you for reaching out. I will get back to you soon!',
        icon: 'success',
        confirmButtonText: 'Close',
        background: '#f9f9f9',
        color: '#333',
        confirmButtonColor: '#00bcd4',
        timer: 3000,
        timerProgressBar: true
      });
      name.value = '';
      email.value = '';
      message.value = '';
    })
    .catch(() => {
      Swal.fire({
        title: '❌ Failed!',
        text: 'Oops! Something went wrong. Please try again later.',
        icon: 'error',
        confirmButtonText: 'Retry',
        background: '#fff',
        color: '#333',
        confirmButtonColor: '#ec21f3'
      });
    });
};

// ✅ Hapus animasi AOS untuk tombol & social links di mobile
onMounted(() => {
  if (window.innerWidth <= 768) {
    document.querySelector('.btn-submit')?.removeAttribute('data-aos');
    document.querySelector('.social-links')?.removeAttribute('data-aos');
  }
});
</script>

<style lang="scss" scoped>
.contact {
  width: 100%;
  height: 90%; /* Full screen */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: var(--bg-color, #fff);
  color: var(--main-text);

  .contact-inner {
    width: 90%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    text-align: center;
  }

  .title {
    font-size: clamp(1.8rem, 4vw, 2.2rem);
    font-weight: 800;
  }

  .subtitle {
    font-size: clamp(1rem, 3vw, 1.2rem);
    color: var(--desc-text);
  }

  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 10px;

    input,
    textarea {
      width: 100%;
      padding: 12px;
      border: 2px solid #ccc;
      border-radius: 8px;
      font-size: 1rem;
      background-color: var(--bg-color, #fff);
      color: var(--main-text);
      box-sizing: border-box;

      &::placeholder {
        color: var(--desc-text);
      }

      &:focus {
        border-color: #00bcd4;
        outline: none;
      }
    }

    textarea {
      min-height: 80px;
      resize: none;
    }

    .btn-submit {
      padding: 12px;
      background: linear-gradient(90deg, #00bcd4, #ec21f3);
      color: #fff;
      font-size: 1rem;
      font-weight: 700;
      border: none;
      border-radius: 30px;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
      transition: transform 0.15s ease;

      &:hover {
        transform: scale(1.05);
      }
    }
  }

  .social-links {
    display: flex;
    justify-content: center;
    gap: 12px;

    a {
      background: #00bcd4;
      color: #fff;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
      transition: background 0.2s ease;

      &:hover {
        background: #2196f3;
      }
    }
  }
}

/* ✅ Dark Mode */
.dark-mode input,
.dark-mode textarea {
  background-color: #1e1e1e !important;
  color: var(--main-text) !important;
  border-color: #333 !important;
}

.dark-mode .btn-submit {
  background: linear-gradient(90deg, #2196f3, #00bcd4);
}

/* ✅ Mobile Responsive */
@media (max-width: 768px) {
  .contact-inner {
    gap: 12px;
  }

  .contact-form input,
  .contact-form textarea {
    font-size: 0.9rem;
    padding: 10px;
  }

  .btn-submit {
    font-size: 0.9rem;
    padding: 10px;
  }

  /* ✅ Override AOS animasi di mobile hanya untuk tombol & social links */
  .btn-submit,
  .social-links {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }
}
</style>
