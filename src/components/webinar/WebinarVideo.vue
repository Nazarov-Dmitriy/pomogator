<template>
    <div class="video-container">
        <div class="video-wrapper">
            <iframe
                class="video"
                src="https://www.youtube.com/embed/pFKwmEdwZZQ?autoplay=1&mute=1&loop=1&playlist=pFKwmEdwZZQ"
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen
            />
        </div>
        <div class="img-wrapper">
            <img
                class="video-prev-img"
                src="/image/webinar/currentWebinar/video-bg.png"
                alt="Custom Overlay Image"
            />
            <p class="video-text">Вебинар начнется 1 августа в 16:00 (МСК)</p>
        </div>
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
            <ShareComponent :article="article" class="article__share" />
            <div
                class="article__favorites"
                :class="{ active: favorites }"
                @click="favorites = !favorites"
            >
                <p class="article__favorites-text">Добавить в избранное</p>
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
        <div class="webinar__line-bg" />
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useNewsStore } from '@/stores/newsStore'
import ShareComponent from '../article/ShareComponent.vue'

const newsStore = useNewsStore()
const activeLike = ref(false)

const props = defineProps({
    article: {
        type: Object,
        default: () => {}
    },
    otherAtricle: {
        type: Object,
        default: () => {}
    },
    page: {
        type: String,
        default: ''
    }
})

const getLikes = computed(() => {
    if (!activeLike.value) {
        return props.article?.likes
    } else if (activeLike.value === 'add') {
        return props.article?.likes + 1
    } else {
        if (props.article?.likes - 1 > 0) {
            return props.article?.likes - 1
        } else {
            return 0
        }
    }
})
function setLike(param) {
    if (param === 'add') {
        if (activeLike.value !== 'add') {
            let count

            if (props.article?.likes === 0) {
                count = 1
            } else {
                count = activeLike.value === 'add' ? 2 : 1
            }

            newsStore.setLike({
                id: props.article.id,
                like: count
            })
        }
        activeLike.value = 'add'
    } else {
        if (activeLike.value !== 'dis') {
            newsStore.setLike({
                id: props.article.id,
                dislike: activeLike.value ? 2 : 1
            })
        }
        activeLike.value = 'dis'
    }
}
</script>

<style lang="scss" scoped>
.video-container {
    padding: 60px 80px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 40px;

    @media (max-width: $lg) {
        padding: 60px 40px 40px 40px;
    }
    @media (max-width: $sm) {
        padding: 0 16px 32px 16px;
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
