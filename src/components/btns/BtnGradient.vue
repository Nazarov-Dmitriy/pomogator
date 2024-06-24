<template>
    <button class="btn-gradient">
        <span class="btn-gradient__text">
            <slot></slot>
        </span>
    </button>

</template>
<script setup>

</script>
<style lang="scss">
.btn-gradient {
    box-sizing: border-box;
    position: relative;
    padding: 6px 24px;
    border: 2px solid transparent;
    border-radius: 32px;
    background: none;
    cursor: pointer;
    height: 40px;

    &::before {
        content: "";
        position: absolute;
        inset: -2px;
        border-radius: 32px;
        border: 2px solid transparent;
        background: $gradient border-box;
        -webkit-mask: $gradient-background padding-box, $gradient-background;
        mask: $gradient-background padding-box, $gradient-background;
        -webkit-mask-composite: destination-out;
        mask-composite: exclude;
    }

    &:hover {
        border: 2px solid $blue-primary;

        .btn-gradient__text {
            color: $blue-primary;
            -webkit-text-fill-color: unset;
        }

        &::before {
            content: none;
        }
    }

    &:active {
        border: 2px solid $primary-red;

        .btn-gradient__text {
            color: $primary-red;
            -webkit-text-fill-color: unset;
        }

        &::before {
            content: none;
        }
    }
}

.btn-gradient__text {
    background: $gradient;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;


}
</style>