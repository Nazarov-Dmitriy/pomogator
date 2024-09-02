<template>
    <button
        class="btn-gradient"
        @click="submitEmit"
    >
        <span class="btn-gradient__text">
            <slot />
        </span>
    </button>
</template>
<script setup>
const props = defineProps({
    emitName: {
        type: String,
        default: null
    },
})
const emit = defineEmits(['form-submit', 'offer', 'action'])


function submitEmit (){
    emit(props.emitName)
}

</script>
<style lang="scss">
.btn-gradient {
    box-sizing: border-box;
    position: relative;
    padding: 6px 24px;
    border: 2px solid $primary-red;
    border-radius: 32px;
    background: none;
    cursor: pointer;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;

  

    &:hover {
        border: 2px solid $blue-primary;

        .btn-gradient__text {
            color: $blue-primary;
        }
         }

    &:active {
        border: 2px solid $blue;

        .btn-gradient__text {
            color: $blue;
        }
    }
}

.btn-gradient__text {
    color: $primary-red;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
}
</style>