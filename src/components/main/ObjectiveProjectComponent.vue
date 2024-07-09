<template>
    <section class="section-objective">
        <div class="objective__content">
            <h2 class="objective__title">
                Цель проекта
            </h2>
            <div class="objective__desription">
                <p class="objective__text">
                    Повышение инновационной компетентности педагогов через освоение практических навыков использования
                    цифрового оборудования и ИТ-технологий в образовательном процессе. Это будет достигаться посредством
                    различных форм наставничества, коучинга, нетворкинга, методического и информационного сопровождения
                    участников с публикацией лучшего опыта.
                </p>
                <BtnBackgroud
                    class="objective__btn"
                    emit-name="link"
                    @link="$router.push('/about')"
                >
                    Подробнее
                </BtnBackgroud>
            </div>
            <img
                src="@/assets/images/main/objective/img1.svg"
                alt="img-decor"
                class="objective__image"
            >
            <img
                src="@/assets/images/main/objective/img2.svg"
                alt="img-decor"
                class="objective__image"
            >
            <img
                src="@/assets/images/main/objective/bg-line.svg"
                alt="bg-image"
                class="objective__bg-line objective__bg-line--mobile"
            >
        </div>

        <img
            src="@/assets/images/main/objective/bg-line.svg"
            alt="bg-image"
            class="objective__bg-line"
        >
    </section>
</template>
<script setup>
import BtnBackgroud from '../btns/BtnBackgroud.vue';


</script>
<style lang="scss">
.section-objective {
    max-width: 1440px;
    margin: 0 auto;
    position: relative;

    @media (max-width: $lg) {
        overflow: visible;
    }
}

.objective__content {
    padding: 202px 80px 60px 60px;
    display: flex;
    gap: 32px;
    flex-direction: column;

    @media (max-width: $lg) {
        padding: 132px 40px 40px 40px;
    }

    @media (max-width: $sm) {
        padding: 112px 16px 32px 16px;
        position: relative;
    }
}

.objective__title {
    font-family: "Kreadon-Demi";
    font-size: 36px;
    line-height: 42px;
    color: $blue;

    @media (max-width: $lg) {
        font-size: 32px;
        line-height: 40px;
    }
}

.objective__desription {
    display: flex;
    gap: 40px;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
    position: relative;

}

.objective__text {
    max-width: 573px;
    font-weight: 'Inter';
    font-size: 16px;
    line-height: 1.5;
    font-weight: 400;

    @media (max-width: $lg) {
        width: 61%;
        font-size: 14px;
        line-height: 20px;
    }

    @media (max-width: $sm) {
        width: 100%
    }
}

.objective__btn {
    flex-grow: 1;
    flex-shrink: 1;
}

.objective__bg-line {
    position: absolute;
    top: 155px;
    rotate: 172.5deg;
    z-index: -1;
    width: 108.3%;
    left: -87px;

    &--mobile {
        display: none;


    }

    @media (max-width: $lg) {
        top: 271px;
        left: -34px;
    }

    @media (max-width: $sm) {
        width: 835px;
        top: 312px;
        left: -238px;
        display: none;

        &--mobile {
            display: initial;
            bottom:11px;
            top: initial;
        }
    }

}

.objective__image {
    position: absolute;
    border: 8px solid $blue;
    border-radius: 100%;
    box-sizing: border-box;

    @media (max-width: $lg) {
        border: 4px solid $blue;
    }


    @media (max-width: $sm) {
        display: none;
    }

    &:nth-of-type(1) {
        width: clamp(6.313rem, 22.768vw - 7.804rem, 12.688rem);
        height: clamp(6.313rem, 22.768vw - 7.804rem, 12.688rem);
        right: 26.7%;
        top: 146px;

        @media (max-width: $lg) {
            top: 196px;
            right: 23.5%;
        }
    }

    &:nth-of-type(2) {
        width: clamp(7.625rem, 27.902vw - 9.674rem, 15.438rem);
        height: clamp(7.625rem, 27.902vw - 9.674rem, 15.438rem);
        right: 4.7%;
        top: 265px;


        @media (max-width: $lg) {
            top: 255px;
            right: 5.1%;
        }
    }
}
</style>