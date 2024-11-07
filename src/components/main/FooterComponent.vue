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
                    />
                    <p class="footer__header-text">
                        Повышение профессиональных компетенций учителей с применением цифровых
                        технологий в образовательном процессе
                    </p>
                </div>
                <div class="footer__items-container">
                    <div class="footer__section">
                        <p class="footer__list-header">Направления</p>
                        <ul class="footer__list">
                            <li class="footer__list-item">
                                <router-link to="/trend/robototekhnika" class="footer__link">
                                    Робототехника
                                </router-link>
                            </li>
                            <li class="footer__list-item">
                                <router-link to="/trend/khimiya/" class="footer__link">
                                    Химия
                                </router-link>
                            </li>
                            <li class="footer__list-item">
                                <router-link to="/trend/fizika" class="footer__link">
                                    Физика
                                </router-link>
                            </li>
                            <li class="footer__list-item">
                                <router-link to="/trend/biologiya" class="footer__link">
                                    Биология
                                </router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="footer__section">
                        <p class="footer__list-header">Разделы</p>
                        <ul class="footer__list">
                            <li class="footer__list-item">
                                <router-link to="/about" class="footer__link"> О нас </router-link>
                            </li>
                            <li class="footer__list-item">
                                <router-link to="/blog" class="footer__link"> Блог </router-link>
                            </li>
                            <li class="footer__list-item">
                                <router-link to="/webinars" class="footer__link">
                                    Вебинар
                                </router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="footer__section document">
                        <p class="footer__list-header">Документы</p>
                        <ul class="footer__list">
                            <li class="footer__list-item">
                                <a
                                    class="footer__link"
                                    href="/public/documents/user_consultation_it.pdf"
                                    target="_blank"
                                >
                                    Политика конфеденциальности
                                </a>
                            </li>
                            <li class="footer__list-item">
                                <router-link to="/" class="footer__link">
                                    Пользовательское соглашение
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="footer__contacts">
                <div class="footer__contacts-social">
                    <a href="https://vk.com/club4380657">
                        <img
                            src="@/assets/icons/footer/vk.svg"
                            alt="vk"
                            class="footer__vk"
                            @click="some"
                        />
                    </a>
                    <a href="https://shkolaketoskaya-r45.gosweb.gosuslugi.ru/ ">
                        <img
                            src="@/assets/icons/footer/globe.svg"
                            alt="globe"
                            class="footer__globe"
                            @click="some"
                        />
                    </a>
                </div>
                <div class="footer__contact">
                    <div class="footer__contacts-phone">
                        <img
                            src="@/assets/icons/footer/phone.svg"
                            alt="phone"
                            class="footer__phone"
                            @click="some"
                        />
                        <a class="footer__link" href="tel:+7 (352 31) 6 51 90"
                            >+7 (352 31) 6 51 90</a
                        >
                    </div>
                    <div class="footer__contacts-mail">
                        <img
                            src="@/assets/icons/footer/mail.svg"
                            alt="mail"
                            class="footer__mail"
                            @click="some"
                        />
                        <a class="footer__link" href="mailto:ketovo_school@mail.ru "
                            >it-pomogator@mail.ru</a
                        >
                    </div>
                </div>
                <div class="footer__contacts-geo">
                    <img
                        src="@/assets/icons/footer/geo.svg"
                        alt="geo"
                        class="footer__geo"
                        @click="some"
                    />
                    <address class="footer__address">
                        641310, Курганская область, Кетовский муниципальный округ, с. Кетово, ул.
                        Космонавтов, 49А
                    </address>
                </div>
            </div>
            <hr class="footer__line" />
            <div class="footer__copyright">
                <a href=" https://grant.obr.so/" target="_blank" class="footer__copyright-cot">
                    <img
                        src="@/assets/icons/footer/cot.svg"
                        alt="cot"
                        class="footer__cot"
                        @click="some"
                    />
                    <div>
                        <p class="footer__cot-text">Победитель конкурса СОТ-2023»</p>
                        <p class="footer__cot-text">
                            Номинация: «Особые образовательные потребности»
                        </p>
                    </div>
                </a>

                <a
                    href="https://xn--g1ani7c.xn--p1ai/"
                    target="_blank"
                    class="footer__copyright-madein"
                >
                    <p class="footer__madein-text">Сделано в:</p>

                    <img
                        src="@/assets/icons/footer/logo1t.svg"
                        alt="1T"
                        class="footer__1t"
                        @click="some"
                    />
                    <a href="https://bitwizarts.smartspecs.nl/" target="_blank">
                        <img
                            src="@/assets/icons/footer/logoBWA.svg"
                            alt="logoBWA"
                            class="footer__logobwa"
                            @click="some"
                        />
                    </a>
                </a>
            </div>
        </div>
        <img src="../../assets/images/footer/bg.svg" alt="bg-line" class="footer-bg" />
    </section>
