<template>
    <div class="header__hero-wrapper">
        <div class="header__hero">
            <img v-if="getUser.avatar" :src="getUrl" alt="" class="header__hero-img" />
            <img
                v-else
                src="/image/cabinet/cabinetProfile/default-avatar.png"
                alt=""
                class="header__hero-img"
            />
        </div>
        <div v-if="getUser" class="header__hero-info">
            <h2 class="header__hero-info-title">
                {{ getUser.surname }} {{ getUser.name }}
                {{ getUser.patronymic }}
            </h2>
            <span>{{ getUser.position }}</span>
        </div>
        <div v-else class="header__hero-info">
            <h2 class="header__hero-info-title">Смирнова Мария Владимировна</h2>
            <span>Педагог</span>
        </div>
        <div v-if="getUser" class="header__info">
            <p class="header__info-text header__info-text--mail">{{ getUser.email }}</p>
            <p v-if="getUser.phone" class="header__info-text header__info-text--number">
                {{ getUser.phone }}
            </p>
        </div>
        <div v-else class="header__info">
            <p class="header__info-text header__info-text--mail">maria@mail.ru</p>
            <p class="header__info-text header__info-text--number">+7 (954) 123-45-67</p>
        </div>
    </div>
</template>

<script setup>
import { computed, watch } from 'vue'
import { useUserStore } from '@/stores/userStore'

const userStore = useUserStore()

const getUser = computed(() => userStore.getUser)

const getUrl = computed(() => {
    return import.meta.env.VITE_SERVER_URL + getUser.value?.avatar
})

watch(getUser, () => {}, { deep: true })
</script>

<style lang="scss" scoped>
.header__hero-wrapper {
    padding: 20px 0 0 0;
    display: grid;
    align-items: center;
    gap: 16px;
    grid-template-rows: 1fr;
    grid-template-columns: auto 1fr 1fr;
    border-top: 1px solid #5b94ea;

    @media (max-width: $lg) {
        border-top: none;

        grid-template-areas:
            'avatar hero-info'
            'info info';
        grid-template-columns: auto 1fr;
    }
    @media (max-width: $sm) {
        display: flex;
        flex-direction: column;
        padding: 0;
    }
}

.header__hero {
    grid-area: 1 / 1 / 2 / 2;
}
.header__hero-img {
    width: 92px;
    height: 92px;
    object-fit: cover;
    border-radius: 50%;
    grid-area: avatar;
}
.header__hero-info {
    grid-area: 1 / 2 / 2 / 3;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    grid-area: hero-info span {
        font-weight: 500;
        font-size: 24px;
        line-height: 32px;
        color: $black;
    }

    span {
        @media (max-width: $sm) {
            text-align: center;
        }
    }
}
.header__hero-info-title {
    font-family: 'Kreadon-Demi';
    font-weight: 600;
    font-size: 36px;
    line-height: 42px;
    color: $blue-primary;

    @media (max-width: $sm) {
        text-align: center;
    }
}
.header__info {
    grid-area: 1 / 3 / 2 / 4;

    @media (max-width: $lg) {
        grid-area: info;
        display: grid;
        grid-column: span 2;
        grid-template-columns: 1fr 1fr;
    }
    @media (max-width: $sm) {
        grid-template-columns: 1fr;
        justify-content: center;
    }
}
.header__info-text {
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    color: $black;
    display: flex;
    gap: 16px;
    align-items: center;
    justify-content: flex-end;
}
.header__info-text--mail {
    text-align: right;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    &::after {
        content: url('../../assets/images/cabinet/cabinetHeader/mail-svg.svg');
        height: 24px;
    }
    @media (max-width: $lg) {
        justify-content: flex-start;

        &::after {
            content: '';
            height: auto;
        }
        &::before {
            content: url('../../assets/images/cabinet/cabinetHeader/mail-svg.svg');
            height: 24px;
        }
    }

    @media (max-width: $sm) {
        justify-content: center;

        &::before {
            content: '';
            height: auto;
        }
        &::after {
            content: url('../../assets/images/cabinet/cabinetHeader/mail-svg.svg');
            height: 24px;
        }
    }
}
.header__info-text--number {
    &::after {
        content: url('../../assets/images/cabinet/cabinetHeader/phone-svg.svg');
    }
    @media (max-width: $lg) {
        position: absolute;
        right: 40px;

        &::after {
            content: url('../../assets/images/cabinet/cabinetHeader/phone-svg.svg');
        }
    }
    @media (max-width: $sm) {
        justify-content: center;
        position: static;
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
