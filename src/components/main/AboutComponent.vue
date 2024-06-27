<template>
    <section class="about__section">
        <div class="about">
            <div class="about__content">
                <div class="about__container">
                    <h1 class="about__title">
                        IT помогатор повышает квалификацию в области применения цифровых технологий в образовательном процессе
                    </h1>
                    <div class="about__register-panel">
                        <BtnBackgroud>Регистрация</BtnBackgroud>
                        <p class="about__register-decription">
                            Регистрация позволит скачивать материалы и участвовать в вебинарах с получением сертификата
                        </p>
                    </div>
                    <div class="about__images">
                        <img
                            src="@/assets/images/about/about-all.png"
                            alt="icon-card"
                            class="about__image"
                        >
                    </div>
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
  background: $gradient-background
}

.about {
  max-width: 1440px;
  box-sizing: border-box;
  padding: 14px 80px 0 60px;
  margin: auto;
}

.about__content {
  display: flex;
  gap: clamp(20px, 5vw, 60px);
}

.about__container {}

.about__title {}

.about__register-panel {}

.about__register-decription {}

.about__image {}

.about__images {}

.about__cards {}

.about__card {}

.about__card-img {}

.about__card-content {}
</style>