<template>
    <div v-if="isValidateUrl" class="video-container">
        <VideoWebinarComponent
            :src="props.webinar?.video"
            class-name="video-player"
        ></VideoWebinarComponent>

        <div class="article__btns article__btns--webinar">
            <div class="article__raiting">
                <button class="article__raiting-btn" @click="setLike('add')">
                    <img
                        src="@/assets/icons/article/up.svg"
                        alt="up"
                        class="article__raiting-btn-icon"
                    />
                </button>
                {{ getLikes }}
                <button class="article__raiting-btn" @click="setLike('dis')">
                    <img
                        src="@/assets/icons/article/down.svg"
                        alt="down"
                        class="article__raiting-btn-icon"
                    />
                </button>
            </div>
            <ShareComponent class="article__share" />
            <div
                v-if="props.user"
                class="article__favorites"
                :class="{ active: favorites.active }"
                @click="favoritesChange()"
            >
                <p class="article__favorites-text">
                    {{ favorites.active ? 'Удалить из избранного' : 'Добавить в избранное' }}
                </p>
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <linearGradient id="myGradient" gradientTransform="rotate(45)">
                            <stop offset="20%" stop-color="#F12424" />
                            <stop offset="100%" stop-color="#4360F8" />
                        </linearGradient>
                    </defs>
                    <path
                        d="M5.84912 0.464844C4.74455 0.464844 3.84912 1.36028 3.84912 2.46485V19.1215C3.84912 20.8309 5.85469 21.7524 7.15176 20.6391L10.6973 17.5958C11.4467 16.9526 12.5533 16.9526 13.3027 17.5959L16.8526 20.6434C18.1496 21.7568 20.1553 20.8352 20.1553 19.1258V2.46484C20.1553 1.36027 19.2599 0.464844 18.1553 0.464844H5.84912Z"
                        fill="#5B94EA"
                    />
                </svg>
            </div>
        </div>
        <div
            v-if="webinar.author.id === user?.id && webinar.status !== 'completed'"
            class="flex justify-end"
        >
            <BtnComponent emit-name="action" @action="$emit('setStatus')">
                Завершить вебинар</BtnComponent
            >
        </div>
        <div class="webinar__line-bg" />
    </div>
    <div v-else class="flex flex-col gap-2 video-container__error">
        <p class="error-text kreadon">Ошибка некорректная ссылка на вебинар</p>
        <p class="">
            Связаться с организатором:
            <a class="footer__link" :href="`mailto:${webinar?.author?.email}`">{{
                webinar?.author?.email
            }}</a>
        </p>
    </div>
</template>

<script setup>
import { ref, computed, reactive, watch } from 'vue'
import ShareComponent from '../article/ShareComponent.vue'
import VideoWebinarComponent from '../video/VideoWebinarComponent.vue'
import { useWebinarStore } from '@/stores/webinarStore'
import BtnComponent from '../btns/BtnComponent.vue'

const props = defineProps({
    webinar: {
        type: Object,
        default: () => {}
    },
    user: {
        type: Object,
        default: () => {}
    },
    isFavorite: {
        type: Boolean
    }
})

const webinarStore = useWebinarStore()
const activeLike = ref(false)

defineEmits(['setStatus'])

const isValidateUrl = computed(() => {
    try {
        return !!new URL(props.webinar?.video)
    } catch (_) {
        return false
    }
})

const getLikes = computed(() => {
    if (!activeLike.value) {
        return props.webinar?.likes
    } else if (activeLike.value === 'add') {
        return props.webinar?.likes + 1
    } else {
        if (props.webinar?.likes - 1 > 0) {
            return props.webinar?.likes - 1
        } else {
            return 0
        }
    }
})

const favorites = reactive({
    active: props.isFavorite ? props.isFavorite : false,
    disabled: false
})

function setLike(param) {
    if (param === 'add') {
        if (activeLike.value !== 'add') {
            let count

            if (props.webinar?.likes === 0) {
                count = 1
            } else {
                count = activeLike.value === 'add' ? 2 : 1
            }

            webinarStore.setLike({
                id: props.webinar.id,
                like: count
            })
        }
        activeLike.value = 'add'
    } else {
        if (activeLike.value !== 'dis') {
            webinarStore.setLike({
                id: props.webinar.id,
                dislike: activeLike.value ? 2 : 1
            })
        }
        activeLike.value = 'dis'
    }
}

async function favoritesChange() {
    if (favorites.disabled) {
        return
    }
    favorites.disabled = true
    let params = { webinar_id: props.webinar?.id, user_id: props.user?.id }

    if (favorites.active) {
        let res = await webinarStore.removeFaforite(params)
        if (res) {
            favorites.active = false
            favorites.disabled = false
        }
        res ? (favorites.active = false) : null
    } else {
        let res = await webinarStore.addFaforite(params)
        if (res) {
            favorites.active = true
            favorites.disabled = false
        }
    }
}

watch(
    () => props.user,
    () => {},
    { deep: true }
)

watch(
    () => props.isFavorite,
    (newVal) => {
        favorites.active = newVal
    }
)
</script>

<style lang="scss" scoped>
.video-container {
    padding: 40px 80px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 40px;

    @media (max-width: $lg) {
        padding: 40px;
    }
    @media (max-width: $sm) {
        padding: 40px 16px 32px 16px;
    }

    &__error {
        padding: 16px 80px;

        @media (max-width: $lg) {
            padding: 16px 40px;
        }
        @media (max-width: $sm) {
            padding: 16px;
        }
    }
}

.video-wrapper {
    width: 100%;
    padding-bottom: 56.25%;
    height: 0;
    display: none;
}

.video {
    width: 100%;
    height: 100%;
    border-radius: 32px;
    display: none;
}

.img-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 32px;
}

.video-prev-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
    border-radius: 24px;
    position: relative;
}

.img-wrapper::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    font-size: 24px;
    background: rgba(6, 12, 31, 0.75);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 24px;
}

.video-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 4;
    font-family: 'Kreadon-Demi';
    font-weight: 600;
    font-size: 36px;
    line-height: 42px;
    color: $white;
    width: max-content;

    @media (max-width: $lg) {
        font-size: 32px;
        line-height: 1.25;
    }
    @media (max-width: $md) {
        width: auto;
    }
    @media (max-width: $sm) {
        max-width: 256px;
        width: 100%;
        display: flex;
        justify-content: center;
        font-size: 30px;
        line-height: 40px;
    }
}

.webinar__line-bg {
    border: 1px solid $blue;
    width: 100%;
    height: 1px;
}
</style>
