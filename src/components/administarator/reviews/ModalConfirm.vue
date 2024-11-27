<template>
    <Transition name="modal">
        <div v-if="props.show" class="modal-mask">
            <div v-esc="() => $emit('close')" class="modal-container">
                <div class="flex flex-col gap-8">
                    <slot name="body" />
                    <div class="flex gap-2 justify-end">
                        <button
                            class="card-top__delete p-2 px-4 bg-white rounded-xl border border-[#F84343]"
                            @click="() => $emit('close')"
                        >
                            <p>Отменить</p>
                        </button>
                        <button
                            class="card-top__delete p-2 px-4 bg-white rounded-xl border border-[#F84343]"
                            @click="() => $emit('remove')"
                        >
                            <p>Yдалить</p>
                            <img
                                src="@/assets/images/cabinet/cabinetProfile/bucket.png"
                                alt="delete"
                                class="card-top__delete-img w-5 h-5"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </Transition>
</template>

<script setup>
const props = defineProps({
    show: Boolean
})
defineEmits(['close', 'remove'])
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
    z-index: 1000;
}

.modal-container {
    position: relative;
    height: fit-content;
    max-width: 400px;
    margin: auto;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    border-radius: 24px;
    border: 2px solid $blue-primary;
    overflow: hidden;
    width: 100%;
    padding: 24px;
    background: $white;

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
