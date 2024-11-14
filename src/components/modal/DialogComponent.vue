<template>
    <Transition name="dialog">
        <div
            v-show="props.show"
            v-esc="() => $emit('closeDialog')"
            class="dialog-modal-wrapper fixed z-[999] inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
        >
            <div
                class="dialog-container flex flex-col md:gap-16 gap-4 bg-white w-[500px] md:p-20 py-10 px-10 shadow-lg relative yrounded-[32px]"
            >
                <div class="absolute top-3 right-3">
                    <button @click="handleClose">X</button>
                </div>
                <div class="dialog-modal">
                    <p class="text-xxl text-center">Вы точно хотите удалить материал?</p>
                </div>
                <div class="flex justify-center items-center gap-4">
                    <BtnBackgroud emit-name="action" @action="deleteMaterial"
                        >Все равно удалить</BtnBackgroud
                    >
                </div>
            </div>
        </div>
    </Transition>
</template>

<script setup>
import { watch } from 'vue'
import BtnBackgroud from '../btns/BtnBackgroud.vue'

const props = defineProps({
    show: {
        type: Boolean,
        default: false
    }
})

const emit = defineEmits(['closeDialog', 'delete'])

function handleClose() {
    emit('closeDialog')
}

function deleteMaterial() {
    emit('delete')
}

watch(
    () => props.show,
    (newVal) => {
        if (newVal) {
            document.body.classList.add('no-scroll')
        } else {
            document.body.classList.remove('no-scroll')
        }
    }
)
</script>

<style lang="scss" scoped>
.no-scroll {
    overflow: hidden;
}

.dialog-container {
    border: 2px solid #5b94ea;
    background: linear-gradient(165deg, #daebff 0%, #edf5ff 100%);
}

.dialog-container {
    :deep(.btn-bg) {
        @media (max-width: $sm) {
            width: max-content;
        }
    }
}

.dialog-modal-wrapper {
    opacity: 1;
    transition: opacity 0.3s ease;
}

.dialog-enter-active .dialog-container,
.dialog-leave-active .dialog-container {
    transition:
        opacity 0.3s ease,
        transform 0.3s ease;
}

.dialog-enter-from .dialog-container {
    opacity: 0;
    transform: scale(0.9);
}

.dialog-enter-to .dialog-container {
    opacity: 1;
    transform: scale(1);
}

.dialog-leave-to .dialog-container {
    opacity: 0;
    transform: scale(0.9);
}
</style>
