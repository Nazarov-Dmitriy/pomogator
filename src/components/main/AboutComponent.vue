<script setup></script>

<template>
    <section class="about__section">
        <div class="about">
            <div class="about__container">
                <div class="about__content">
                    <h1 class="about__title">
                        IT помогатор повышает квалификацию в области применения цифровых технологий в образовательном
                        процессе
                    </h1>
                    <div class="about__register-panel">
                        <BtnBackgroud>Регистрация</BtnBackgroud>
                        <p class="about__register-decription">
                            Регистрация позволит скачивать материалы и участвовать в вебинарах с получением сертификата
                        </p>
                    </div>
                </div>
                <div class="about__images">
                    <img
                        src="@/assets/images/about/about-all.png"
                        alt="icon-card"
                        class="about__image-full"
                    >
                    <img
                        src="@/assets/images/about/img1.svg"
                        alt="icon-card"
                        class="about__image-one"
                    >
                    <img
                        src="@/assets/images/about/img2.svg"
                        alt="icon-card"
                        class="about__image-one"
                    >
                    <img
                        src="@/assets/images/about/img3.svg"
                        alt="icon-card"
                        class="about__image-one"
                    >
                    <img
                        src="@/assets/images/about/img4.svg"
                        alt="icon-card"
                        class="about__image-one"
                    >
                </div>
            </div>
            <div class="about__cards">
                <div class="about__card">
                    <img
                        src="@/assets/images/about/practicum.svg"
                        alt="icon-card"
                        class="about__card-img"
                    >
                    <p class="about__card-content">
                        Онлайн практикумы
                    </p>
                </div>
                <div class="about__card">
                    <img
                        src="@/assets/images/about/certificate.svg"
                        alt="icon-card"
                        class="about__card-img"
                    >
                    <p class="about__card-content">
                        Сертификаты
                    </p>
                </div>
                <div class="about__card">
                    <img
                        src="@/assets/images/about/video-materials.svg"
                        alt="icon-card"
                        class="about__card-img"
                    >
                    <p class="about__card-content">
                        Видео материалы
                    </p>
                </div>
                <div class="about__card">
                    <img
                        src="@/assets/images/about/news.svg"
                        alt="icon-card"
                        class="about__card-img"
                    >
                    <p class="about__card-content">
                        Актуальные новости
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import BtnBackgroud from '../btns/BtnBackgroud.vue';


</script>
<style lang="scss">
.about__section {
    background: $gradient-background; 
}

.about {
    max-width: 1440px;
    box-sizing: border-box;
    padding: 60px 80px 0 80px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    @media (max-width: $lg) {
        padding: 40px 40px 0 40px;
    }

    @media (max-width: $sm) {
        padding: 24px 16px 0 16px;
    }
}

.about__container {
    display: flex;
    position: relative;
    width: 100%;
}

.about__content {
    display: flex;
    flex-direction: column;
    gap: 32px;

    @media (max-width: $sm) {
        gap: 47px;
    }
}

.about__title {
    font-family: "Kreadon-Demi";
    font-size: 48px;
    line-height: 56px;
    width: 54%;

    @media (max-width: $lg) {
        font-size: clamp(2.25rem, 0.9643rem + 2.6786vw, 2.625rem);
        line-height: 42px;
        width: 54%;
    }

    @media (max-width: $sm) {
        font-size: 30px;
        line-height: 40px;
        width: 288px;
        z-index: 1;
    }
}

.about__register-panel {
    display: flex;
    gap: 24px;

    @media (max-width: $md) {
        flex-wrap: wrap;
        gap: 16px;
    }
}

.about__register-decription {
    color: $blue;
    max-width: 460px;
    font-size: 16px;
    line-height: 1.5;
    font-weight: 400;

    @media (max-width: $lg) {
        line-height: 1.25;
        font-size: 14px;
    }

    @media (max-width: $md) {
        width: 100%;
        max-width: none;
        order: -1;
    }
}

.about__images {
    position: absolute;
    right: 0;
    top: -46px;
    width: 41%;
    z-index: 0;

    @media (max-width: $lg) {
        width: 42%;
        top: -17px;
    }

    @media (max-width: $lg) {
        top: -24px;
        right: -16px;
    }
}

.about__image-full {
    width: 100%;
    aspect-ratio: 13 / 10;

    @media (max-width: $sm) {
        display: none;
    }
}

.about__image-one {
    display: none;

    @media (max-width: $sm) {
        display: initial;
        position: absolute;
    }

    &:nth-child(2) {
        width: 96px;
        height: 96px;
        right: -24px;
        top: 18px;
    }

    &:nth-child(3) {
        width: 47px;
        height: 47px;
        right: 24px;
        top: 200px;
    }

    &:nth-child(4) {
        width: 60px;
        height: 60px;
        right: 82px;
        top: 315px;
    }

    &:nth-child(5) {
        width: 60px;
        height: 60px;
        right: -20px;
        top: 334px;
    }
}

.about__cards {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    position: relative;
    top: 80px;

    @media (max-width: $lg) {
        top: 40px;
    }

    @media (max-width: $md) {
        flex-wrap: wrap;
    }

    @media (max-width: $sm) {
        top: 32px;
        gap: 24px 32px;
    }
}

.about__card {
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 16px;
    background: $blue;
    border-radius: 32px;
    flex: 0 1 240px;

    @media (max-width: $md) {
        flex: 1 1 40%;
    }

    @media (max-width: $sm) {
        padding: 8px;
    }
}

.about__card-img {
    width: 76px;
    height: 76px;

    @media (max-width: $sm) {
        width: 32px;
        height: 32px;
    }
}

.about__card-content {
    color: $white;
    font-weight: 'Inter';
    font-size: 16px;
    line-height: 1.5;
    font-weight: 400;
    text-align: center;
    margin: auto;

    @media (max-width: $sm) {
        line-height: 1.25;
        font-size: 14px;
        margin: 0;
    }
}
</style>
