<template>
    <div class="my-data__wrapper" :class="{ 'active-favorite': isFavoriteComponent }">
        <DropdownComponent
            v-model:modelValue="selectedOption"
            :options="options"
            contnent-class="flex gap-2 items-center"
            @select="handleSelect"
        />
    </div>
</template>

<script setup>
import DropdownComponent from '@/components/dropdown/DropdownComponent.vue'
import { useUserStore } from '@/stores/userStore'
import { computed, onMounted, ref, watch } from 'vue'

const props = defineProps({
    defaultSelect: {
        type: String,
        default: null
    }
})

const optionsAdmin = [
    { id: 1, name: 'Отзывы', value: 'reviews' },
    { id: 2, name: 'Пользователи', value: 'users' },
    { id: 3, name: 'Статьи', value: 'article' },
    { id: 4, name: 'Вебинары', value: 'webinar' }
]
const optionsModerator = [
    { id: 1, name: 'Отзывы', value: 'reviews' },
    { id: 2, name: 'Статьи', value: 'article' },
    { id: 3, name: 'Вебинары', value: 'webinar' }
]

const userStore = useUserStore()

const getUser = computed(() => {
    return userStore.getUser
})

const options = ref([])

const selectedOption = ref(null)

const emit = defineEmits(['select'])

function handleSelect(option) {
    selectedOption.value = option.id
    emit('select', option.value)
}

onMounted(() => {
    if (getUser.value) {
        getUser.value.role === 'ROLE_ADMIN'
            ? (options.value = optionsAdmin)
            : (options.value = optionsModerator)
    }

    if (props.defaultSelect) {
        selectedOption.value = props.defaultSelect
        options?.value.forEach((el) => {
            if (el.id === props.defaultSelect) {
                emit('select', el.value)
            }
        })
    }
})

watch(selectedOption, () => {})

watch(
    getUser,
    () => {
        getUser.value.role === 'ROLE_ADMIN'
            ? (options.value = optionsAdmin)
            : (options.value = optionsModerator)
    },
    { deep: true }
)
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
        margin-top: 2px;
        position: unset;
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
            left: 0%;
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
