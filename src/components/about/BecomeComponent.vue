<template>
    <section class="become">
        <div class="become__background">
            <img
                src="../../assets/images/about/become/become-bg.png"
                alt=""
                class="become__background-img"
            />
        </div>
        <div class="become__wrapper">
            <h2 class="become__title">
                Стань частью педагогического сообщества будущего и открой для себя безграничные
                возможности для профессионального развития!
            </h2>
            <p class="become__subtitle">
                Зарегистрируйся на нашем сайте и получи доступ к эксклюзивным методическим
                материалам, онлайн-консультациям экспертов и сети единомышленников, которые меняют
                образование.
            </p>
            <BtnBackground class="become__button">Регистрация</BtnBackground>
        </div>
    </section>
</template>

<script setup>
import BtnBackground from '../btns/BtnBackgroud.vue'
</script>

<style scoped lang="scss">
.become {
    padding: 60px 80px;
    background: $blue;
    position: relative;
    overflow: hidden;

    @media (max-width: $lg) {
        padding: 40px;
    }
    @media (max-width: $sm) {
        padding: 32px 16px;
    }
}
.become__background {
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 1;

    @media (max-width: $lg) {
        top: 170px;
    }
    @media (max-width: $sm) {
        top: 320px;
    }
}
.become__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
}
.become__title {
    font-weight: 600;
    font-size: 36px;
    line-height: 1.17;
    text-align: center;
    color: $white;
    text-align: center;
    position: static;
    z-index: 2;

    @media (max-width: $lg) {
        font-size: 32px;
        line-height: 1.25;
    }
}
.become__subtitle {
    line-height: 1.5;
    color: $black;
    text-align: center;
    max-width: 777px;
    width: 100%;
    position: static;
    z-index: 2;

    @media (max-width: $lg) {
        font-size: 14px;
        line-height: 1.4;
    }
}

.become__button {
    position: static;
    z-index: 2;
}
</style>
