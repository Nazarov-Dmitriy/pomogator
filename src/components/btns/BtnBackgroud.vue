<template>
    <button
        class="btn-bg"
        @click="submitEmiit"
    >
        <span class="btn-bg__text">
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
const emit = defineEmits(['form-submit'])


function submitEmiit (){
    emit(props.emitName)
}

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