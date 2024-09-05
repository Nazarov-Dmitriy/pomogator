<template>
    <div class="cabinet-list-article__container">
        <slot name="header" />
        <div
            v-if="renderList.length > 0"
            class="cabinet-list-article"
        >
            <div
                v-for="item in renderList"
                :key="item.id"
                class="cabinet-card"
            >
                <div class="card-top">
                    <div 
                        class="card-top__edit"
                        @click="modalShow = true"
                    >
                        <img
                            src="@/assets/images/cabinet/cabinetProfile/edit.svg"
                            alt="edit"
                        >
                        <p>
                            редактировать
                        </p>
                    </div>
                    <div 
                        class="card-top__delete"
                        @click="deleteElement (item.id)"
                    >
                        <p>
                            удалить
                        </p>
                        <img
                            src="@/assets/images/cabinet/cabinetProfile/bucket.png"
                            alt="delete"
                            class="card-top__delete-img"
                        >
                    </div>
                </div>
                <div
                    @click="linkArticle(item.id)"
                >
                    <img
                        :src="getUrl(item.img)"
                        alt="img-card"
                        class="cabinet-card-img"
                    >
                    <div class="cabinet-card-body">
                        <div class="cabinet-card-contnent">
                            <div class="cabinet-card-hashtags">
                                <p
                                    v-for="hashtag in item.tags"
                                    :key="hashtag"
                                    class="cabinet-card-hashtag"
                                >
                                    #{{ hashtag }}
                                </p>
                            </div>
                            <p class="cabinet-card__title">
                                {{ item.title }}
                            </p>
                        </div>
                        <div class="cabinet-card-footer">
                            <div class="cabinet-card-btns">
                                <div class="card-btn show">
                                    <img
                                        src="@/assets/icons/article/like.svg"
                                        alt="like"
                                        class="cabinet-card-btn__img"
                                    >
                                    <p class="cabinet-card-btn__count">
                                        {{ item.like }}
                                    </p>
                                </div>
                                <div class="cabinet-card-btn">
                                    <img
                                        src="@/assets/icons/article/show.svg"
                                        alt="show"
                                        class="cabinet-card-btn__img"
                                    >
                                    <p class="cabinet-card-btn__count">
                                        {{ item.show }}
                                    </p>
                                </div>
                            </div>
                            <div class="cabinet-card-date">
                                <span class="cabinet-card-date__text">Дата публикации</span> {{ item.publication_date }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <h2 class="no-result">
                Материалы отсутствуют
            </h2>
        </div>
        <OfferMaterial />
        <PaginationComponent
            :perpage="8"
            :data="props.data"
            @set-list="getRenderList"
        />
        <Teleport to="body">
            <ModalComponent
                :show="modalShow"
                @close="modalShow = false"
            />
        </Teleport>
    </div>
</template>
<script setup>
import OfferMaterial from '@/components/cabinet/CabinetOfferMaterial.vue'
import PaginationComponent from '../pagination/PaginationComponent.vue';
import ModalComponent from '../modal/ModalComponentMaterials.vue';
import { useRoute, useRouter } from 'vue-router'
import { ref, watch } from 'vue';
import { defineProps} from 'vue';

const modalShow= ref(false)

const props = defineProps({
    data: {
        type: Array,
        default: () => []
    },
    search: {
        type: String,
        default: ''
    },
})

const route = useRoute()
const router = useRouter()

const renderList = ref([])

function getUrl (url) {
    return new URL(url, import.meta.url).href
}

function getRenderList (list) {
    renderList.value = list
}

function deleteElement (id) {
    this.renderList = this.renderList.filter((item) => item.id !== id);
}

function linkArticle (id) {
    if (route.name === 'trend-page') {
        router.push(`/trend/${route.params.name}/${id}`)
    } else if (route.name === 'blog-page') {
        router.push(`blog/article/${id}`)
    } else if (route.name === 'materials') {
        router.push(`/trend/${route.params.name}/${id}`)
    } 
}

watch(() => props.data, () => {
})

</script>
<style lang="scss">
.cabinet-list-article__container {
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

.cabinet-list-article {
    display: grid;
    grid-template-columns: 1fr 1fr;
    box-sizing: border-box;
    gap: 24px 16px;

    @media (max-width: $sm) {
        grid-template-columns: 1fr;
    }
}

.cabinet-card {
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
        @media (max-width: $sm) {
            display: none;
        }
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

.cabinet-card-img {
    width: 100%;
    aspect-ratio: 2.9 / 1;
    object-fit: cover;
}

.cabinet-card-body {
    padding: 16px;
    display: flex;
    gap: 20px;
    flex-direction: column;
    flex-grow: 1;
}

.cabinet-card-contnent {
    flex: 1 1 100%;
    display: flex;
    flex-direction: column;
    gap: 7px;
}

.cabinet-card-hashtags {
    display: flex;
    justify-content: flex-end;
    gap: 40px;
}

.cabinet-card-hashtag {
    font-size: 16px;
    line-height: 24px;
    color: $blue
}

.cabinet-card__title {
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

.cabinet-card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
}

.cabinet-card-btns {
    display: flex;
    gap: 40px;
    align-items: center
}

.cabinet-card-btn {
    display: flex;
    gap: 10px;
    align-items: center
}

.cabinet-card-btn__img {
    width: 24px;
    height: 24px;
}

.cabinet-card-btn__count {
    font-size: 16px;
    line-height: 24px;
    color: $blue
}

.cabinet-card-date {
    font-size: 16px;
    line-height: 24px;
    color: $blue
}

.cabinet-card-date__text {
    @media (max-width: $xl) {
        display: none;
    }
}
</style>