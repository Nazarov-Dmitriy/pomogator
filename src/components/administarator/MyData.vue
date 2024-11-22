<template>
    <div class="my-data__wrapper" :class="{ 'active-favorite': isFavoriteComponent }">
        <DropdownComponent
            :options="options"
            contnent-class="flex gap-2"
            :model-value="selectedOption"
            @select="handleSelect"
        />
    </div>
</template>

<script setup>
import DropdownComponent from '@/components/dropdown/DropdownComponent.vue'
import { onMounted, ref, watch } from 'vue'

const props = defineProps({
    defaultSelect: {
        type: String,
        default: null
    }
})

const options = ref([{ id: 1, name: 'Отзывы', value: 'reviews' }])

const selectedOption = ref(null)

const emit = defineEmits(['select'])

function handleSelect(option) {
    selectedOption.value = option.id
    emit('select', option.value)
}

watch(selectedOption, () => {})

onMounted(() => {
    if (props.defaultSelect) {
        selectedOption.value = props.defaultSelect
        options.value.forEach((el) => {
            if (el.id === props.defaultSelect) {
                emit('select', el.value)
            }
        })
    }
})
</script>

<style lang="scss" scoped>
.my-data__wrapper {
    border-bottom: 2px solid #5b94ea;
    padding: 20px 80px;
    display: flex;
    gap: 16px;

    @media (max-width: $lg) {
        padding: 20px 40px;
    }
    @media (max-width: $sm) {
        padding: 16px;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }

    :deep(.dashboard__dropdown-wrapper) {
        border: none;
        height: auto;
        padding: 0;
    }
    :deep(.dropdown-selected-text) {
        font-family: 'Kreadon-Demi';
        font-weight: 600;
        font-size: 24px;
        line-height: 36px;
        color: #4360f8;
        transition: border-bottom 0.1s;
        height: 36px;

        @media (max-width: $sm) {
            font-size: 30px;
            line-height: 40px;
            min-width: auto;
            height: auto;
        }

        &:hover {
            border-bottom: 2px solid #4360f8;
        }
    }

    :deep(.dropdown-icon) {
        margin-top: -6px;
    }
    :deep(.option-wrapper) {
        border-radius: 16px;
        padding: 0px 12px;
        min-width: 200px;
        box-sizing: border-box;
        background: linear-gradient(165deg, #daebff 0%, #edf5ff 100%);
        width: max-content;
        top: 40px;

        @media (max-width: $sm) {
            width: auto;
            left: 50%;
            transform: translate(-50%, 0);
        }
    }

    :deep(.option) {
        font-family: 'Kreadon-Demi';
        font-weight: 600;
        font-size: 20px;
        line-height: 30px;
        color: #5b94ea;
        padding: 0;
        border: none;
        padding: 10px 0;

        &:not(:last-child) {
            border-bottom: 1px solid #4360f8;
        }
    }
}
</style>
