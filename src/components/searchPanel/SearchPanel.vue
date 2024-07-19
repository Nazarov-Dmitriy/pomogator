<template>
    <div class="search-panel">
        <div class="search-panel__container">
            <div
                v-if="showSearchPanel"
                class="search-panel__input-wraper"
            >
                <input
                    :value="modelValue"
                    type="text"
                    class="search-panel__input"
                    placeholder="Поиск"
                    @input="$emit('update:modelValue', $event.target.value)"
                    @keypress.enter="$emit('search')"
                >
            </div>
            <div class="search-panel__block">
                <button
                    class="search-panel__btn"
                    @click="showSearch()"
                    @mouseover=" showSearch()"
                >
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="search-panel__btn-icon"
                    >
                        <g clip-path="url(#clip0_3001_4986)">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M24.0008 9.6C24.0008 14.9019 19.7027 19.2 14.4008 19.2C9.09885 19.2 4.80078 14.9019 4.80078 9.6C4.80078 4.29807 9.09885 0 14.4008 0C19.7027 0 24.0008 4.29807 24.0008 9.6ZM15.1178 3.5366C14.548 3.47987 13.9727 3.55039 13.4335 3.74306C12.8943 3.93573 12.4046 4.24574 11.9998 4.65071C11.6093 5.04131 11.6095 5.67448 12.0001 6.06493C12.3907 6.45537 13.0238 6.45525 13.4143 6.06465C13.6097 5.86913 13.8461 5.71946 14.1065 5.62644C14.3668 5.53342 14.6446 5.49937 14.9196 5.52676C15.1947 5.55415 15.4603 5.6423 15.6972 5.78482C15.9341 5.92735 16.1363 6.1207 16.2894 6.35092C16.5952 6.81084 17.2159 6.93581 17.6758 6.63004C18.1357 6.32428 18.2607 5.70357 17.9549 5.24365C17.6379 4.76681 17.2189 4.36632 16.7283 4.07111C16.2377 3.7759 15.6876 3.59334 15.1178 3.5366Z"
                                fill="#5B94EA"
                            />
                            <path
                                d="M3 22.0338L9 16.0332"
                                stroke="#5B94EA"
                                stroke-width="3"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_3001_4986">
                                <rect
                                    width="24"
                                    height="24"
                                    fill="white"
                                />
                            </clipPath>
                        </defs>
                    </svg>
                </button>
                <div class="search-panel__hashtag">
                    <div
                        v-for="(item, ind) in hashtagData"
                        :key="item.id"
                        class="search-panel__item"
                        :class="{ 'active': activeTags.includes(ind + 1) }"
                        @click="setActiveTags(ind + 1)"
                    >
                        <span class="search-panel__symbol">#</span>
                        <p class="search-panel__text">
                            {{ item.name }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { computed, onMounted, ref } from 'vue';

defineProps({
    modelValue:{ 
        type:String,
        default: '',
    }
})

const emit =defineEmits(['update:modelValue', 'search'])

const searchActive = ref(false);
const activeTags = ref([])

const showSearchPanel = computed(() => {
    return searchActive.value
})

onMounted(() => {
    window.addEventListener("resize", resizeHandler);
})

function resizeHandler () {
    window.innerWidth < 576 ? searchActive.value = true : searchActive.value = false
}

function setActiveTags (id) {
    if (!activeTags.value.includes(id)) {
        activeTags.value.push(id)
    }
}

function showSearch (){
    searchActive.value =true
    emit('update:modelValue', '')
}

const hashtagData = ref([
    {
        id: 1,
        name: 'Химия',
    },
    {
        id: 2,
        name: 'Физика',
    },
    {
        id: 3,
        name: 'Биология',
    },
    {
        id: 4,
        name: 'Робототехника',
    },
    {
        id: 5,
        name: 'Мастер-класс',
    },
    {
        id: 6,
        name: 'Практика',
    },
    {
        id: 7,
        name: 'Видео',
    },
    {
        id: 8,
        name: 'Статья',
    },
])
</script>
<style lang="scss">
.search-panel__container {
    padding: 21px 0;
    border-bottom: 2px solid $blue-primary;
    display: flex;
    gap: 24px;
    flex-wrap: wrap;

    @media (max-width: $sm) {
        padding: 0 16px;
        border-bottom: none;
        gap: 16px;
    }
}

.search-panel__input-wraper {
    width: 100%;
    // background:red
}

.search-panel__input {
    box-sizing: border-box;
    background-image: url('@/assets/icons/header/search.svg');
    background-repeat: no-repeat;
    background-position: right 16px top 6px;
    padding: 8px 56px 8px 16px;
    border: 2px solid $blue;
    border-radius: 32px;
    background-size: 24px;
    color: $blue;
    width: 100%;
    font-size: 16px;
    height: 40px;

    &::placeholder {
        color: $blue;
    }

    &:hover,
    &:active,
    &:focus {
        background-image: url('@/assets/icons/header/search-hover.svg');
        background-repeat: no-repeat;
        background-position: right 16px top 6px;
        border: 2px solid $blue-primary;
        color: $blue-primary;   

        &::placeholder {
            color: $blue-primary;
        }
    }

    @media (max-width: $lg) {
        max-width: 100%;
    }

    @media (max-width: $sm) {
        flex: 1 0 65%
    }
}

.search-panel__block {
    display: flex;
    align-items: flex-start;
    flex: 1 1 100%;
}

.search-panel__btn {
    border: none;
    padding: 8px 16px;
    background: none;
    box-sizing: border-box;
    outline: none;
    height: 40px;

    @media (max-width: $sm) {
        display: none;
    }
}

.search-panel__btn-icon {
    width: 24px;
    height: 24px;
}

.search-panel__hashtag {
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    flex: 1 1 100%;
    margin-top: 5px;
    gap: 24px;

    @media (max-width: $lg) {
        gap: 16px;
    }

    @media (max-width: $sm) {
        justify-content: flex-start;
    }
}

.search-panel__item {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;

    &.active{
        .search-panel__symbol {
            color: transparent;
            -webkit-text-fill-color: transparent;
        }

        .search-panel__text {
            color: $blue-primary;
        }
    }

    &:hover {
        .search-panel__symbol {
            color: $blue-primary;
            -webkit-text-fill-color: unset;
        }

        .search-panel__text {
            color: $blue-primary;
        }
    }

    
    &.active:hover {
        .search-panel__symbol {
            color: transparent;
            -webkit-text-fill-color: transparent;
        }
    }

    &:active {
        .search-panel__symbol {
            color: transparent;
            -webkit-text-fill-color: transparent;
        }

        .search-panel__text {
            color: $blue-primary;
        }
    }
}

.search-panel__symbol {
    font-family: "Kreadon-Demi";
    font-size: 30px;
    line-height: 30px;
    background: $gradient;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
}

.search-panel__text {
    font-size: 16px;
    line-height: 24px;
    color: $black;

    @media (max-width: $lg) {
        font-size: 14px;
        line-height: 20px;
    }
}
</style>