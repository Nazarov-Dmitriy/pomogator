<template>
    <section class="footer__contaner">
        <div class="footer">
            <div class="footer__items">
                <div class="footer__header">
                    <img
                        src="@/assets/icons/logo.svg"
                        alt="logo"
                        class="footer__logo"
                        @click="mainLink()"
                    >
                    <p class="footer__header-text">
                        Повышение профессиональных компетенций учителей с применением цифровых технологий в образовательном процессе
                    </p>
                </div>
                <div class="footer__trend">
                    <p class="footer__list-header">
                        Направления
                    </p>
                    <ul class="footer__list">
                        <li class="footer__list-item">
                            <router-link
                                to="/"
                                class="footer__link"
                            >
                                Робототехника
                            </router-link>
                        </li>
                        <li class="footer__list-item">
                            <router-link
                                to="/"
                                class="footer__link"
                            >
                                Химия
                            </router-link>
                        </li>
                        <li class="footer__list-item">
                            <router-link
                                to="/"
                                class="footer__link"
                            >
                                Физика
                            </router-link>
                        </li>
                        <li class="footer__list-item">
                            <router-link
                                to="/"
                                class="footer__link"
                            >
                                Биология
                            </router-link>
                        </li>
                    </ul>
                </div>
                <div class="footer__sections">
                    <p class="footer__list-header">
                        Разделы
                    </p>
                    <ul class="footer__list">
                        <li class="footer__list-item">
                            <router-link
                                to="/"
                                class="footer__link"
                            >
                                О нас
                            </router-link>
                        </li>
                        <li class="footer__list-item">
                            <router-link
                                to="/"
                                class="footer__link"
                            >
                                Блог
                            </router-link>
                        </li>
                        <li class="footer__list-item">
                            <router-link
                                to="/"
                                class="footer__link"
                            >
                                Вебинар
                            </router-link>
                        </li>
                    </ul>
                </div>
                <div class="footer__documents">
                    <p class="footer__list-header">
                        Документы
                    </p>
                    <ul class="footer__list">
                        <li class="footer__list-item">
                            <router-link
                                to="/"
                                class="footer__link"
                            >
                                Политика конфеденциальности
                            </router-link>
                        </li>
                        <li class="footer__list-item">
                            <router-link
                                to="/"
                                class="footer__link"
                            >
                                Пользовательское соглашение
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="footer__contacts">
                <div class="footer__contacts-social">
                    <img
                        src="@/assets/icons/footer/vk.svg"
                        alt="vk"
                        class="footer__vk"
                        @click="some"
                    >
                    <img
                        src="@/assets/icons/footer/globe.svg"
                        alt="globe"
                        class="footer__globe"
                        @click="some"
                    >
                </div>
                <div class="footer__contacts-phone">
                    <img
                        src="@/assets/icons/footer/phone.svg"
                        alt="phone"
                        class="footer__phone"
                        @click="some"
                    >
                    <a 
                        class="footer__link" 
                        href="tel:+7 (352 31) 6 51 90"
                    >+7 (352 31) 6 51 90</a>
                </div>
                <div class="footer__contacts-mail">
                    <img
                        src="@/assets/icons/footer/mail.svg"
                        alt="mail"
                        class="footer__mail"
                        @click="some"
                    >
                    <a 
                        class="footer__link"
                        href="mailto:it-pomogator@mail.ru"
                    >it-pomogator@mail.ru</a>
                </div>
                <div class="footer__contacts-geo">
                    <img
                        src="@/assets/icons/footer/geo.svg"
                        alt="geo"
                        class="footer__geo"
                        @click="some"
                    >
                    <address class="footer__link">
                        641310, Курганская область, Кетовский муниципальный округ, с.Кетово, ул.Космонавтов,49А
                    </address>
                </div>
            </div>
            <hr class="footer__line">
            <div class="footer__copyright">
                <div class="footer__copyright-cot">
                    <img
                        src="@/assets/icons/footer/cot.svg"
                        alt="cot"
                        class="footer__cot"
                        @click="some"
                    >
                    <div>
                        <p class="footer__cot-text">
                            Победитель конкурса СОТ-2023»
                        </p>
                        <p class="footer__cot-text">
                            Номинация: «Особые образовательные потребности»
                        </p>
                    </div>
                </div>
                <div class="footer__copyright-madein">
                    <p class="footer__madein-text">
                        Сделано в:
                    </p>
                    <img
                        src="@/assets/icons/footer/logo1t.svg"
                        alt="1T"
                        class="footer__1t"
                        @click="some"
                    >
                    <img
                        src="@/assets/icons/footer/logoBWA.svg"
                        alt="logoBWA"
                        class="footer__logobwa"
                        @click="some"
                    >
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>

</script>
<style lang="scss">
.footer__contaner {
    width: 100%;
}

.footer {
    max-width: 1440px;
    height: auto;
    margin: 0 auto;
    padding: 142px 80px 80px 80px;
    background-image: url("@/assets/icons/footer/background.svg");
    @media (max-width: $lg) {
        padding: 159px 40px 40px 40px;

    }
    @media (max-width: $sm) {
        padding: 217px 16px 40px 16px;
    }
}

