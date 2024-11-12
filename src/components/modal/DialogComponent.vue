<template>
    <Transition name="dialog">
        <div
            v-show="props.show"
            v-esc="() => $emit('closeDialog')"
            class="dialog-modal-wrapper fixed z-[999] inset-0 bg-black bg-opacity-50 flex items-center justify-center"
        >
            <div
                class="dialog-container flex flex-col gap-4 bg-white w-[500px] p-6 rounded-lg shadow-lg relative"
            >
                <div class="absolute top-3 right-3">
                    <button @click="handleClose">X</button>
                </div>
                <div class="dialog-modal text-center text-xl">
                    Вы действительно хотите удалить материал?
                </div>
                <div class="flex justify-center items-center gap-4">
                    <button @click="deleteMaterial" class="bg-red-500 p-2 rounded-sm text-white">
                        Удалить
                    </button>
                    <button @click="handleClose" class="bg-green-500 p-2 rounded-sm text-white">
                        Отмена
                    </button>
                </div>
            </div>
        </div>
    </Transition>
</template>

<script setup>
import { watch } from 'vue'

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
