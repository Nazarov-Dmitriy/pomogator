<template>
    <div class="list-article__container">
        <slot name="header" />
        <div v-if="renderList.length > 0" class="list-article">
            <div v-for="item in renderList" :key="item.id" class="card">
                <div class="card-top">
                    <div class="card-top__edit" @click="linkToEdit(item.id)">
                        <img src="@/assets/images/cabinet/cabinetProfile/edit.svg" alt="edit" />
                        <p>редактировать</p>
                    </div>
                    <div class="card-top__delete" @click="removeArticle(item.id)">
                        <p>удалить</p>
                        <img
                            src="@/assets/images/cabinet/cabinetProfile/bucket.png"
                            alt="delete"
                            class="card-top__delete-img"
                        />
                    </div>
                </div>
                <div @click="linkArticle(item.id)">
                    <img
                        v-if="item.file"
                        :src="getUrl(item.file)"
                        alt="img-card"
                        class="card-img"
                    />
                    <VideoComponent v-if="item.video" :src="item?.video" :preview="true" />
                    <div class="card-body">
                        <div class="card-contnent">
                            <div class="card-hashtags">
                                <p v-for="tag in item.tags" :key="tag" class="card-hashtag">
                                    #{{ getTag(tag) }}
                                </p>
                            </div>
                            <p class="card__title">
                                {{ item.title }}
                            </p>
                        </div>
                        <div class="card-footer">
                            <div class="card-btns">
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
                            <div class="card-date">
                                <span class="card-date__text">Дата публикации</span>
                                {{ item.createdAt }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <h2 class="no-result">Материалы отсутствуют</h2>
        </div>
        <OfferMaterial />
        <PaginationComponent :perpage="8" :data="props.data" @set-list="getRenderList" />
        <Teleport to="body">
            <ModalComponent :show="modalShow" @close="modalShow = false" />
        </Teleport>
    </div>
</template>
<script setup>
import OfferMaterial from '@/components/cabinet/CabinetOfferMaterial.vue'
import PaginationComponent from '../pagination/PaginationComponent.vue'
import ModalComponent from '../modal/ModalComponentMaterials.vue'
import { useRouter } from 'vue-router'
import { computed, ref, watch } from 'vue'
import { defineProps } from 'vue'
import VideoComponent from '../video/VideoComponent.vue'
import { useNewsStore } from '@/stores/newsStore'

const modalShow = ref(false)

const props = defineProps({
    data: {
        type: Array,
        default: () => []
    }
})

const emit = defineEmits(['remove-article'])

const router = useRouter()
const newsStore = useNewsStore()

const renderList = ref([])

function getUrl(url) {
    return import.meta.env.VITE_SERVER_URL + url
}

const getTags = computed(() => {
    return newsStore.getTags
})

function getTag(tag) {
    return getTags.value.filter((el) => el.id === tag)[0]?.name
}

function getRenderList(list) {
    renderList.value = list
}

function linkArticle(id) {
    router.push(`/blog/article/${id}`)
}

function linkToEdit(id) {
    router.push(`/article/edit/${id}`)
}

async function removeArticle(id) {
    let res = await newsStore.removeArticle(id)

    if (res) {
        emit('remove-article')
    }
}

watch(
    () => props.data,
    () => {}
)
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

.card-top {
    display: flex;
    justify-content: space-between;
    padding: 16px;
}

.card-top__edit,
.card-top__delete {
    display: flex;
    gap: 16px;
    align-items: center;

    p {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
    }
}

.card-top__edit {
    justify-content: flex-start;

    p {
        color: $blue-primary;
    }
}

.card-top__delete {
    justify-content: flex-end;

    p {
        color: $primary-red;
    }
}

.card-top__delete-img {
    width: 24px;
    height: 24px;
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
