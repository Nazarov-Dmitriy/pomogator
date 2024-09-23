<template>
    <div class="my-data__wrapper">
        <p class="my-data__text">
            Мои
        </p>
        <DropdownComponent
            :options="options"
            placeholder="данные"
            @select="handleSelect"
        />
    </div>
</template>

<script setup>
import DropdownComponent from '@/components/dropdown/DropdownComponent.vue'
import { ref } from 'vue'

const options = ref([
    { id: 1, name: 'данные' },
    { id: 2, name: 'материалы' },
    { id: 3, name: 'сертификаты' },
    { id: 4, name: 'избранные материалы' }
])

const selectedOption = ref(null)

const emit = defineEmits(['select'])

function handleSelect (option) {
    selectedOption.value = option.name  
    emit('select', selectedOption.value) 
}
</script>


<style lang="scss" scoped>
.my-data__wrapper {
    border-bottom: 2px solid #5b94ea;
    padding: 60px 80px;
    display: flex;
    gap: 16px;

    :deep(.dashboard__dropdown-wrapper) {
        border: none;
        height: auto;
        padding: 0;
    }
    :deep(.dropdown-selected-text) {
        font-family: var(--third-family);
        font-weight: 600;
        font-size: 48px;
        line-height: 56px;
        color: #4360f8;
        transition: border-bottom 0.1s;
        height: 56px;

        &:hover {
            border-bottom: 2px solid #4360f8;
        }
    }

    :deep(.dropdown-icon) {
        right: -17px;
    }
    :deep(.option-wrapper) {
        border-radius: 32px;
        padding: 0px 24px;
        box-sizing: border-box;
        background: linear-gradient(165deg, #daebff 0%, #edf5ff 100%);
        width: auto;
        top: 10px;
    }

    :deep(.option) {
        font-family: var(--third-family);
        font-weight: 600;
        font-size: 48px;
        line-height: 56px;
        color: #5b94ea;
        padding: 0;
        border: none;

        &:not(:last-child) {
            border-bottom: 1px solid #4360f8;
        }
    }
}
.my-data__text {
    font-family: var(--third-family);
    font-weight: 600;
    font-size: 48px;
    line-height: 56px;
    color: #060c1f;
}
</style>
