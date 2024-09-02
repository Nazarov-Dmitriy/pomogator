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
                    <yandex-map
                        v-model="map"
                        :settings="{
                            location: {
                                center: [65.337193, 55.350812],
                                zoom: 15,
                            },
                            showScaleInCopyrights: true,
                        }"
                    >
                        <yandex-map-default-scheme-layer />
                        <yandex-map-default-features-layer />
                        <yandex-map-marker
                            position="top left-center"
                            :settings="marker"
                        >
                            <div
                                style="position: relative; width: 60px; height: 68px;"
                                class="marker"
                            >
                                <svg
                                    width="60"
                                    height="68"
                                    viewBox="0 0 60 68"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                >
                                    <defs>
                                        <path
                                            id="ae96eeecd750ec2a83543f00c9bc789d__b"
                                            d="M23.51 51.523a.5.5 0 0 1-.5.477c-.29 0-.51-.21-.52-.477-.145-3.168-1.756-5.217-4.832-6.147C7.53 42.968 0 33.863 0 23 0 10.297 10.297 0 23 0s23 10.297 23 23c0 10.863-7.53 19.968-17.658 22.376-3.076.93-4.687 2.98-4.83 6.147z"
                                        />
                                        <filter
                                            id="ae96eeecd750ec2a83543f00c9bc789d__a"
                                            x="-21.7%"
                                            y="-15.4%"
                                            width="143.5%"
                                            height="138.5%"
                                            filterUnits="objectBoundingBox"
                                        >
                                            <feGaussianBlur
                                                in="SourceGraphic"
                                                stdDeviation="3"
                                            />
                                            <feOffset dy="2" />
                                            <feComponentTransfer>
                                                <feFuncA
                                                    type="linear"
                                                    slope=".3"
                                                />
                                            </feComponentTransfer>
                                        </filter>
                                    </defs>
                                    <g
                                        fill="none"
                                        fill-rule="evenodd"
                                    >
                                        <g
                                            fill-rule="nonzero"
                                            transform="translate(7 5)"
                                            fill="#f43"
                                        >
                                            <use
                                                filter="url(#ae96eeecd750ec2a83543f00c9bc789d__a)"
                                                xlink:href="#ae96eeecd750ec2a83543f00c9bc789d__b"
                                            />
                                            <use xlink:href="#ae96eeecd750ec2a83543f00c9bc789d__b" />
                                        </g>
                                        <path
                                            d="M30 68c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"
                                            fill="#fff"
                                            fill-rule="nonzero"
                                        />
                                        <path
                                            d="M30 66a2 2 0 1 0 .001-3.999A2 2 0 0 0 30 66z"
                                            fill="#f43"
                                        />
                                    </g>
                                </svg>
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M10 18.2V23h11.4a.6.6 0 0 0 .6-.6V8.6a.6.6 0 0 0-.6-.6h-4.954l-.158 2H20v1h-3.79l-.159 2H20v1h-4.028l-.373 4.715a.303.303 0 0 1-.323.284.306.306 0 0 1-.276-.309V2.4a.4.4 0 0 0-.4-.4H14v-.6a.4.4 0 0 0-.4-.4H3.4a.4.4 0 0 0-.4.4V2h-.6a.4.4 0 0 0-.4.4v20a.6.6 0 0 0 .6.6H7v-4.8c0-.11.09-.2.2-.2h2.6c.11 0 .2.09.2.2zM5.5 15V9h2v6h-2zm4-6v6h2V9h-2zm-4-2V4h2v3h-2zm4-3v3h2V4h-2zM17 17v-1h3v1h-3z"
                                        fill="#fff"
                                    />
                                    <path
                                        d="M16.526 7l.079-1H19.6c.22 0 .4.18.4.4V7h-3.474z"
                                        fill="#fff"
                                    />
                                </svg>
                                <p class="marker__title">
                                    {{ marker.title }}
                                </p>
                            </div>
                        </yandex-map-marker>
                    </yandex-map>
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
import { shallowRef } from 'vue';
import { YandexMap, YandexMapDefaultSchemeLayer, YandexMapMarker, YandexMapDefaultFeaturesLayer } from 'vue-yandex-maps';

const handleClick = (event) => console.log(event);
const marker =
{
    coordinates: [65.337193, 55.350812],
    title: 'ул. Космонавтов, 49А',
    onClick: handleClick,
    draggable: true,
}


const map = shallowRef(null)
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
    display: flex;
    flex-direction: column;
    gap: 32px;
    box-sizing: border-box;

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

    @media (max-width: $lg) {
        font-size: 32px;
        line-height: 40px;
    }
}

.contact__item {
    display: flex;
    justify-content: space-between;
    gap: 48px;

    @media (max-width: $xl) {
        flex-direction: column;
        gap: 32px;
    }
}

.contact__contacts-block {
    max-width: 604px;
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
    max-width: 523px;

    @media (max-width: $xl) {
        max-width: 100%;
        height: 443px;
    }

    @media (max-width: $sm) {
        aspect-ratio: 1.55 / 1;
        height: auto;
    }
}

.contact__bg-line {
    position: absolute;
    top: 140px;
    z-index: -1;

    @media (max-width: $xl) {
        display: none;
    }
}

.marker {
    & svg:nth-child(2) {
        position: absolute;
        top: 16px;
        left: 18px;
    }

    &__title {
        background: hsla(0, 0%, 100%, .9);
        display: inline-block;
        vertical-align: middle;
        position: relative;
        padding: 3px 6px 4px;
        border-radius: 6px;
        line-height: inherit;
        height: auto;
        width: 150px;
        color: #333;
        position: absolute;
        top: 50%;
        transform: translateY(-25%);
        font-size: 14px;
        line-height: 16px
    }
}
</style>