</template>
<script setup>
import router from '@/router'

function mainLink() {
    router.push('/')
}
</script>
<style lang="scss">
.footer__contaner {
    width: 100%;
    position: relative;
    background: linear-gradient(130deg, #daebff, #edf5ff);
}

.footer {
    max-width: 1440px;
    height: auto;
    margin: 0 auto;
    padding: 142px 80px 80px 80px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    z-index: 1;
    position: relative;

    @media (max-width: $lg) {
        padding: 100px 40px 40px 40px;
        gap: 32px;
    }

    @media (max-width: $sm) {
        padding: 60px 16px 40px 16px;
    }
}

.footer__items {
    width: 100%;
    display: grid;
    grid-template-columns: 442px minmax(300px, 768px);
    justify-content: space-between;
    gap: 24px;

    @media (max-width: $xl) {
        grid-template-columns: 1fr;
        gap: 80px;
    }

    @media (max-width: $sm) {
        gap: 32px;
    }
}

.footer__items-container {
    display: flex;
    justify-content: space-between;
    gap: 24px;

    @media (max-width: $sm) {
        flex-wrap: wrap;
        gap: 32px;
    }
}

.footer__header {
    display: flex;
    flex-direction: column;
    gap: 40px;

    @media (max-width: $xl) {
        gap: 32px;
        width: 100%;
    }

    @media (max-width: $sm) {
        gap: 24px;
    }
}

.footer__logo {
    width: 161px;
    height: 37px;
    cursor: pointer;
}

.footer__header-text {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    color: $black;

    @media (max-width: $lg) {
        font-size: 20px;
        line-height: 24px;
    }

    @media (max-width: $sm) {
    }
}

.footer__section {
    display: flex;
    flex-direction: column;
    gap: 24px;

    .document {
        width: 249px;
    }

    @media (max-width: $sm) {
        flex: 0 1 200px;
    }
}

.footer__list-header {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: $blue;
}

.footer__list {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: $black;
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.footer__link {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: $black;

    @media (max-width: $lg) {
        font-size: 14px;
        line-height: 20px;
    }

    &:hover {
        color: $blue-primary;
    }

    &:active {
        color: $black;
        text-decoration: underline;
        text-decoration-color: $black;
        text-underline-offset: 5px;
    }
}

.footer__contacts {
    display: grid;
    grid-template-columns: 80px 1fr;
    grid-template-rows: auto;
    gap: 32px 16px;
    grid-template-areas:
        '. contact'
        'social adress';

    @media (max-width: $xl) {
        grid-template-areas:
            'social contact'
            'adress adress';
    }

    @media (max-width: $lg) {
        margin-top: 8px;
    }

    @media (max-width: $sm) {
        grid-template-columns: 1fr;
        grid-template-areas:
            'social'
            'contact'
            'adress';
    }
}

.footer__contact {
    grid-area: contact;
    display: flex;
    gap: 32px;
    justify-content: flex-end;

    @media (max-width: $sm) {
        justify-content: flex-start;
        flex-wrap: wrap;
    }
}

.footer__contacts-phone {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 8px;

    @media (max-width: $lg) {
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
    grid-area: social;
    display: flex;
    gap: 32px;

    @media (max-width: $lg) {
    }
}

.footer__vk {
    cursor: pointer;
}

.footer__globe {
    cursor: pointer;
}

.footer__mail {
    cursor: pointer;
}

.footer__contacts-geo {
    grid-area: adress;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 8px;

    @media (max-width: $lg) {
        justify-content: flex-start;
        text-align: left;
    }

    @media (max-width: $sm) {
        padding-top: 0;
        text-align: left;
    }
}

.footer__geo {
    padding-right: 8px;
}

.footer__address {
    font-family: 'Inter';
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

.footer__line {
    margin: 0;
    border: 1px solid $blue;
}

.footer__copyright {
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media (max-width: $md) {
        flex-direction: column;
        gap: 16px;
    }
}

.footer__copyright-cot {
    display: flex;
    justify-content: flex-start;
    width: 100%;

    @media (max-width: $md) {
        flex-direction: column;
    }
}

.footer__cot {
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
    font-family: 'Inter';
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
    font-family: 'Inter';
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
}

.footer__copyright-madein {
    display: flex;
    justify-content: flex-end;
    text-align: right;
    align-items: center;
    width: 100%;

    @media (max-width: $md) {
        justify-content: flex-start;
    }
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

.footer-bg {
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 0;
}
</style>
