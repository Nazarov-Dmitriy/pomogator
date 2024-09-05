<template>
    <h2 class="cabinet-material__header kreadon">
        <slot />
    </h2>
</template>

<script setup>
</script>

<style lang="scss">
.cabinet-material__header {
    padding: 60px 80px 0 80px;
    font-style: normal;
    font-weight: 600;
    color: #4360F8;

    @media (max-width: $lg) {
        padding: 40px 40px 0 40px;
        font-size: 32px;
        line-height: 40px;    
    }

    @media (max-width: $sm) {
        padding: 32px 16px;
        font-size: 30px;
    }
}
</style>