<template>
    <h2 class="cabinet-material__header">
        <slot />
    </h2>
</template>

<script setup></script>

<style lang="scss">
.cabinet-material__header {
    font-family: 'Kreadon-Demi';
    font-weight: 600;
    font-size: 36px;
    line-height: 42px;
    color: $blue-primary;
}
</style>
