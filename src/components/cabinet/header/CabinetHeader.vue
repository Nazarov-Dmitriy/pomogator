<template>
    <div class="header__contaner">
        <div class="header__wrapper">
            <div class="header__mobile">
                <img
                    src="@/assets/icons/logo.svg"
                    alt="logo"
                    class="header__logo"
                    @click="mainLink()"
                >
                <div
                    class="hamburger"
                    :class="{ 'is-active': btnMenu }"
                    @click="setMenuAcive()"
                >
                    <span class="line" />
                    <span class="line" />
                    <span class="line" />
                </div>
            </div>
            <div
                class="header"
                :class="{ 'menu-active': menuActive }"
            >
                <img
                    src="@/assets/icons/logo.svg"
                    alt="logo"
                    class="header__logo"
                    @click="mainLink()"
                >
                <span />
                <div class="header__block">
                    <div class="header__exit">
                        <span>Выход</span>
                        <svg
                            width="28"
                            height="28"
                            viewBox="0 0 28 28"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M13.9945 2H2V26H14"
                                stroke="#5B94EA"
                                stroke-width="3"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M20 20L26 14L20 8"
                                stroke="#5B94EA"
                                stroke-width="3"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M8.66667 13.9941H26"
                                stroke="#5B94EA"
                                stroke-width="3"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </div>
                </div>
                <div class="header__hero">
                    <img
                        v-if="userStore.profileImage"
                        :src="userStore.profileImage"
                        alt=""
                        class="header__hero-img"
                    >
                    <img
                        v-else
                        src="../../../assets/images/cabinet/cabinetHeader/default-avata.png"
                        alt=""
                        class="header__hero-img"
                    >
                    <div
                        v-if="
                            userStore.personalData.lastName &&
                                userStore.personalData.firstName &&
                                userStore.personalData.middleName
                        "
                        class="header__hero-info"
                    >
                        <h2 class="header__hero-info-title">
                            {{ userStore.personalData.lastName }}
                            {{ userStore.personalData.firstName }}
                            {{ userStore.personalData.middleName }}
                        </h2>
                        <span>{{ userStore.personalData.rank }}</span>
                    </div>
                    <div
                        v-else
                        class="header__hero-info"
                    >
                        <h2 class="header__hero-info-title">
                            Смирнова Мария Владимировна
                        </h2>
                        <span>Педагог</span>
                    </div>
                </div>
                <div
                    v-if="userStore.personalData.email && userStore.personalData.phone"
                    class="header__info"
                >
                    <a
                        href="#"
                        class="header__info-text header__info-text--mail"
                    >{{
                        userStore.personalData.email
                    }}</a>
                    <a
                        href="#"
                        class="header__info-text header__info-text--number"
                    >{{
                        userStore.personalData.phone
                    }}</a>
                </div>
                <div
                    v-else
                    class="header__info"
                >
                    <a
                        href="#"
                        class="header__info-text header__info-text--mail"
                    >maria@mail.ru</a>
                    <a
                        href="#"
                        class="header__info-text header__info-text--number"
                    >+7 (954) 123-45-67</a>
                </div>
                <div class="header__trend">
                    <div class="header__trend-decor" />
                    <router-link
                        to="/lk/profile/"
                        class="header__trend-item"
                        active-class="active"
                    >
                        Мой профиль
                    </router-link>
                    <router-link
                        to="/lk/favorites"
                        class="header__trend-item"
                        active-class="active"
                    >
                        Избранное
                    </router-link>
                    <router-link
                        to="/lk/materials"
                        class="header__trend-item"
                        active-class="active"
                    >
                        Мои материалы
                    </router-link>
                    <router-link
                        to="/lk/certificates"
                        class="header__trend-item"
                        active-class="active"
                    >
                        Мои сертификаты
                    </router-link>
                    <div class="header__trend-decor" />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
import { computed, ref, watch } from 'vue'
import { useUserStore } from '@/stores/userStore';

const userStore = useUserStore();

const btnMenu = ref(false)
const menuActive = ref(false)
const router = useRouter()

const getUser = computed(() => {
    return userStore.getUser
})

function setMenuAcive () {
    btnMenu.value = !btnMenu.value
    menuActive.value = !menuActive.value
}

function mainLink () {
    router.push('/')
}

watch(getUser, ()=>{
}, {deep: true})

</script>
<style lang="scss" scoped>
.header__contaner {
    background: $gradient-background;
    position: relative;
}

.header__wrapper {
    max-width: 1440px;
    margin: 0 auto;
    padding: 20px 80px 0 80px;
    box-sizing: border-box;

    @media (max-width: $lg) {
        padding: 20px 40px;
        border-bottom: 2px solid $blue;
        height: 77px;
    }

    @media (max-width: $sm) {
        padding: 8px 16px;
        height: 40px;
    }
}

.header {
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: 40px auto;
    align-items: center;
    justify-content: space-between;
    grid-template-areas:
        'logo menu block'
        'hero  hero info'
        'trend trend trend';
    gap: 14px 24px;
    position: relative;

    &::after {
        content: '';
        width: 100%;
        height: 1px;
        background-color: $blue;
        position: absolute;
        top: 25%;
    }

    span &__mobile {
        display: flex;
        justify-content: space-between;
        align-items: center;
        display: none;

        @media (max-width: $lg) {
            display: flex;
        }
    }

    @media (max-width: $lg) {
        display: none;
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        align-items: center;
        justify-content: space-between;
        gap: 20px 20px;

        &.menu-active {
            display: grid;
        }
    }

    @media (max-width: $sm) {
        grid-template-areas:
            'block'
            'trend '
            'menu';
        gap: 16px 0;
    }

    & > .header__logo {
        @media (max-width: $lg) {
            display: none;
        }
    }
}