.footer__items {
    width: 100%;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    padding-bottom: 30px;
    @media (max-width: $lg) {
        grid-template-columns: 1fr 1fr 1fr;
        padding-bottom: 24px;
    }
    @media (max-width: $sm) {
        display: inline;
    }
}

.footer__header {
    padding-right: 80px;
    @media (max-width: $lg) {
        grid-column: 1/4;
        grid-row: 1;
        padding: 0;
    }
    @media (max-width: $sm) {
    }
}

.footer__logo {
    padding-bottom: 41px;
    width: 161px;
    height: 37px;
    cursor: pointer;
    @media (max-width: $sm) {
        padding-bottom: 24px;
    }
}

.footer__header-text{
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    color: $black;
    @media (max-width: $lg) {
        font-size: 20px;
        line-height: 24px;
        padding-bottom: 80px;
    }
    @media (max-width: $sm) {
        padding-bottom: 32px;
    }

}

.footer__trend {
    @media (max-width: $lg) {
        grid-column: 1;
        grid-row: 2;
    }
}

.footer__sections {
    @media (max-width: $lg) {
        grid-column: 2;
        grid-row: 2;
    }
}

.footer__documents {
    @media (max-width: $lg) {
        grid-column: 3;
        grid-row: 2;
    }
}

.footer__list-header {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: $blue;
    padding-bottom: 24px;
}

.footer__list {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: $black;
    padding-bottom: 16px;
    @media (max-width: $lg) {
        padding: 0;
    }
}

.footer__list-item {
    padding-bottom: 16px;
}

.footer__link {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: $black;
    @media (max-width: $lg) {
        font-size: 14px;
        line-height: 20px;
    }
}

.footer__contacts {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: auto;
    gap: 32px;
    padding-bottom: 32px;
    @media (max-width: $lg) {
        grid-template-columns: repeat(10, 1fr);
        gap: 0;
    }
    @media (max-width: $sm) {
        padding-top: 24px;
        display: flex;
        flex-direction: column;
        gap: 32px;
    }
}

.footer__contacts-phone {
    grid-column: 1/6;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 8px;
    @media (max-width: $lg) {
        grid-column: 5/8;
        grid-row: 1;
    }
    @media (max-width: $sm) {
        justify-content: flex-start;
    }
}

.footer__phone {
    cursor: pointer;
}

.footer__contacts-mail {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 8px;
    @media (max-width: $lg) {
        grid-column: 8/11;
        grid-row: 1;
    }
    @media (max-width: $sm) {
        justify-content: flex-start;
    }
}

.footer__mail {
    cursor: pointer;
}

.footer__contacts-social {
    grid-column: 1;
    grid-row: 2;
    @media (max-width: $lg) {
        grid-column: 1/4;
        grid-row: 1;
    }
}

.footer__vk {
    padding-right: 32px;
    cursor: pointer;
}

.footer__globe {
    cursor: pointer;
}

.footer__mail {
    cursor: pointer;
}

.footer__contacts-geo {
    display: flex;
    justify-content: flex-end;
    grid-column: 3/7;
    grid-row: 2;
    text-align: right;
    align-items: center;
    @media (max-width: $lg) {
        grid-column: 1/11;
        grid-row: 2;
        padding-top: 32px;
        justify-content: flex-start;
        text-align: left
    }
    @media (max-width: $sm) {
        padding-top: 0;
        text-align: left;
    }
}

.footer__geo {
    padding-right: 8px;
    @media (max-width: $lg) {
        padding-right: 0px;
    }
}
.footer__line {
    margin: 0;
    border: 1px solid $blue;
}

.footer__copyright {
    padding-top: 32px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    @media (max-width: $sm) {
        flex-direction: column;
    }
}

.footer__copyright-cot {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    @media (max-width: $md) {
        flex-direction: column;
        padding-bottom: 16px;
    }
}

.footer__cot{
    width: 71px;
    height: 31px;
    padding-top: 11px;
    cursor: pointer;
    @media (max-width: $lg) {
        padding-top: 17px;
    }
    @media (max-width: $md) {
        padding: 0px 0px 6px 0px;
    }
}

.footer__cot-text {
    padding-left: 16px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: $blue;
    align-items: center;
    @media (max-width: $lg) {
        font-size: 14px;
        line-height: 20px;
    }
    @media (max-width: $md) {
        padding: 0;
    }
}

.footer__madein-text {
    padding-left: 16px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: $blue;
    align-items: center;
    @media (max-width: $lg) {
        font-size: 14px;
        line-height: 20px;
    }
    @media (max-width: $md) {
        padding: 0;
    }
}

.footer__copyright-madein {
    display: flex;
    justify-content: flex-end;
    text-align: right;
    align-items: center;
    width: 100%;
}

.footer__1t {
    padding: 0px 8px 0px 8px;
    width: 107px;
    height: 24px;
    cursor: pointer;
    @media (max-width: $md) {
        padding: 0px 6px 0px 6px;
        width: 100px;
    }
}

.footer__logobwa {
    padding: 0px 0px 0px 6px;
    width: 84px;
    height: 19px;
    border-left: 1px solid $secondary;

    cursor: pointer;
        @media (max-width: $md) {
        padding: 0px 0px 0px 6px;
        width: 75px;
    }
}
</style>