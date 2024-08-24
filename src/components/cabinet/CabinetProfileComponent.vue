<template>
    <section class="profile">
        <div class="profile__bg">
            <img
                src="../../assets/images/cabinet/cabinetProfile/profile-bg.svg"
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
import AddProfilePhoto from './profile/AddProfilePhoto.vue'
import ChangeProfilePassword from './profile/ChangeProfilePassword.vue'
</script>

<style scoped lang="scss">
.profile {
    padding: 60px 80px;
    position: relative;
    z-index: 1;
}
.profile__bg {
    position: absolute;
    top: 212px;
    left: 0;
    z-index: 0;
}
.profile__container {
    max-width: 1280px;
    margin: 0 auto;
}
.profile__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}
</style>
