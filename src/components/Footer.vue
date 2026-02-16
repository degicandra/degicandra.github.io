<template>
    <footer class="footer" role="contentinfo">
        <div class="inner">
            <p class="left">© {{ year }} Degi Candra</p>
            <p class="right">Made with ♥ · All rights reserved.</p>
        </div>
    </footer>
</template>

<script lang="ts" setup>
const year = new Date().getFullYear();
</script>

<style lang="scss" scoped>
    .footer {
        padding: 12px 0;
        background: transparent;
        color: var(--muted, #6b7280);
        border-top: 1px solid rgba(15,23,36,0.06);
        font-size: 0.95rem;
    }
    .inner {
        max-width: 1100px;
        margin: 0 auto;
        padding: 0 1rem;
        display: flex;
        gap: 12px;
        align-items: center;
        justify-content: space-between;
    }
    .left, .right {
        margin: 0;
        color: inherit;
        opacity: 0.9;
    }
    .right { font-size: 0.9rem; opacity: 0.8 }

    @media (max-width: 600px) {
        .inner { flex-direction: column; gap: 6px; text-align: center; }
    }
</style>
