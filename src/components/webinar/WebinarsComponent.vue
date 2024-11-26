<template>
    <section class="webinars">
        <div class="webinars__wrapper">
            <div class="webinars__info flex flex-col gap-6">
                <h2 class="webinars__title">
                    Онлайн вебинары с IT -это просто, понятно и эффективно
                </h2>
                <div class="webinars__img-wrapper webinars__img-wrapper--mobile">
                    <img
                        src="/image/webinar/webinars/webinar.png"
                        alt="screen img"
                        class="webinars__img"
                    />
                </div>
                <p class="webinars__subtitle">
                    Чтобы участвовать в вебинаре нужно зарегистрироваться
                </p>
                <div v-if="!userStore.getUser" class="webinars__btn-wrapper">
                    <BtnBackgroud
                        class="webinars__btn -my-2"
                        emit-name="form-submit"
                        @form-submit="$router.push('/auth/register')"
                    >
                        Регистрация
                    </BtnBackgroud>
                </div>
            </div>
            <div class="webinars__img-wrapper">
                <img
                    src="/image/webinar/webinars/webinar.png"
                    alt="screen img"
                    class="webinars__img"
                />
            </div>
            <img class="bg-img" src="/src/assets/images/trend/description/bg.svg" alt="" />
        </div>
    </section>
</template>
<script setup>
import BtnBackgroud from '../btns/BtnBackgroud.vue'
import { useUserStore } from '@/stores/userStore'

const userStore = useUserStore()
</script>
<style lang="scss" scoped>
.webinars {
    padding: 60px 80px;
    box-sizing: border-box;
    overflow: hidden;
    position: relative;
    background: linear-gradient(130deg, #daebff, #edf5ff);

    @media (max-width: $lg) {
        padding: 60px 40px;
    }

    @media (max-width: $sm) {
        padding: 32px 16px 60px 16px;
    }
}

.webinars__wrapper {
    display: flex;
    justify-content: space-between;
    @media (max-width: $lg) {
        gap: 0;
    }
    @media (max-width: $sm) {
        flex-direction: column;
    }
}
.webinars__info {
    position: relative;
    z-index: 1;

    @media (max-width: $sm) {
        gap: 16px;
    }
}
.webinars__title {
    font-family: 'Kreadon-Demi';
    font-weight: 600;
    font-size: 48px;
    line-height: 56px;
    color: $black;
    max-width: 547px;
    width: 100%;

    @media (max-width: $lg) {
        font-size: 32px;
        line-height: 40px;
    }
    @media (max-width: $sm) {
        font-size: 30px;
        line-height: 40px;
        text-align: center;
    }
}
.webinars__subtitle {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: $blue-primary;

    @media (max-width: $lg) {
        font-size: 14px;
        line-height: 20px;
    }
    @media (max-width: $sm) {
        text-align: center;
    }
}
.webinars__btn {
    @media (max-width: $sm) {
        width: 100%;
    }
}
.webinars__img-wrapper {
    position: relative;
    z-index: 1;

    @media (max-width: $sm) {
        display: none;
    }

    &--mobile {
        display: none;

        @media (max-width: $sm) {
            display: flex;
            justify-content: center;
            width: auto;
        }
    }
}
.webinars__img {
    @media (max-width: $sm) {
        max-width: 288px;
    }
}
.webinars__list {
    position: absolute;
    top: 30%;
    right: 30%;
    display: flex;
    flex-direction: column;
    gap: 8px;
}
.webinars__item {
    font-family: 'Kreadon-Demi';
    font-weight: 600;
    font-size: 36px;
    line-height: 42px;
    text-align: center;
    color: $blue-primary;

    &::before {
        content: '';
        width: 5px;
        height: 5px;
        position: absolute;
        transform: translate(-20px, 18px);
        background-color: $blue-primary;
    }
}
.bg-img {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 0;
}
</style>
