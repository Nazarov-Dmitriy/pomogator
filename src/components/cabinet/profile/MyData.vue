<template>
    <div class="my-data__wrapper" :class="{ 'active-favorite': isFavoriteComponent }">
        <p class="my-data__text">Мои</p>
        <DropdownComponent :options="options" placeholder="данные" @select="handleSelect" />
    </div>
</template>

<script setup>
import DropdownComponent from '@/components/dropdown/DropdownComponent.vue'
import { onMounted, ref, watch } from 'vue'

const options = ref([
    { id: 1, name: 'данные' },
    { id: 2, name: 'материалы' },
    { id: 3, name: 'сертификаты' },
    { id: 4, name: 'избранные материалы' }
])

const selectedOption = ref(null)
const isFavoriteComponent = ref(false)

const emit = defineEmits(['select'])

function handleSelect(option) {
    selectedOption.value = option.name
    emit('select', selectedOption.value)

    isFavoriteComponent.value = selectedOption.value === 'избранные материалы'
}

watch(selectedOption, (newValue) => {
    if (newValue === 'сертификаты') {
        console.log('Компонент сертификатов активен')
    }
})

onMounted(() => {
    if (selectedOption.value === 'сертификаты') {
        isFavoriteComponent.value = true
        console.log('Сертификаты выбраны по умолчанию')
    }
})
</script>

<style lang="scss" scoped>
.my-data__wrapper {
    border-bottom: 2px solid #5b94ea;
    padding: 60px 80px;
    display: flex;
    gap: 16px;

    @media (max-width: $lg) {
        padding: 40px;
    }
    @media (max-width: $sm) {
        padding: 32px 16px;
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
        font-size: 48px;
        line-height: 56px;
        color: #4360f8;
        transition: border-bottom 0.1s;
        height: 56px;

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
        right: -17px;
        top: 47%;
    }
    :deep(.option-wrapper) {
        border-radius: 32px;
        padding: 0px 24px;
        box-sizing: border-box;
        background: linear-gradient(165deg, #daebff 0%, #edf5ff 100%);
        width: max-content;
        top: 0;

        @media (max-width: $sm) {
            width: auto;
            left: 50%;
            transform: translate(-50%, 0);
        }
    }

    :deep(.dashboard__dropdown-wrapper) {
        width: 100%;
    }
    :deep(.option) {
        font-family: 'Kreadon-Demi';
        font-weight: 600;
        font-size: 48px;
        line-height: 56px;
        color: #5b94ea;
        padding: 0;
        border: none;
        padding: 10px 0;

        &:not(:last-child) {
            border-bottom: 1px solid #4360f8;
        }
        @media (max-width: $lg) {
            font-size: 36px;
            line-height: 40px;
        }
        @media (max-width: $sm) {
            font-size: 30px;
            line-height: 40px;
        }
    }

    :deep(.option:first-child) {
        position: relative;
        padding-right: 40px;

        &::after {
            content: '';
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-50%) rotate(180deg);
            width: 24px;
            height: 24px;
            background-image: url('/src/assets/icons/appearance.svg');
            background-size: cover;
            background-position: center;
        }
    }
}

.my-data__wrapper.active-favorite {
    :deep(.dropdown-selected-text) {
        @media (max-width: $sm) {
            -webkit-line-clamp: 3;
            text-align: center;
        }
    }
    :deep(.dropdown-icon) {
        right: 30px;
    }
}
.my-data__text {
    font-family: 'Kreadon-Demi';
    font-weight: 600;
    font-size: 48px;
    line-height: 56px;
    color: #060c1f;

    @media (max-width: $sm) {
        font-size: 30px;
        line-height: 40px;
    }
}
</style>
