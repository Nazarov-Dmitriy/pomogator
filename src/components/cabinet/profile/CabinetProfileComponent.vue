<template>
    <section class="profile">
        <div class="profile__bg">
            <img
                src="../../../assets/images/cabinet/cabinetProfile/profile-bg.svg"
                alt="background image"
                class="profile__bg-img"
            />
        </div>
        <div class="profile__container">
            <div class="profile__wrapper">
                <AddProfilePhoto />
                <ChangeProfilePassword />
            </div>
        </div>
    </section>
</template>
<script setup>
import AddProfilePhoto from './AddProfilePhoto.vue'
import ChangeProfilePassword from './ChangeProfilePassword.vue'
</script>

<style scoped lang="scss">
.profile {
    padding: 60px 80px;
    position: relative;
    z-index: 1;

    @media (max-width: $lg) {
        padding: 40px;
    }
    @media (max-width: $sm) {
        padding: 32px 16px;
    }
}
.profile__bg {
    position: absolute;
    top: 212px;
    left: 0;
    z-index: 0;

    @media (max-width: $lg) {
        top: 220px;
    }
    @media (max-width: $sm) {
        top: 230px;
    }
}
.profile__bg-img {
    @media (max-width: $lg) {
        width: 524px;
        height: 183px;
    }
}
.profile__container {
    max-width: 1280px;
    margin: 0 auto;
}
.profile__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 16px;

    @media (max-width: $sm) {
        flex-direction: column;
        gap: 32px;
    }
}
</style>
