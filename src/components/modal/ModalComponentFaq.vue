<template>
    <Transition name="modal">
        <div v-if="props.show" class="modal-mask">
            <div v-esc="() => $emit('close')" class="modal-container">
                <FormMaterial @close="$emit('close')" />
            </div>
        </div>
    </Transition>
</template>

<script setup>
import FormMaterial from '../form/FormFaq.vue'

FormMaterial
const props = defineProps({
    show: Boolean
})
defineEmits(['close'])
</script>

<style lang="scss" scoped>
.modal-mask {
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    transition: opacity 0.3s ease;
    padding: 16px 0;
}

.modal-container {
    position: relative;
    width: auto;
    height: fit-content;
    max-width: 1280px;
    margin: auto;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    border-radius: 24px;
    border: 2px solid $blue-primary;
    overflow: hidden;
    width: 100%;

    @media (max-width: $xxl) {
        margin: auto 80px;
    }

    @media (max-width: $lg) {
        margin: auto 40px;
    }

    @media (max-width: $sm) {
        margin: auto 16px;
    }
}

.modal-enter-from {
    opacity: 0;
}

.modal-leave-to {
    opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}
</style>