.header__hero {
    margin-top: 24px;
    display: grid;
    grid-template-columns: 92px 1fr;
    align-items: center;
    gap: 16px;
    grid-area: hero;
}
.header__hero-img {
    width: 92px;
    height: 92px;
    object-fit: cover;
    border-radius: 50%;
}
.header__hero-info {
    display: flex;
    flex-direction: column;
    gap: 18px;

    span {
        font-weight: 500;
        font-size: 24px;
        line-height: 32px;
        color: $black;
    }
}
.header__hero-info-title {
    font-family: 'Kreadon-Demi';
    font-weight: 600;
    font-size: 36px;
    line-height: 42px;
    color: $blue-primary;
}
.header__info {
    display: grid;
    grid-area: info;
    gap: 16px;
}
.header__info-text {
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    color: $black;
    display: flex;
    gap: 16px;
    align-items: center;
}
.header__info-text--mail {
    text-align: right;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    &::after {
        content: url(../../../assets/images/cabinet/cabinetHeader/mail-svg.svg);
        height: 24px;
    }
}
.header__info-text--number {
    &::after {
        content: url(../../../assets/images/cabinet/cabinetHeader/phone-svg.svg);
    }
}

.menu-active {
    @media (max-width: $lg) {
        position: absolute;
        background: $gradient-background;
        top: 77px;
        left: 0;
        max-width: 100%;
        width: 100%;
        display: grid;
        padding: 20px 40px 0 40px;
        box-sizing: border-box;
        z-index: 9999;
        border-bottom: 2px solid $blue;
    }

    @media (max-width: $sm) {
        top: 40px;
        padding: 16px;
    }
}

.hamburger {
    width: 24px;
    height: 24px;
    padding: 4px 1px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.hamburger .line {
    width: 22px;
    height: 2px;
    background-color: $black;
    display: block;
    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}

.hamburger:hover {
    cursor: pointer;
}

.hamburger.is-active .line:nth-child(2) {
    opacity: 0;
}

.hamburger.is-active .line:nth-child(1) {
    -webkit-transform: translateY(7px) rotate(45deg);
    -ms-transform: translateY(7px) rotate(45deg);
    -o-transform: translateY(7px) rotate(45deg);
    transform: translateY(7px) rotate(45deg);
}

.hamburger.is-active .line:nth-child(3) {
    -webkit-transform: translateY(-7px) rotate(-45deg);
    -ms-transform: translateY(-7px) rotate(-45deg);
    -o-transform: translateY(-7px) rotate(-45deg);
    transform: translateY(-7px) rotate(-45deg);
}

.header__logo {
    grid-area: logo;
    width: 161px;
    height: 37px;
    cursor: pointer;

    @media (max-width: $sm) {
        width: 106px;
        height: 24px;
    }
}

.header__nav {
    grid-area: menu;
    display: flex;
    gap: 32px;

    @media (max-width: $lg) {
        justify-content: flex-start;
    }

    @media (max-width: $sm) {
        flex-direction: column;
        gap: 16px;
        align-items: center;
    }
}

.header__link {
    font-style: 16px;
    color: $black;
    transition: all 0.3s;

    &:hover {
        color: $blue-primary;
    }

    &:active {
        color: $black;
        text-decoration: underline;
        text-decoration-color: $black;
        text-underline-offset: 5px;
    }

    &.router-link-active {
        color: $black;
        text-decoration: underline;
        text-decoration-color: $black;
        text-underline-offset: 5px;
    }
}

.header__exit {
    display: flex;
    align-items: center;
    gap: 20px;
    cursor: pointer;

    span {
        font-weight: 500;
        font-size: 24px;
        line-height: 32px;
        color: $blue;
    }
}

.header__search {
    box-sizing: border-box;
    background: url('@/assets/icons/header/search.svg');
    background-repeat: no-repeat;
    background-position: right 16px top 8px;
    padding: 10px 56px 10px 16px;
    border: 2px solid $blue;
    border-radius: 32px;
    background-size: 24px;
    color: $blue;
    max-width: 524px;
    width: 100%;
    font-size: 16px;
    height: 40px;

    &::placeholder {
        color: $blue;
    }

    &:hover,
    &:active,
    &:focus {
        background: url('@/assets/icons/header/search-hover.svg');
        background-repeat: no-repeat;
        background-position: right 16px top 8px;
        border: 2px solid $blue-primary;
        color: $blue-primary;

        &::placeholder {
            color: $blue-primary;
        }
    }

    @media (max-width: $lg) {
        max-width: 100%;
    }

    @media (max-width: $sm) {
        flex: 1 0 65%;
    }
}

.header__trend {
    grid-area: trend;
    width: calc(100% + 160px);
    position: relative;
    left: -80px;
    background: $white;
    display: flex;
    gap: 2px;

    @media (max-width: $lg) {
        left: -40px;
        width: calc(100% + 80px);
    }

    @media (max-width: $sm) {
        left: -16px;
        width: calc(100% + 32px);
        flex-wrap: wrap;
    }
}

.header__trend-decor {
    width: 80px;
    background: $blue;

    @media (max-width: $lg) {
        display: none;
    }
}

.header__trend-item {
    display: flex;
    flex-grow: 1;
    background: $blue;
    height: 56px;
    align-items: center;
    justify-content: center;
    color: $white;
    cursor: pointer;
    flex-basis: 319px;

    @media (max-width: $sm) {
        flex: 1 0 235px;
    }

    &.active,
    &.router-link-exact-path-active {
        background: $blue-primary;
    }

    &:hover {
        background: $blue-primary;
    }
}

.btn__header {
    @media (max-width: $sm) {
        flex: 1 0 100px;
    }
}
</style>
