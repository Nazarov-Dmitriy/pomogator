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

                <ul class="header__nav">
                    <li class="header__item">
                        <router-link
                            to="/about"
                            class="header__link"
                        >
                            О нас
                        </router-link>
                    </li>
                    <li class="header__item">
                        <router-link
                            to="/blog"
                            class="header__link"
                        >
                            Блог
                        </router-link>
                    </li>
                    <li class="header__item">
                        <router-link
                            to="/webinar"
                            class="header__link"
                        >
                            Вебинар
                        </router-link>
                    </li>
                </ul>
                <div class="header__block">
                    <input
                        type="text"
                        class="header__search"
                        placeholder="Подсказка"
                    >
                    <BtnComponent class="btn__header">
                        Войти
                    </BtnComponent>
                </div>
                <div class="header__trend">
                    <div class="header__trend-decor" />
                    <router-link
                        to="/trend/khimiya/"
                        class="header__trend-item"
                        active-class="active"
                    >
                        Химия
                    </router-link>
                    <router-link
                        to="/trend/fizika"
                        class="header__trend-item"
                        active-class="active"
                    >
                        Физика
                    </router-link>
                    <router-link
                        to="/trend/biologiya"
                        class="header__trend-item"
                        active-class="active"
                    >
                        Биология
                    </router-link>
                    <router-link
                        to="/trend/robototekhnika"
                        class="header__trend-item"
                        active-class="active"
                    >
                        Робототехника
                    </router-link>
                    <div class="header__trend-decor" />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { useRouter } from 'vue-router';
import BtnComponent from './btns/BtnComponent.vue'
import { ref } from 'vue'

const btnMenu = ref(false)
const menuActive = ref(false)
const router = useRouter()

function setMenuAcive () {
    btnMenu.value = !btnMenu.value
    menuActive.value = !menuActive.value
}

function mainLink () {
    router.push('/')
}

</script>
<style lang="scss">
.header__contaner {
    background: $gradient-background;
    position: relative;
    z-index: 9000;
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
    grid-template-columns: 161px 212px minmax(300px, 636px);
    grid-template-rows: 40px auto;
    align-items: center;
    justify-content: space-between;
    grid-template-areas:
        'logo menu block'
        'trend trend trend';
    gap: 14px 24px;

    &__mobile {
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
        grid-template-areas:
            'block'
            'trend'
            'menu';
        gap: 20px 0;

        &.menu-active {
            display: grid;
        }
    }

    @media (max-width: $sm) {
        gap: 16px 0;
    }

    &>.header__logo {
        @media (max-width: $lg) {
            display: none;
        }
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
        padding: 20px 40px;
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
        justify-content: space-between;
    }

    @media (max-width: $sm) {
        flex-direction: column;
        gap: 16px;
        align-items: center
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

.header__block {
    grid-area: block;
    display: flex;
    gap: 16px;

    @media (max-width: $sm) {
        flex-wrap: wrap;
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
        flex: 1 0 65%
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

    &.active, &.router-link-exact-path-active {
        background: $blue-primary;
    }

    &:hover{
        background: #4360F8;
    }
}

.btn__header {
    @media (max-width: $sm) {
        flex: 1 0 100px;
    }
}
</style>
