<template>
    <div class="list-article__container">
        <slot name="header" />
        <div v-if="renderList.length > 0" class="list-article" :class="props.customArticle">
            <div
                v-for="item in renderList"
                :key="item.id"
                class="card"
                @click="linkArticle(item.id)"
            >
                <template v-if="!imageErrors[item.id]">
                    <img
                        v-if="item.file"
                        :src="getUrl(item.file)"
                        alt="img-card"
                        class="card-img"
                        @error="imageError(item.id)"
                    />
                    <img
                        v-else-if="item.preview_img"
                        :src="getUrl(item.preview_img)"
                        alt="img-card"
                        class="card-img"
                        @error="imageError(item.id)"
                    />
                </template>
                <img
                    v-else
                    src="/public/image/plug.png"
                    alt="fallback"
                    class="aspect-[3/1] object-cover w-full"
                />

                <VideoComponent
                    v-if="item.video && !item.preview_img"
                    :src="item?.video"
                    :preview="true"
                />
                <div class="card-body">
                    <div v-if="getTags.length > 0" class="card-contnent">
                        <div class="card-hashtags" :class="props.customClass[2]">
                            <p v-for="tag in item.tags" :key="tag" class="card-hashtag">
                                #{{ getTag(tag) }}
                            </p>
                        </div>
                        <p class="card__title">
                            {{ item.title }}
                        </p>
                    </div>
                    <div class="card-footer">
                        <div class="card-btns" :class="props.customBtn">
                            <div class="card-btn show">
                                <img
                                    src="@/assets/icons/article/like.svg"
                                    alt="like"
                                    class="card-btn__img"
                                />
                                <p class="card-btn__count">
                                    {{ item.likes }}
                                </p>
                            </div>
                            <div class="card-btn">
                                <img
                                    src="@/assets/icons/article/show.svg"
                                    alt="show"
                                    class="card-btn__img"
                                />
                                <p class="card-btn__count">
                                    {{ item.shows }}
                                </p>
                            </div>
                        </div>
                        <div class="card-date" :class="props.customDate">
                            <span class="card-date__text">Дата публикации</span>
                            {{ item.createdAt }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <h2 class="no-result">По запросу {{ search }} ничего не найдено.</h2>
        </div>

        <OfferMaterial v-if="props.isOfferVisible" />
        <PaginationComponent :perpage="12" :data="props.data" @set-list="getRenderList" />
    </div>
</template>
<script setup>
import OfferMaterial from '@/components/article/OfferMaterial.vue'
import PaginationComponent from '../pagination/PaginationComponent.vue'
import { useNewsStore } from '@/stores/newsStore'
import { useRoute, useRouter } from 'vue-router'
import { computed, ref } from 'vue'
import VideoComponent from '../video/VideoComponent.vue'

const props = defineProps({
    data: {
        type: Array,
        default: () => []
    },
    search: {
        type: String,
        default: ''
    },
    isOfferVisible: {
        type: Boolean,
        default: true
    },
    customClass: {
        type: Array,
        default: () => []
    },
    customDate: {
        type: String,
        default: null
    },
    customBtn: {
        type: String,
        default: null
    },
    customArticle: {
        type: String,
        default: null
    },
    webinar: {
        type: Boolean,
        default: false
    }
})

const newsStore = useNewsStore()
const route = useRoute()
const router = useRouter()

const getTags = computed(() => {
    return newsStore.getTags
})

const renderList = ref([])

const imageErrors = ref({})

function getUrl(url) {
    return import.meta.env.VITE_SERVER_URL + url
}

function getRenderList(list) {
    renderList.value = list
}

function getTag(tag) {
    return getTags.value.find((el) => el.id === tag)?.name || ''
}

function linkArticle(id) {
    if (props.webinar) {
        router.push(`/webinar/${id}`)
        return
    }

    if (route.name === 'trend-page') {
        router.push(`/trend/${route.params.name}/${id}`)
    } else if (route.name === 'blog-page') {
        router.push(`blog/article/${id}`)
    } else {
        router.push(`/blog/article/${id}`)
    }
}

function imageError(id) {
    imageErrors.value = { ...imageErrors.value, [id]: true }
}
</script>

<style lang="scss">
.list-article__container {
    display: flex;
    flex-direction: column;
    gap: 32px;

    .no-result {
        font-size: 24px;
        line-height: 32px;
        font-weight: 500;
        color: $black;
    }
}

.list-article {
    display: grid;
    grid-template-columns: 1fr 1fr;
    box-sizing: border-box;
    gap: 24px 16px;

    @media (max-width: $md) {
        grid-template-columns: 1fr;
    }
}

.card {
    border-radius: 32px;
    box-sizing: border-box;
    border: 2px solid $blue;
    overflow: hidden;
    cursor: pointer;
    display: flex;
    flex-direction: column;

    &:hover {
        border: 2px solid $blue-primary;

        .card__title {
            color: $blue-primary;
        }

        .card-btn__count {
            color: $blue-primary;
        }

        .card-date {
            color: $blue-primary;
        }

        .card-hashtag {
            color: $blue-primary;
        }
    }
}

.card-img {
    width: 100%;
    aspect-ratio: 2.9 / 1;
    object-fit: cover;
}

.card-body {
    padding: 16px;
    display: flex;
    gap: 20px;
    flex-direction: column;
    flex-grow: 1;
}

.card-contnent {
    flex: 1 1 100%;
    display: flex;
    flex-direction: column;
    gap: 7px;
}

.card-hashtags {
    display: flex;
    justify-content: flex-end;
    gap: 40px;
}

.card-hashtag {
    font-size: 16px;
    line-height: 24px;
    color: $blue;
}

.card__title {
    flex: 1 1 100%;
    font-size: 24px;
    line-height: 32px;
    font-weight: 500;
    color: $black;

    @media (max-width: $lg) {
        font-size: 20px;
        line-height: 24px;
    }
}

.card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
}

.card-btns {
    display: flex;
    gap: 40px;
    align-items: center;
}

.card-btn {
    display: flex;
    gap: 10px;
    align-items: center;
}

.card-btn__img {
    width: 24px;
    height: 24px;
}

.card-btn__count {
    font-size: 16px;
    line-height: 24px;
    color: $blue;
}

.card-date {
    font-size: 16px;
    line-height: 24px;
    color: $blue;
}

.card-date__text {
    @media (max-width: $xl) {
        display: none;
    }
}
</style>
