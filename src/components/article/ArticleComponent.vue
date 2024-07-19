<template>
    <div class="article">
        <img
            :src="props.article?.img"
            alt="atricle image"
            class="article__img"
        >
        <div class="article-layout">
            <div class="article__container">
                <p
                    class="article__back"
                    @click="router.go(-1)"
                >
                    &#8592; Вернуться в "Содержание"
                </p>
                <div class="article__main">
                    <div class="article__block">
                        <div class="article__header">
                            <div class="article__header-block">
                                <h1 class="article__title">
                                    {{ article.title }}
                                </h1>
                                <div class="article__tags">
                                    <div
                                        v-for="item in article.tags"
                                        :key="item.id"
                                        class="article__tag-item"
                                    >
                                        <span class="article__tag-symbol">#</span>
                                        <p class="article__tag-text">
                                            {{ item }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div
                                v-if="page === 'blog'"
                                class="article__line"
                            />
                            <p class="article__subtitle">
                                Статья посвящена применению информационных технологий в биологии, которые открывают
                                новые горизонты для исследований, диагностики и лечения заболеваний, а также
                                способствуют развитию персонализированной медицины.
                            </p>
                        </div>
                        <div
                            v-if="page === 'trend'"
                            class="article__avtor"
                        >
                            <div class="article__avatar">
                                <img
                                    v-if="article.avtor.avatar"
                                    :src="article.avtor.avatar"
                                    alt="avatar"
                                    class="article__avatar-img"
                                >
                                <img
                                    v-else
                                    src="../../assets/icons/article/avatar.svg"
                                    alt="avatar"
                                    class="article__avatar-img"
                                >
                            </div>
                            <div class="article__avtor-info">
                                <p class="article__avtor-article">
                                    <span class="article__avtor-field">Автор статьи: </span>{{ article.avtor.fullname }}
                                </p>
                                <p class="article__avtor-work">
                                    <span class="article__avtor-field">Место работы: </span>{{ article.avtor.place_work }}
                                </p>
                                <p>
                                    <span class="article__avtor-field">Источник: </span> <a
                                        :href="article.source"
                                        class="article__avtor-link"
                                    >{{ article.source__text }}</a>
                                </p>
                            </div>
                            <p class="article__avtor-publication">
                                Дата публикации {{ article.publication_date }}
                            </p>
                        </div>
                        <div
                            class="article__contnent"
                            v-html="getContnent"
                        />
                        <div class="article__footer">
                            <div class="article__btns">
                                <div class="article__raiting">
                                    <img
                                        src="@/assets/icons/article/up.svg"
                                        alt="up"
                                        class="article__btns-icon"
                                    >
                                    {{ article.show }}
                                    <img
                                        src="@/assets/icons/article/down.svg"
                                        alt="down"
                                        class="article__btns-icon"
                                    >
                                </div>
                                <ShareComponent
                                    :article="article"
                                    class="article__share"
                                />
                                <div
                                    class="article__favorites"
                                    :class="{'active': favorites}"
                                    @click="favorites = !favorites"
                                >
                                    <p class="article__favorites-text">
                                        Добавить в избранное
                                    </p>
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <defs>
                                            <linearGradient
                                                id="myGradient"
                                                gradientTransform="rotate(45)"
                                            >
                                                <stop
                                                    offset="20%"
                                                    stop-color="#F12424"
                                                />
                                                <stop
                                                    offset="100%"
                                                    stop-color="#4360F8"
                                                />
                                            </linearGradient>
                                        </defs>
                                        <path
                                            d="M5.84912 0.464844C4.74455 0.464844 3.84912 1.36028 3.84912 2.46485V19.1215C3.84912 20.8309 5.85469 21.7524 7.15176 20.6391L10.6973 17.5958C11.4467 16.9526 12.5533 16.9526 13.3027 17.5959L16.8526 20.6434C18.1496 21.7568 20.1553 20.8352 20.1553 19.1258V2.46484C20.1553 1.36027 19.2599 0.464844 18.1553 0.464844H5.84912Z"
                                            fill="#5B94EA"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div class="article__download">
                                <p class="article__download-text">
                                    Зарегестрируйтесь, чтобы скачать материал
                                </p>
                                <BtnBackgroud class="article__btn">
                                    Скачать
                                </BtnBackgroud>
                            </div>
                        </div>
                    </div>

                    <div class="article__sidebar">
                        <div class="article__tags">
                            <div
                                v-for="item in article.tags"
                                :key="item.id"
                                class="article__tag-item"
                            >
                                <span class="article__tag-symbol">#</span>
                                <p class="article__tag-text">
                                    {{ item }}
                                </p>
                            </div>
                        </div>
                        <OtherArticle
                            v-if="page === 'trend'"
                            :other-atricle="otherAtricle"
                        />
                        <OtherTrend
                            v-if="page === 'blog'"
                            position="sidebar"
                        />
                    </div>
                </div>
                <img
                    class="article-bg"
                    src="../../assets/icons/article/bg.svg"
                    alt="bg-line"
                >
            </div>
        </div>
    </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
import BtnBackgroud from '../btns/BtnBackgroud.vue';
import OtherArticle from '../article/OtherArticle.vue';
import OtherTrend from '../trend/OtherTrend.vue';

import { computed, ref, watch } from 'vue';
import ShareComponent from './ShareComponent.vue';

const favorites = ref(false)

const router = useRouter()

const props = defineProps({
    article: {
        type: Array,
        default: () => []
    },
    type: {
        type: String,
        default: ''
    },
    otherAtricle: {
        type: Array,
        default: () => []
    },
    page: {
        type: String,
        default: ''
    }
})

const getContnent = computed(() => {
    let content = '';
    if (props.article?.content) {
        props.article?.content.forEach(el => {
            content += el
        });
    }
    return content
})

watch(() => props.data, () => {
})

</script>
<style lang="scss">
.article {
    display: flex;
    flex-direction: column;
}

.article__img {
    width: 100%;
    aspect-ratio: 3 /1;
    object-fit: cover;
}

.article__container {
    display: flex;
    flex-wrap: wrap;
    padding: 15px 80px 60px 80px;
    gap: 21px;

    @media (max-width: $lg) {
        gap: 40px;
        padding: 50px 40px 40px 40px;
    }

    @media (max-width: $sm) {
        gap: 28px;
        padding: 16px 16px 32px 16px;
    }
}

.article__back {
    flex: 1 1 100%;
    font-size: 16px;
    line-height: 24px;
    color: $blue;

    @media (max-width: $lg) {
        font-size: 14px;
        line-height: 20px;
    }
}

.article__main {
    display: flex;
    flex: 1 1 100%;
    gap: 24px;
    justify-content: space-between;
    align-items: flex-start;
    z-index: 1;
}

.article__block {
    flex: 0 1 848px;
    display: flex;
    flex-wrap: wrap;

    @media (max-width: $xl) {
        flex: 0 1 100%;
    }
}

.article__header {
    flex: 1 1 100%;
    display: flex;
    gap: 32px;
    flex-wrap: wrap;

    & .article__tags {
        display: none;

        @media (max-width: $xl) {
            display: flex;
        }
    }

    @media (max-width: $lg) {
        gap: 24px;
    }
}

.article__header-block {
    display: flex;
    gap: 16px;
    justify-content: space-between;
    width: 100%;

    .article__tags {
        flex: none;
    }

    @media (max-width: $sm) {
        flex-direction: column;
    }
}

.article__title {
    flex: 1 1 100%;
    font-family: "Kreadon-Demi";
    font-size: 48px;
    line-height: 56px;
    color: $blue-primary;

    @media (max-width: $lg) {
        font-size: 32px;
        line-height: 40px;
    }
}

.article__subtitle {
    flex: 1 1 100%;
    font-size: 16px;
    line-height: 24px;
    color: $blue-primary;

    @media (max-width: $lg) {
        font-size: 14px;
        line-height: 20px;
    }
}

.article__line {
    height: 1px;
    background: $blue;
    width: 100%;
}


.article__avtor {
    margin-top: 24px;
    border-top: 1px solid $blue;
    border-bottom: 1px solid $blue;
    flex: 1 1 100%;
    display: flex;
    padding: 24px 0;
    justify-content: space-between;
    gap: 16px;
    align-items: flex-start;

    @media (max-width: $md) {
        flex-wrap: wrap;
    }
}

.article__avatar {
    width: 72px;
    height: 72px;
    border-radius: 50%;
    flex-shrink: 0;
}

.article__avatar-img {
    width: 100%;
    height: 100%;
}

.article__avtor-info {
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    flex: 0 1 576px;

    @media (max-width: $xl) {
        flex: 1 1 576px;
    }

    @media (max-width: $md) {
        order: 1;
    }
}

.article__avtor-article {
    color: $black
}

.article__avtor-field {
    color: $blue-primary
}

.article__avtor-work {
    color: $black
}

.article__avtor-link {
    background: $gradient;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
}

.article__avtor-publication {
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    flex: 0 0 136px;
    color: $blue;
    text-align: end;
    font-size: 16px;
    line-height: 24px;

    @media (max-width: $lg) {
        font-size: 14px;
        line-height: 20px;
    }
}

.article__contnent {
    font-size: 20px;
    line-height: 30px;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    margin-top: 40px;
}

.article__contnent p {
    text-indent: 30px;
    text-align: justify;
}

.article__footer {
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
    gap: 80px;

    @media (max-width: $lg) {
        margin-top: 32px;
        display: flex;
        flex-wrap: wrap;
        gap: 40px;
    }
}

.article__btns {
    flex: 1 1 100%;
    display: flex;
    gap: 40px;
    align-items: center;
}

.article__btns-icon {
    width: 24px;
    height: 24px;
    cursor: pointer;
}

.article__raiting {
    display: flex;
    align-items: center;
    gap: 14px;
    font-size: 24px;
    line-height: 32px;
    font-weight: 500;
    color: $black;
}

.article__favorites {
    display: flex;
    gap: 16px;
    align-items: center;
    flex: 0 0 218px;
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    color: $blue;
    cursor: pointer;

    &.active{
        color:$blue;

        & svg path{
            fill: url(#myGradient);
        }
    }

    @media (max-width: $sm) {
        flex: 0 0 auto;
    }

    &:hover{
        color:$blue-primary;

        & svg path{
            fill: $blue-primary;
        }
    }

    &:active{
        color:$blue;

        & svg path{
            fill: url(#myGradient);
        }
    }
}

.article__share {
    @media (max-width: $sm) {
        margin-left: auto;
        flex: 0 0 auto;
    }
}

.article__favorites-text {
    @media (max-width: $sm) {
        display: none;
    }
}

.article__download {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 1 1 100%;

    @media (max-width: $sm) {
        flex-direction: column;
        gap: 16px;
        align-items: start;
    }
}

.article__download-text {
    font-size: 16px;
    line-height: 24px;
    color: $blue;
}

.article__btn {
    width: 200px;

    @media (max-width: $sm) {
        width: 100%;
    }
}

.article__sidebar {
    display: flex;
    gap: 40px;
    flex: 0 1 308px;
    flex-wrap: wrap;
    align-content: flex-start;

    @media (max-width: $xl) {
        display: none;
    }
}

.article__tags {
    display: flex;
    flex-direction: column;
    gap: 16px;
    flex: 0 0 100%;
    align-items: flex-end;

    @media (max-width: $sm) {
        flex-direction: row;
    }
}

.article__tag-item {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 0 8px;
    cursor: pointer;

    &:hover {
        .article__tag-symbol {
            color: $blue-primary;
            -webkit-text-fill-color: unset;
        }

        .article__tag-text {
            color: $blue-primary;
        }
    }

    &:active {
        .article__tag-symbol {
            color: transparent;
            -webkit-text-fill-color: transparent;
        }

        .article__tag-text {
            color: $blue-primary;
        }
    }
}

.article__tag-symbol {
    font-family: "Kreadon-Demi";
    font-size: 30px;
    line-height: 30px;
    background: $gradient;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
}

.article__tag-text {
    font-size: 16px;
    line-height: 24px;
    color: $black;

    @media (max-width: $lg) {
        font-size: 14px;
        line-height: 20px;
    }
}

.article-layout{
    position: relative;
    overflow: hidden;
}

.article-bg{
    position: absolute;
    z-index: 0;
    bottom: 206px;
    right: -866px;

    @media (max-width: $xl) {
       display: none;
    }
}
</style>