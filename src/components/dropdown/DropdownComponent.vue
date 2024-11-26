<template>
    <div v-if="!multi" ref="dropDown" class="dashboard__dropdown-wrapper" :class="{ error: error }">
        <div :class="contnentClass" @click="isDropDownVisible = !isDropDownVisible">
            <p :class="['dropdown-selected-text']">
                {{ mappedSelectedOption }}
            </p>
            <img
                class="dropdown-icon"
                src="../../assets/icons/appearence-blue.svg"
                alt="icon-appearance"
                :class="{ active: isDropDownVisible }"
            />
        </div>
        <transition name="slide-fade">
            <div v-if="isDropDownVisible" class="option-wrapper">
                <template v-for="(option, ind) in props.options" :key="ind">
                    <div class="option" @click="toggleOptionSelect(option)">
                        {{ option.name }}
                    </div>
                </template>
            </div>
        </transition>
    </div>

    <div v-else ref="dropDown" class="dashboard__dropdown-wrapper" :class="{ error: error }">
        <div @click="isDropDownVisible = !isDropDownVisible">
            <p :class="['dropdown-selected-text']">
                {{ mappedSelectedOption }}
            </p>
            <img
                class="dropdown-icon"
                src="../../assets/icons/appearence-blue.svg"
                alt="icon-appearance"
                :class="{ active: isDropDownVisible }"
            />
        </div>
        <transition name="slide-fade">
            <div v-if="isDropDownVisible" class="option-wrapper">
                <template v-for="(option, ind) in props.options" :key="ind">
                    <div class="option flex gap-2">
                        <input
                            :id="option.name"
                            v-model="selectedOption"
                            type="checkbox"
                            :value="option.id"
                            :checked="toggleMultiOptionSelect()"
                        />
                        <label :for="option.name"> {{ option.name }}</label>
                    </div>
                </template>
            </div>
        </transition>
    </div>
</template>

<script setup>
import { defineProps, ref, defineEmits, computed, onMounted, onBeforeUnmount, watch } from 'vue'
const dropDown = ref(null)

const props = defineProps({
    options: {
        type: Array,
        default: () => []
    },
    modelValue: {
        type: [Number, Array],
        default: null
    },
    multi: {
        type: Boolean,
        default: false
    },
    placeholder: {
        type: String,
        default: 'Выберите'
    },
    error: {
        type: Boolean,
        default: false
    },
    contnentClass: {
        type: String,
        default: null
    }
})
const emit = defineEmits(['update:modelValue', 'select'])

const selectedOption = ref(null)

const isDropDownVisible = ref(false)

const toggleOptionSelect = (option) => {
    selectedOption.value = option.id
    emit('select', option)
    emit('update:modelValue', option.id)
    setTimeout(() => {
        isDropDownVisible.value = false
    }, 100)
}

const toggleMultiOptionSelect = () => {
    emit('update:modelValue', selectedOption.value)
}

const closeDropDown = (element) => {
    if (!dropDown.value.contains(element.target)) {
        isDropDownVisible.value = false
    }
}

const mappedSelectedOption = computed(() => {
    if (props.multi) {
        let str = ''
        props.options.forEach((el) => {
            if (selectedOption.value?.includes(el.id)) {
                str += el.name + ' '
            }
        })
        return str || props.placeholder
    } else {
        return props.options[selectedOption.value - 1]?.name || props.placeholder
    }
})

onMounted(() => {
    window.addEventListener('click', closeDropDown)
    selectedOption.value = props.modelValue
    if (selectedOption.value) {
        toggleMultiOptionSelect()
    }
})

onBeforeUnmount(() => {
    window.removeEventListener('click', closeDropDown)
})

watch(
    () => props.modelValue,
    () => {
        selectedOption.value = props.modelValue
    }
)
</script>

<style scoped lang="scss">
.dashboard__dropdown-wrapper {
    cursor: pointer;
    position: relative;
    padding: 16px 16px;
    max-width: fit-content;
    border: 2px solid $blue-primary;
    box-sizing: border-box;
    height: 56px;
    background: $white;
    border-radius: 12px;
    width: 100%;
    &.error {
        border-color: $primary-red !important;
    }
}

.dropdown-selected {
    background: $white;
    display: flex;
    align-items: center;
    max-width: fit-content;
    justify-content: space-between;
}

.dropdown-selected-text {
    min-width: 187px;
    color: $black;
    font-size: 16px;
    font-weight: 400;
    outline: none;
    display: block;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}

.option-wrapper {
    position: absolute;
    width: 100%;
    background-color: #fff;
    border: 1px solid $blue-primary;
    top: 50px;
    left: -1px;
    z-index: 10;
}

.option {
    padding: 8px 16px;
    color: var(--dark);
    border: 1px solid $blue-primary;
    border-top: none;
}

.dropdown-icon {
    width: 16px;
    height: 16px;
    position: absolute;
    top: 20px;
    right: 12px;

    &.active {
        transform: rotate(180deg);
    }
}

.option:hover {
    color: $blue-primary;
}

.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateY(-4px);
    opacity: 0;
}
</style>
