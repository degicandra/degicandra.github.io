<template>
  <section class="about" data-aos="fade-up">
    <!-- Objective -->
    <h2>About Me</h2>
    <p class="summary">
      IT professional with over 5 years of experience in business application management,
      technical support, data analysis, and web development. Skilled in troubleshooting,
      system migration, and cross-department collaboration to ensure optimal application
      performance and data security.
    </p>

    <!-- Experience Timeline -->
    <h3>Experience</h3>
    <div class="timeline">
      <div class="timeline-item" v-for="(job, index) in jobs" :key="index">
        <div class="timeline-content">
          <h4>{{ job.title }}</h4>
          <p class="company">{{ job.company }} | {{ job.period }}</p>
          <ul>
            <li v-for="(task, i) in job.tasks" :key="i">{{ task }}</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Education Timeline -->
    <h3>Education</h3>
    <div class="timeline">
      <div class="timeline-item" v-for="(edu, index) in education" :key="index">
        <div class="timeline-content">
          <h4>{{ edu.degree }}</h4>
          <p class="company">{{ edu.school }} | {{ edu.detail }}</p>
        </div>
      </div>
    </div>

    <!-- Certification -->
    <h3>Certification</h3>
    <div class="cert-list">
      <div class="cert-item" v-for="(cert, index) in certifications" :key="index">
        <div class="timeline-content">
          <h4>
            <span class="bullet"></span>
            <a v-if="cert.link" :href="cert.link" target="_blank" rel="noopener noreferrer" class="cert-link">
              {{ cert.name }}
            </a>
            <span v-else>{{ cert.name }}</span>
          </h4>
          <p class="company">{{ cert.issuer }} | {{ cert.year }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const jobs = [
  {
    title: "Information Technology Application Staff",
    company: "PT. Bundamedik, Tbk",
    period: "June 2025 – Present",
    tasks: [
      "Maintain, monitor, and troubleshoot existing business applications to ensure optimal performance.",
      "Assist in developing and implementing new applications or system upgrades.",
      "Collaborate with users and departments to identify needs and translate them into technical requirements.",
      "Provide technical support and training to end-users regarding application usage.",
      "Conduct routine system checks and data validation.",
      "Coordinate with vendors or external developers for system maintenance and issue resolution.",
      "Document application processes, configurations, and issue resolutions.",
      "Coordinate system migration projects from legacy systems to new applications, including data transfer,configuration, and validation.", 
      "Create and execute User Acceptance Tests (UAT) to ensure application quality and functionality meet business requirements",
      "Ensure data integrity, security, and compliance with company policies.",
    ]
  },

  {
    title: "Information Technology Support Staff",
    company: "PT. Bundamedik, Tbk",
    period: "Feb 2020 – Present",
    tasks: [
      "Delivered end-to-end hardware and software troubleshooting via a structured ticketing system, ensuring timely resolution and minimal downtime.",
      "Conducted preventive maintenance on IT infrastructure and prepared comprehensive maintenance reports.",
      "Installed and configured IP Phone/VoIP systems using Issabel, improving internal and external communication efficiency.",
      "Developed annual IT asset budgets (Capex & Opex) aligned with organizational strategic goals.",
      "Designed and managed network infrastructure using MikroTik, ensuring secure and stable connectivity.",
      "Provided Level 1 & 2 support for SIRS (ERP System) and coordinated with vendors for complex issue resolution.",
      "Performed routine server and network device maintenance to maintain high system availability.",
      "Installed and configured operating systems and essential software for desktops and laptops.",
      "Administered Kaspersky antivirus servers to ensure endpoint security.",
      "Coordinated with third-party vendors for application integration and bridging processes.",
      "Managed Microsoft 365 email accounts and services for organizational use.",
      "Created marketing and internal materials using Adobe Photoshop and produced video content via Adobe Premiere.",
      "Directed and operated live streaming setups using OBS Studio for events and company broadcasts.",
      "Designed intuitive UI mockups using Figma for internal web and mobile applications.",
      "Developed internal web applications using HTML, CSS, JavaScript, and MySQL tailored to business needs."
    ]
  },

  {
    title: "Data Analyst",
    company: "PT. Bundamedik, Tbk",
    period: "Apr 2022 – Apr 2023",
    tasks: [
      "Extracted and transformed data from the ERP system to support operational and strategic decision-making.",
      "Conducted data analysis to identify trends, discrepancies, and actionable insights relevant to business needs",
      "Performed advanced data grouping, filtering, and formulation using Microsoft Excel functions and tools.",
      "Developed and automated pivot tables and reports to present data in a structured, decision-friendly format for stakeholders."
    ]
  },

  {
    title: "Graphic Designer & Photographer",
    company: "Freelance",
    period: "Mar 2019 – Mar 2020",
    tasks: [
      "Designed professional logos for small businesses, enhancing brand identity and visual appeal.",
      "Captured and edited product photography using Adobe Photoshop to create high-quality marketing visuals.",
      "Created vector illustrations and caricatures tailored to client specifications.",
      "Designed engaging and creative book covers for various genres",
      "Edited client-requested videos to meet branding and promotional requirements"
    ]
  },

  {
    title: "IT Support (Intern)",
    company: "PT. Kereta Api Indonesia (Persero) ",
    period: "Aug 2018 – Sep 2018",
    tasks: [
      "Troubleshot hardware and software issues to ensure smooth system operations. ",
      "Performed preventive maintenance on hardware and network devices to maintain optimal performance.",
      "Assembled PCs and laptops, installed operating systems, and configured essential software. ",
      "Installed and configured network infrastructure using MikroTik, ensuring secure connectivity. ",
      "Installed and configured CCTV systems for security monitoring. "
    ]
  }
  
];

const education = [
  {
    degree: "Informatics",
    school: "Universitas Nasional",
    detail: "GPA 3.58, Cumlaude"
  },
  {
    degree: "Teknik Komputer dan Jaringan",
    school: "SMK BPS&K II",
    detail: ""
  }
];

const certifications = [
  {
    name: "Microsoft Technology Associate: Software Development Fundamentals (MTA)",
    issuer: "Microsoft",
    year: "2018",
    link: "https://www.certiport.com/portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=129&cvid=BHkJYFMJbz0LKXSAMdCHLw=="
  }
];
</script>

<style lang="scss" scoped>
.about {
  --timeline-color: #00bcd4;
  --timeline-width: 3px;
  --timeline-pad: 30px;
  --timeline-dot: 16px;
  --timeline-glow: 4px;

  max-width: 900px;
  margin: 50px auto;
  padding: 20px;
  color: var(--text-color);

  h2 {
    text-align: center;
    margin-bottom: 20px;
    font-size: 2rem;
  }

  .summary {
    text-align: justify;
    font-size: 1.1rem;
    margin-bottom: 40px;
    line-height: 1.6;
  }

  h3 {
    margin-top: 30px;
    font-size: 1.5rem;
    color: var(--timeline-color);
  }

  .timeline {
    position: relative;
    border-left: var(--timeline-width) solid var(--timeline-color);
    margin: 20px 0;
    padding-left: var(--timeline-pad);
  }

  .timeline-item {
    position: relative;
    margin-bottom: 30px;

    &::before {
      content: '';
      position: absolute;
      left: calc(-1.05 * var(--timeline-pad) - (var(--timeline-dot) / 2) + (var(--timeline-width) / 2));
      top: 23px;
      width: var(--timeline-dot);
      height: var(--timeline-dot);
      background: var(--timeline-color);
      border-radius: 50%;
      box-shadow: 0 0 0 var(--timeline-glow) rgba(0, 188, 212, 0.2);
      z-index: 1;
    }

    .timeline-content {
      position: relative;
      background: var(--bg-color);
      padding: 15px 20px;
      border-radius: 8px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);

      h4 {
        margin: 0 0 10px 0;
        font-size: 1.2rem;
        color: var(--timeline-color);
      }

      .company {
        font-size: 0.95rem;
        margin-bottom: 10px;
        color: var(--text-secondary);
      }

      ul {
        margin: 0;
        padding-left: 20px;
        list-style: disc;

        li::marker {
          color: var(--timeline-color);
        }

        li {
          font-size: 0.95rem;
          margin-bottom: 5px;
          line-height: 1.5;
        }
      }
    }
  }

  .cert-list {
    margin: 20px 0;
    padding-left: 0;
  }

  .cert-item {
    margin-bottom: 20px;

    .timeline-content {
      background: var(--bg-color);
      padding: 15px 20px;
      border-radius: 8px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);

      h4 {
        display: flex;
        align-items: center;
        gap: 8px;
        margin: 0 0 5px 0;
        font-size: 1.1rem;
        font-weight: 600;
        color: var(--timeline-color);

        .bullet {
          width: 8px;
          height: 8px;
          background: var(--timeline-color);
          border-radius: 50%;
          box-shadow: 0 0 0 2px rgba(0, 188, 212, 0.2);
        }

        .cert-link {
          color: var(--timeline-color);
          text-decoration: none;
          transition: color 0.2s ease, text-shadow 0.3s ease;

          &:hover {
            color: #0097a7;
            text-shadow: 0 0 5px rgba(0, 188, 212, 0.4);
            text-decoration: underline;
          }
        }
      }

      .company {
        font-size: 0.95rem;
        color: var(--text-secondary);
      }
    }
  }

  @media (max-width: 600px) {
    .timeline-item::before {
      top: 21px;
    }
  }
}
</style>
