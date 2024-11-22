<template>
    <section class="task">
        <div class="task__bg">
            <img src="/src/assets/images/trend/description/bg.svg" alt="" />
        </div>
        <div class="task__wrapper">
            <div class="task__info">
                <h2 class="task__info-title">Задачи и польза проекта</h2>
                <ul class="task__info-list">
                    <li class="task__info-list-item">
                        Повышение цифровой компетентности педагогов, что позволит им эффективно
                        применять современные технологии в образовательном процессе.
                    </li>
                    <li class="task__info-list-item">
                        Улучшение качества и эффективности подачи учебного материала, за счет
                        внедрения ИТ-технологий.
                    </li>
                    <li class="task__info-list-item">
                        Формирование педагогического сообщества, обменивающегося опытом и совместно
                        развивающего профессиональные навыки.
                    </li>
                    <li class="task__info-list-item">
                        Распространение лучших практик использования ИТ-инструментов в образовании.
                    </li>
                    <li class="task__info-list-item">
                        Стимулирование интереса и вовлеченности учащихся в изучение предмета путем
                        применения инновационных решений.
                    </li>
                </ul>

                <BtnBackgroud
                    v-if="!props.user"
                    emit-name="form-submit"
                    class="task__info-btn"
                    @form-submit="$router.push('/auth/register')"
                >
                    Регистрация
                </BtnBackgroud>
            </div>
            <div class="task__img-wrapper">
                <img src="../../assets/images/about/tasks/tasks-img.png" alt="" class="task__img" />
            </div>
        </div>
    </section>
</template>

<script setup>
import BtnBackgroud from '../btns/BtnBackgroud.vue'

const props = defineProps({
    user: {
        type: Object,
        default: () => {}
    }
})
</script>

<style lang="scss" setup>
.task {
    padding: 60px 80px;
    position: relative;
    background: $gradient-background;
    overflow: hidden;
    min-height: 530px;

    @media (max-width: $lg) {
        padding: 40px;
    }

    @media (max-width: $sm) {
        padding: 32px 16px;
    }
}

.task__bg {
    img {
        position: absolute;
        z-index: 0;
        bottom: 0;
        left: 0;
        width: 100%;
    }
}

.task__wrapper {
    display: flex;
    justify-content: space-between;
    z-index: 1;

    @media (max-width: $sm) {
        flex-direction: column;
        gap: 44px;
        justify-content: center;
        align-items: center;
    }
}
.task__info {
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding-bottom: 64px;

    @media (max-width: $sm) {
        padding-bottom: 0;
    }
}
.task__info-title {
    font-family: var(--second-family);
    font-weight: 600;
    font-size: 36px;
    line-height: 42px;
    color: $black;
    position: static;
    z-index: 1;
    font-family: 'Kreadon-Demi';

    @media (max-width: $lg) {
        font-size: 32px;
        line-height: 40px;
    }
}

.task__info-list {
    max-width: 741px;
    width: 100%;
    z-index: 1;
}

.task__info-list-item {
    line-height: 150%;
    color: $black;
    list-style-type: disc;
    margin-left: 20px;
    z-index: 1;
    font-size: 16px;
    line-height: 24px;

    @media (max-width: $lg) {
        font-size: 14px;
        line-height: 20px;
    }
}
.task__info-text {
    line-height: 1.5;
    color: $blue-primary;
    z-index: 1;
    font-size: 16px;
    line-height: 24px;

    @media (max-width: $lg) {
        font-size: 14px;
        line-height: 20px;
    }
    @media (max-width: $sm) {
        margin-bottom: -8px;
    }
}
.task__info-btn {
    width: max-content;
    box-sizing: border-box;
    padding: 8px 48px;
    z-index: 1;

    @media (max-width: $sm) {
        width: 100%;
        margin-top: -8px;
    }
}
.task__img-wrapper {
    max-width: 421px;
    z-index: 1;

    @media (max-width: $sm) {
        padding-bottom: 33px;
    }
}
.task__img {
    width: 100%;
}
</style>
