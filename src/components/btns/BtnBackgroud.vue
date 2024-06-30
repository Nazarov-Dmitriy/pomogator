<template>
    <button class="btn-bg">
        <span class="btn-bg__text">
            <slot />
        </span>
    </button>
</template>
<script setup>

</script>
<style lang="scss">
.btn-bg {
    border: none;
    padding: 12px 24px;
    box-sizing: border-box;
    background: $primary-red;
    border-radius: 32px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;


    &:hover {
        background: $gradient;
    }

    &:active {
        background: $blue-primary;
    }
}

.btn-bg__text {
    color: $white;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
}
</style>