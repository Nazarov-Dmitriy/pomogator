<template>
    <section class="reviews">
        <div class="reviews__container">
            <h2 class="reviews__title">Отзывы</h2>
            <div class="reviews__cards">
                <div v-for="card in getReviewsList" :key="card.id" class="reviews__card">
                    <div class="reviews__card-header">
                        <div class="reviews__card-header-person">
                            <div class="reviews__card-header-person-img-wrapper">
                                <img :src="getPath(card.filePath)" alt="img" />
                            </div>
                            <div class="reviews__header-info">
                                <p class="reviews__header-person-text">
                                    {{ card.author }}
                                </p>
                                <div class="reviews__card-header-date">
                                    <span>{{ card.date }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="reviews__card-footer">
                        <p class="reviews__card-footer-text">
                            {{ card.description }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Teleport to="body">
        <Loader v-if="!isLoad" />
    </Teleport>
</template>

<script setup>
import { useReviewsStore } from '@/stores/reviewsStore'
import Loader from '@/components/loader/Loader.vue'

import { computed, onMounted, ref, watch } from 'vue'
const isLoad = ref(false)

const reviewsStore = useReviewsStore()

const getReviewsList = computed(() => {
    return reviewsStore.getReviewsList
})

onMounted(() => {
    reviewsStore.getListDb()
})

function getPath(path) {
    return import.meta.env.VITE_SERVER_URL + path
}

watch(getReviewsList, () => {
    isLoad.value = true
})
</script>

<style scoped lang="scss">
.reviews {
    padding: 60px 80px;
    box-sizing: border-box;
    @media (max-width: $lg) {
        padding: 40px;
    }

    @media (max-width: $sm) {
        padding: 32px 16px;
    }
}
.reviews__container {
    display: flex;
    flex-direction: column;
    gap: 32px;
}
.reviews__title {
    font-weight: 600;
    font-size: 36px;
    line-height: 42px;
    color: $blue-primary;
    font-family: 'Kreadon-Demi';
}
.reviews__cards {
    display: grid;
    grid-template-columns: repeat(3, 33%);
    gap: 16px;
    @media (max-width: $xl) {
        grid-template-columns: repeat(2, 50%);
    }
    @media (max-width: $lg) {
        grid-template-columns: 100%;
    }
}
.reviews__card {
    border: 2px solid $blue;
    border-radius: 60px 60px 32px 32px;
}
.reviews__card-header {
    display: flex;
    justify-content: space-between;
    border-radius: 1000px;
    padding: 2px 32px 2px 2px;
    background: $blue;
    box-sizing: border-box;
}
.reviews__card-header-person {
    display: flex;
    gap: 16px;
    align-items: center;
    justify-content: flex-start;
    @media (max-width: $lg) {
        gap: 8px;
    }
}
.reviews__header-info {
    display: flex;
    flex-direction: column;
    gap: 8px;

    @media (max-width: $lg) {
        flex-direction: row;
    }
}
.reviews__card-header-person-info {
    display: flex;
    gap: 16px;
}

.reviews__card-header-person-img-wrapper {
    width: 100px;
    height: 100px;
    border-radius: 100%;
    overflow: hidden;

    & img {
        width: 100%;
        height: 100%;
    }
}

.reviews__header-person-text {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: $white;
    @media (max-width: $lg) {
        font-size: 20px;
        line-height: 1.2;
    }
    @media (max-width: $sm) {
        padding-top: 20px;
    }
    span {
        display: block;
    }
}
.reviews__card-header-date {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: $white;
    @media (max-width: $lg) {
        font-size: 14px;
        line-height: 1.4;
    }
    @media (max-width: $sm) {
    }
}
.reviews__card-header-date span:nth-child(1) {
    @media (max-width: $sm) {
        display: none;
    }
}
.reviews__card-header-date span:nth-child(2) {
    display: none;
    @media (max-width: $sm) {
        display: flex;
        transform: translate(-30px, 10px);
    }
}
.reviews__card-footer-text {
    padding: 16px;
    @media (max-width: $sm) {
        font-size: 14px;
        line-height: 20px;
    }
}
</style>
