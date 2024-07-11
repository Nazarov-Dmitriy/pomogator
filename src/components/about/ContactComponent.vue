<template>
    <section class="contact">
        <div class="contact__contaner">
            <h2 class="contact__header">
                Контакты
            </h2>
            <div class="contact__item">
                <div class="contact__contacts">
                    <div class="contact__contacts-block">
                        <p class="contact__contacts-name">
                            Телефон
                        </p>
                        <img
                            src="@/assets/icons/footer/phone.svg"
                            alt="phone"
                            @click="some"
                        >
                        <p class="contact__contacts-text">
                            +7 (352) 316-51-90
                        </p>
                    </div>
                    <div class="contact__contacts-block">
                        <p class="contact__contacts-name">
                            Почта
                        </p>
                        <img
                            src="@/assets/icons/footer/mail.svg"
                            alt="mail"
                            @click="some"
                        >
                        <p class="contact__contacts-text">
                            it-pomogator@mail.ru
                        </p>
                    </div>
                    <div class="contact__contacts-block contact__addres">
                        <p class="contact__contacts-name">
                            Адрес
                        </p>
                        <img
                            src="@/assets/icons/footer/geo.svg"
                            alt="geo"
                            @click="some"
                        >
                        <p class="contact__contacts-text">
                            641310, Курганская область, Кетовский муниципальный округ, с. Кетово, ул. Космонавтов, 49А
                        </p>
                    </div>
                </div>
                <div class="contact__map">
                    Карта
                </div>
            </div>
        </div>
        <img
            src="@/assets/images/about/contact-bg-line.svg"
            alt="bg-image"
            class="contact__bg-line"
        >
    </section>
</template>
<script setup>

</script>
<style lang="scss">
.contact {
    width: 100%;
    position: relative;
}

.contact__contaner {
    max-width: 1440px;
    height: auto;
    margin: 0 auto;
    padding: 60px 80px 60px 80px;
    @media (max-width: $lg) {
        padding: 40px;
    }
    @media (max-width: $sm) {
        padding: 32px 16px 32px 16px;
    }
}

.contact__header {
    font-family: "Kreadon-demi";
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 42px;
    color: $blue-primary;
    padding-bottom: 32px;
    @media (max-width: $lg) {
        font-size: 32px;
        line-height: 40px;
    }
}

.contact__item {
    display: flex;
    justify-content: space-between;
    gap: 153px;
    @media (max-width: $lg) {
        flex-direction: column;
        gap: 32px;
    }
}

.contact__contacts-block {
    min-width: 604px;
    display: flex;
    justify-content: flex-start;
    gap: 17px;
    align-items: center;
    @media (max-width: $lg) {
        min-width: 100%;
    }
}

.contact__addres {
    display: flex;
    align-items: flex-start;
}

.contact__contacts {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.contact__contacts-name {
    min-width: 92px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: $blue-primary;
    @media (max-width: $lg) {
        font-size: 14px;
        line-height: 20px;
    }
    @media (max-width: $sm) {
        display: none;
    }
}

.contact__contacts-text {
    padding-left: 45px;
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
        font-size: 16px;
        padding-left: 33px;
    }
}

.contact__map {
    width: 100%;
    height: 337px;
    border: 1px solid black;
    background-color: yellow;
    @media (max-width: $lg) {
        height: 443px;
    }
    @media (max-width: $sm) {
        height: 185px;
    }
}

.contact__bg-line {
    position: absolute;
    top: 140px;
    z-index: -1;

    @media (max-width: $lg) {
        display: none;
    }
}
</style>