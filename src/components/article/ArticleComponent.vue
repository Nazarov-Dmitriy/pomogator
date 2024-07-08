<template>
    <div class="article">
        <img
            :src="props.article?.img"
            alt="atricle image"
            class="article__img"
        >
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
                                IT-технологии в химии: новые возможности для исследований
                            </h1>
                            <div class="article__line" />
                            <p class="article__subtitle">
                                Статья посвящена применению информационных технологий в биологии, которые открывают
                                новые горизонты для исследований, диагностики и лечения заболеваний, а также
                                способствуют развитию персонализированной медицины.
                            </p>
                        </div>
                        <div class="article__tags">
                            sss
                        </div>
                    </div>
                    <div class="article__avtor">
                        <div class="article__avatar">
                            <img
                                src=""
                                alt=""
                                class="article__avatar-img"
                            >
                        </div>
                        <div class="article__avtor-info">
                            <p class="article__avtor-article">
                                <span class="article__avtor-field">Автор статьи: </span>Иванов Михаил Александрович
                            </p>
                            <p class="article__avtor-work">
                                <span class="article__avtor-field">Место работы: </span>Институт Информационных
                                Технологий
                            </p>
                            <p>
                                <span class="article__avtor-field">Источник: </span> <a
                                    href="#"
                                    class="article__avtor-link"
                                >ссылка_на_райт.ру</a>
                            </p>
                        </div>
                        <p class="article__avtor-publication">
                            Дата публикации 01.05.2024
                        </p>
                    </div>
                    <div class="article__contnent">
                        <p class="article__text">
                            Информационные технологии играют значительную роль в повышении качества образования в области химии. Они предоставляют новые возможности для обучения, развивают личность учащихся и интенсифицируют процесс обучения.
                        </p>
                        <p class="article__text">
                            Использование обучающих дисков и компьютерных технологий позволяет студентам осваивать сложные темы, такие как химическая связь и электролиз. Демонстрационный химический эксперимент остаётся важным средством для поддержания интереса к предмету, однако некоторые опасные опыты невозможно провести в аудитории.
                        </p>
                        <p class="article__text">
                            Компьютерные технологии особенно полезны при изучении взрыво- и пожароопасных процессов, реакций с участием токсичных веществ. Электронные издания, такие как «Химия для всех XXI. Химические опыты со взрывами и без», позволяют демонстрировать химические эксперименты с опасными веществами.
                        </p>
                    </div>
                    <div class="article__footer">
                        <div class="article__btns">
                            <div class="article__raiting">
                                <img
                                    src="@/assets/icons/article/up.svg"
                                    alt="up"
                                    class="article__btns-icon"
                                >
                                100
                                <img
                                    src="@/assets/icons/article/down.svg"
                                    alt="down"
                                    class="article__btns-icon"
                                >
                            </div>
                            <div class="article__share">
                                Поделиться
                                <img
                                    src="@/assets/icons/article/share.svg"
                                    alt="share"
                                    class="article__btns-icon"
                                >
                            </div>
                            <div class="article__favorites">
                                Добавить в избранное
                                <img
                                    src="@/assets/icons/article/favorites.svg"
                                    alt="favorites"
                                >
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
                    <OtherArticle :other-atricle="otherAtricle" />
                    <div class="article__trend">
                        sss
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
import BtnBackgroud from '../btns/BtnBackgroud.vue';
import OtherArticle from '../article/OtherArticle.vue';
import { watch } from 'vue';

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
    otherAtricle:{
        type: Array,
        default: () => []
    }
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
}

.article__back {
    flex: 1 1 100%;
    font-size: 16px;
    line-height: 24px;
    color: $blue;
}

.article__main {
    display: flex;
    flex: 1 1 100%;
    gap: 24px;
    justify-content: space-between;
    align-items: flex-start;
}

.article__block {
    flex: 0 1 848px;
    display: flex;
    flex-wrap: wrap;
}

.article__header {
    flex: 1 1 100%;

    & .article__tags {
        display: none;
    }
}

.article__header-block {
    display: flex;
    gap: 32px;
    flex-wrap: wrap;
}

.article__title {
    flex: 1 1 100%;
    font-family: "Kreadon-Demi";
    font-size: 48px;
    line-height: 56px;
    color: $blue-primary;
}

.article__subtitle {
    flex: 1 1 100%;
    font-size: 16px;
    line-height: 24px;
    color: $blue-primary;
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
}

.article__avatar {
    width: 72px;
    height: 72px;
    border: 1px solid $blue-primary;
    border-radius: 50%;
    background: $blue;
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
}

.article__contnent {
    font-size: 20px;
    line-height: 30px;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    margin-top: 40px;
}

.article__text {
    text-indent: 30px;
    text-align: justify;
}

.article__footer {
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
    gap: 80px;
}

.article__btns {
    flex: 1 1 100%;
    display: flex;
    gap: 40px;
    align-items:center;
}

.article__btns-icon{
    width: 24px;
    height: 24px;
    cursor: pointer;
}

.article__raiting {
    display: flex;
    align-items:center;
    gap: 14px;
    font-size: 24px;
    line-height: 32px;
    font-weight: 500;
    color: $black;
}

.article__share {
    display: flex;
    gap: 16px;
    align-items:center;
    flex: 1 1 100%;
    align-self: flex-start;
    font-size: 16px;
    line-height: 24px;
    color: $black;
    cursor: pointer;
}

.article__favorites {
    display: flex;
    gap: 16px;
    align-items:center;
    flex: 0 0 218px;
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    color: $blue;
    cursor: pointer;
}

.article__download {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 1 1 100%;
}

.article__download-text {
    font-size: 16px;
    line-height: 24px;
    color: $blue;
}

.article__btn{
    width: 200px;
}

.article__sidebar {
    display: flex;
    gap: 80px;    
    flex: 0 1 308px;
    flex-wrap: wrap;
    align-content: flex-start;
}

.article__tags{
    display: flex;
    flex-direction: column;
    gap: 16px;
    flex: 0 0 100%;
    align-items:flex-end;

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

        .article__tag-text  {
            color: $blue-primary;
        }
    }

    &:active{
        .article__tag-symbol {
            color: transparent;
            -webkit-text-fill-color: transparent;
        }

        .article__tag-text  {
            color: $blue-primary;
        }
    }

}

.article__tag-symbol {
    font-family: "Kreadon-Demi";
    font-size: 36px;
    line-height: 42px;
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

.article__other {}

.article__trend {}
</style>