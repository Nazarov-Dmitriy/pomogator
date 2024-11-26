<template>
    <div class="section-trend-about">
        <div class="trend-about__container">
            <div class="trend-about__content">
                <h2 v-if="$route.path.includes('/trend/khimiya')" class="trend-about__title">
                    IT-технологии в преподавании химии, касается использования информационных
                    технологий для улучшения образовательного процесса и стимуляции интереса
                    учащихся к предмету.
                </h2>

                <img
                    v-if="$route.path.includes('/trend/khimiya')"
                    src="@/assets/images/trend/description/img.svg"
                    alt="about-image"
                    class="trend-about__image"
                />

                <h2 v-if="$route.path.includes('/trend/fizika')" class="trend-about__title">
                    IT-технологии в преподавании физики, касается использования информационных
                    технологий для улучшения образовательного процесса и стимуляции интереса
                    учащихся к предмету.
                </h2>

                <img
                    v-if="$route.path.includes('/trend/fizika')"
                    src="@/assets/images/trend/description/physics.png"
                    alt="about-image"
                    class="trend-about__image-png"
                />
                <h2 v-if="$route.path.includes('/trend/biologiya')" class="trend-about__title">
                    IT-технологии в преподавании биологии, касается использования информационных
                    технологий для улучшения образовательного процесса и стимуляции интереса
                    учащихся к предмету.
                </h2>

                <img
                    v-if="$route.path.includes('/trend/biologiya')"
                    src="@/assets/images/trend/description/biology.png"
                    alt="about-image"
                    class="trend-about__image-png"
                />
                <h2 v-if="$route.path.includes('/trend/robototekhnika')" class="trend-about__title">
                    IT-технологии в преподавании робототехники, касается использования
                    информационных технологий для улучшения образовательного процесса и стимуляции
                    интереса учащихся к предмету.
                </h2>

                <img
                    v-if="$route.path.includes('/trend/robototekhnika')"
                    src="@/assets/images/trend/description/robot.png"
                    alt="about-image"
                    class="trend-about__image-png"
                />
                <div class="trend-about__block">
                    <p class="trend-about__text" :class="props.user && '!text-transparent'">
                        Чтобы скачать материалы нужно зарегестрироваться
                    </p>
                    <BtnBackgroud
                        v-if="!props.user"
                        emit-name="form-submit"
                        class="trend-about__btn"
                        @form-submit="$router.push('/auth/register')"
                    >
                        Регистрация
                    </BtnBackgroud>
                </div>
            </div>
        </div>
        <img
            src="@/assets/images/trend/description/bg.svg"
            alt="bg-image"
            class="trend-about__bg"
        />
    </div>
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
<style lang="scss">
.section-trend-about {
    position: relative;
    background: $gradient-background;
}

.trend-about__container {
    padding: 60px 80px 136px 80px;

    @media (max-width: $lg) {
        padding: 40px;
    }

    @media (max-width: $sm) {
        padding: 32px 16px 56px 16px;
    }
}

.trend-about__content {
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media (max-width: $sm) {
        gap: 15px;
    }
}

.trend-about__title {
    font-family: 'Kreadon-Demi';
    font-size: 36px;
    line-height: 42px;
    width: 57.9%;
    z-index: 2;

    @media (max-width: $lg) {
        width: 62.2%;
        font-size: 32px;
        line-height: 40px;
        z-index: 1;
    }

    @media (max-width: $sm) {
        width: 100%;
        font-size: 30px;
        line-height: 36px;
    }
}

.trend-about__block {
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
    z-index: 2;
}

.trend-about__text {
    font-size: 16px;
    line-height: 24px;
    color: $blue-primary;
}

.trend-about__image {
    position: absolute;
    top: 26px;
    right: 55px;
    aspect-ratio: 118 / 100;
    width: 38.2%;
    z-index: 1;

    @media (max-width: $lg) {
        width: 37.2%;
        top: 51px;
        right: 41px;
        aspect-ratio: 1.5 / 1;
    }

    @media (max-width: $sm) {
        position: unset;
        width: 100%;
    }
}
.trend-about__image-png {
    position: absolute;
    top: 26px;
    right: 55px;
    aspect-ratio: 1 / 1;
    width: 30%;
    z-index: 1;
    object-fit: contain;

    @media (max-width: $sm) {
        position: relative;
        width: 100%;
        top: 0;
        right: 0;
    }
}

.trend-about__btn {
    @media (max-width: $sm) {
        width: 100%;
    }
}

.trend-about__bg {
    width: 101%;
    position: absolute;
    bottom: -54px;
    z-index: 0;
    left: -1px;

    @media (max-width: $lg) {
        bottom: -45px;
    }
    @media (max-width: $sm) {
        bottom: 0;
    }
}
</style>
