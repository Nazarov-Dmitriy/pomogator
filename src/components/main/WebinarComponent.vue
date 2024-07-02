<script setup>
import BtnBackgroud from '../btns/BtnBackgroud.vue'
</script>

<template>
    <section class="webinar">
        <div class="webinar__container">
            <div class="webinar__wrapper">
                <div class="webinar__hero">
                    <img
                        src="../../assets/images/webinarComponent/webinar-hero.png"
                        alt="webinar hero"
                        class="webinar__hero-img"
                    />
                </div>
                <div class="webinar__info">
                    <h2 class="webinar__info-title">Вебинары онлайн</h2>
                    <div class="webinar__info-wrap">
                        <p class="webinar__info-subtitle">
                            Для арегистрированных пользователей есть уникальная возможность
                            присутствовать на практических онлайн вебинарах с получением сертификата
                        </p>
                        <div class="webinar__info-cards">
                            <div class="webinar__info-card">
                                <div class="webinar__info-card-icon">
                                    <img
                                        src="../../assets/images/webinarComponent/webinar-example.png"
                                        alt=""
                                    />
                                </div>
                                <p class="webinar__info-card-subtitle">
                                    Использование цифровых технологий в обучении
                                </p>
                            </div>
                            <div class="webinar__info-card">
                                <div class="webinar__info-card-icon">
                                    <img
                                        src="../../assets/images/webinarComponent/webinar-topic.png"
                                        alt=""
                                    />
                                </div>
                                <p class="webinar__info-card-subtitle">
                                    Возможность задавать вопросы лектору во время эфира
                                </p>
                            </div>
                            <div class="webinar__info-card">
                                <div class="webinar__info-card-icon">
                                    <img
                                        src="../../assets/images/webinarComponent/webinar-login.png"
                                        alt=""
                                    />
                                </div>
                                <p class="webinar__info-card-subtitle">
                                    Все зарегистрированные пользователи получают сертификат
                                </p>
                            </div>
                        </div>
                        <div class="webinar__info-button-wrap">
                            <BtnBackgroud class="webinar__info-button">Регистрация </BtnBackgroud>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="webinar__background-svg">
            <img src="../../assets/images/webinarComponent/webinar-lines.png" alt="" />
        </div>
    </section>
</template>

<style scoped lang="scss">
@import '@/assets/styles/_variables.scss';

.webinar {
    border: 2px solid #f84343;
    padding: 60px 80px;
    background: #5b94ea;
    box-sizing: border-box;
    position: relative;

    @media (max-width: 991px) {
        padding: 40px;
    }

    @media (max-width: 576px) {
        padding: 32px 16px;
    }
}

.webinar__container {
    max-width: 1440px;
    margin: 0 auto;
    box-sizing: border-box;

    @media (max-width: 991px) {
        max-width: 673px;
    }

    @media (max-width: 576px) {
        max-width: 287px;
    }
}

.webinar__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 38px;
    position: relative;
    z-index: 2;

    @media (max-width: 991px) {
        display: block;
    }
}

.webinar__hero {
    width: 100%;
}

.webinar__hero-img {
    width: 100%;

    @media (max-width: 991px) {
        position: absolute;
        width: 212px;
    }

    @media (max-width: 576px) {
        width: 131px;
        top: -15px;
        left: -15px;
    }
}
.webinar__info {
    display: flex;
    flex-direction: column;
    gap: 32px;
}
.webinar__info-title {
    font-size: 48px;
    line-height: 117%;
    text-align: center;
    color: $black;

    @media (max-width: 991px) {
        text-align: left;
        font-size: 36px;
        line-height: 120%;
        margin-left: 230px;
    }

    @media (max-width: 576px) {
        margin-left: 130px;
        font-size: 32px;
    }
}

.webinar__info-wrap {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.webinar__info-subtitle {
    font-size: 24px;
    line-height: 133%;
    color: $white;

    @media (max-width: 991px) {
        font-size: 20px;
        margin-left: 230px;
    }

    @media (max-width: 576px) {
        margin: 0;
        text-align: center;
    }
}
.webinar__info-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;

    @media (max-width: 576px) {
        grid-template-columns: 1fr;
    }
}
.webinar__info-card {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
}

.webinar__info-card-subtitle {
    line-height: 150%;
    text-align: center;
    color: $white;

    @media (max-width: 991px) {
        font-size: 14px;
        line-height: 143%;
    }
}
.webinar__info-button-wrap {
    display: flex;
    justify-content: flex-end;
}
.webinar__info-button {
    // border-radius: 32px;
    // border: none;
    // padding: 12px 24px;
    // background: #f84343;
    // font-size: 16px;
    // line-height: 150%;
    // text-align: center;
    // color: #fff;
    // cursor: pointer;
    // margin-right: 39px;

    @media (max-width: 576px) {
        width: 100%;
        text-align: center;
        margin: 0;
    }
}

.webinar__background-svg {
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 1;
}
</style>
