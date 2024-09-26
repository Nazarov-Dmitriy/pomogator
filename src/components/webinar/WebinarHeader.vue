<template>
    <section class="webinar">
        <p class="article__back" @click="$router.go(-1)">&#8592; Вернуться в "Вебинар"</p>
        <div class="webinar__wrapper">
            <div class="webinar__info">
                <h2 class="webinar__title">
                    IT-технологии в химии: новые возможности для исследований
                </h2>
                <div class="webinar__info-wrapper">
                    <p class="webinar__date">
                        Дата и время проведения
                        <span v-if="props.webinarDate">{{ props.webinarDate }}</span>
                        <span v-else>01.05.2024 в 16:00 (МСК)</span>
                    </p>
                    <div class="webinar__tags">
                        <span>#</span>
                        <p class="webinar__tags-text">Химия</p>
                    </div>
                </div>
                <div class="webinar__line-bg" />
                <p class="webinar__description">
                    Приглашаем вас присоединиться к нашему практическому вебинару, посвященному
                    применению IT-технологий в химии. Мы обсудим, как современные технологии
                    открывают новые горизонты для исследований в области химии, делая процесс
                    разработки новых материалов, лекарств и других продуктов более эффективным и
                    точным.
                </p>
            </div>
            <div class="webinar__card">
                <div class="webinar__card-text">
                    <h2 class="webinar__card-title">
                        Зарегестрируйтесь на вебинар, чтобы стать участником.
                    </h2>
                    <p class="webinar__card-subtitle">Вам придет напоминание о вебинаре</p>
                </div>
                <div class="webinar__btn-wrapper">
                    <BtnBackgroud>Зарегестрироваться на вебинар</BtnBackgroud>
                </div>
            </div>
        </div>
        <div class="webinar__line-bg" />
    </section>
</template>

<script setup>
import BtnBackgroud from '../btns/BtnBackgroud.vue'

const props = defineProps({
    webinarDate: {
        type: String,
        default: null
    }
})
</script>

<style lang="scss" scoped>
.webinar {
    padding: 60px 80px;
    box-sizing: border-box;

    @media (max-width: $lg) {
        padding: 60px 40px 40px 40px;
    }
    @media (max-width: $sm) {
        padding: 60px 16px 32px 16px;
    }
}
.article__back {
    margin-bottom: 21px;
}
.webinar__wrapper {
    display: grid;
    grid-template-columns: 2fr 1fr;
    justify-content: space-between;
    gap: 16px;

    @media (max-width: $lg) {
        grid-template-columns: 1fr;
    }
}
.webinar__info {
    display: flex;
    flex-direction: column;
    gap: 24px;
}
.webinar__title {
    font-family: 'Kreadon-Demi';
    font-weight: 600;
    font-size: 48px;
    line-height: 56px;
    color: $blue-primary;

    @media (max-width: $lg) {
        font-size: 32px;
        line-height: 40px;
    }

    @media (max-width: $lg) {
        font-size: 30px;
    }
}
.webinar__info-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    @media (max-width: $sm) {
        flex-direction: column;
        gap: 16px;
        align-items: start;
    }
}
.webinar__date {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: $blue-primary;

    & span {
        display: block;
    }

    @media (max-width: $lg) {
        font-size: 14px;
        line-height: 20px;
    }
    @media (max-width: $lg) {
        font-size: 16px;
        line-height: 1.5;
    }
}
.webinar__tags {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    & span {
        font-family: 'Kreadon-Demi';
        font-size: 30px;
        line-height: 30px;
        background: $gradient;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        color: transparent;
    }

    @media(max-width: $sm){
        order: -1;
    }
}
.webinar__tags-text {
    font-size: 16px;
    line-height: 24px;
    color: $black;
}

.webinar__line-bg {
    border: 1px solid $blue;
    width: 100%;
    height: 1px;
}
.webinar__description {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: $black;
}
.webinar__card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 2px solid $blue;
    border-radius: 20px;
    padding: 32px 16px;
    box-sizing: border-box;

    @media (max-width: $lg) {
        display: grid;
        grid-template-columns: repeat(2, auto);
        align-items: center;
    }
    @media (max-width: $sm) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: start;
        gap: 20px;
        :deep(.btn-bg__text) {
            text-align: center;
        }
    }
}

.webinar__card-text {
    display: grid;
    gap: 16px;
}
.webinar__card-title {
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    color: $black;
}
.webinar__card-subtitle {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: $blue-primary;
}
.webinar__btn-wrapper {
    display: flex;
    justify-content: flex-end;
}

.webinar__line-bg:last-child {
    margin-top: 40px;
}
</style>
