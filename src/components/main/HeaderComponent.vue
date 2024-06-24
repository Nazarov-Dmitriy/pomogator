<template>
    <div class="header__contaner">
        <div class="header">
            <img src="@/assets/icons/logo.svg" alt="logo" class="header__logo">
            <ul class="header__nav">
                <li class="header__item">
                    <a href="" class="header__link"> О нас</a>
                </li>
                <li class="header__item"> <a href="" class="header__link"> Блог</a>


                </li>
                <li class="header__item"> <a href="" class="header__link">Вебинар</a>

                </li>
            </ul>
            <div class="header__block">
                <input type="text" class="header__search" placeholder="Подсказка">
                <BtnGradient>Войти</BtnGradient>
            </div>
        </div>
    </div>
</template>
<script setup>
import BtnGradient from '../btns/BtnGradient.vue';


</script>
<style lang="scss" scoped>
.header__contaner {
    background: $gradient-background;
}

.header {
    max-width: 1440px;
    margin: 0 auto;
    padding: 20px 80px 14px 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.header__logo {
    width: 161px;
    height: 37px;
}

.header__nav {
    display: flex;
    gap: 32px;
}

.header__link {
    font-style: 16px;
    color: $black;
    transition: all 0.3s;

    &:hover {
        color: $blue-primary
    }

    &:active {
        color: $black;
        text-decoration: underline;
        text-decoration-color: $black;
        text-underline-offset: 5px;
    }
}

.header__block {
    display: flex;
    gap: 16px;
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
}
</style>