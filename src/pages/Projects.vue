<template>
    <section class="projects" data-aos="fade-left">
        <h2>My Projects</h2>
        <div class="project-list">
            <div class="project-card" v-for="n in 3" :key="n">
                <h3>Project {{ n }}</h3>
                <p>Deskripsi singkat tentang project {{ n }}.</p>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup></script>
<style lang="scss" scoped>
.projects { 
    text-align: center; 
    color: var(--text-color); 
    .project-list { 
        display: grid; 
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); 
        gap: 20px; 
        margin-top: 30px; 
    } 
    .project-card { 
        padding: 20px; 
        background-color: var(--bg-color); 
        color: var(--text-color); 
        border-radius: 8px; 
        box-shadow: 0 2px 5px rgba(0,0,0,0.1); 
        transition: transform 0.3s ease, 
        box-shadow 0.3s ease; 
        &:hover { 
            transform: translateY(-5px); 
            box-shadow: 0 4px 10px rgba(0,0,0,0.2); 
        } 
    } 
}
</style>
