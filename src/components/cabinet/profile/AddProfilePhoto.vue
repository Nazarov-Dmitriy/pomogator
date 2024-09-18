<template>
    <div class="profile__photo">
        <h2 class="profile__photo-title">
            Фотография профиля
        </h2>
        <div
            class="profile__photo-img-wrapper"
            :class="{ 'profile__photo-img-empty': !getUser?.avatar }"
            @click="triggerFileInput"
        >
            <img
                :src="getUrl"
                class="profile__photo-img"
                :class="{ 'profile__photo-img-empty': !getUser?.avatar }"
            >

            <div
                v-if="getUser?.avatar"
                class="profile__photo-hover"
            >
                <p class="profile__photo-hover-text">
                    Сменить фото
                </p>
                <img
                    src="../../../assets/images/cabinet/cabinetProfile/bucket.png"
                    alt="delete png"
                    class="profile__photo-hover-delete"
                    @click.stop="removeImage"
                >
            </div>
        </div>
        <input
            ref="fileInput"
            type="file"
            class="profile__photo-input"
            accept="image/*"
            style="display: none"
            @change="onFileChange"
        >
    </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useUserStore } from '@/stores/userStore';

const userStore = useUserStore();

const getUser = computed(() => {
    return userStore.getUser
})

const fileInput = ref(null)

function triggerFileInput () {
    fileInput.value.click()
}

const getUrl = computed(() => {
    return  getUser.value?.avatar ? import.meta.env.VITE_SERVER_URL + getUser.value?.avatar : null
})



function onFileChange (event) {
    const file = event.target.files[0]
    let formData = new FormData();
    if (file) { 
        formData.append('email', getUser?.value?.email)
        formData.append("avatar", file)
        userStore.userAddAvatar(formData);
    }
}

function removeImage () {
    userStore.userRemoveAvatar()
}
</script>

<style lang="scss" scoped>
.profile__photo {
    display: flex;
    flex-direction: column;
    gap: 32px;

    @media (max-width: $sm) {
        justify-content: center;
        align-items: center;
        width: 100%;
    }
}

.profile__photo-hover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.4s;

    &:hover {
        opacity: 1;
        background: $white;
        opacity: 0.75;
    }
}
.profile__photo-hover-text {
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    text-align: center;
    color: $blue-primary;
}

.profile__photo-hover-delete {
    position: absolute;
    bottom: 24px;
}

.profile__photo-title {
    font-family: 'Kreadon-Demi';
    font-weight: 600;
    font-size: 36px;
    line-height: 42px;
    color: $blue-primary;

    @media (max-width: $lg) {
        font-size: 32px;
        line-height: 40px;
    }
    @media (max-width: $lg) {
        font-size: 30px;
        text-align: left;
        width: 100%;
    }
}
.profile__photo-img-wrapper {
    width: 307px;
    height: 307px;
    cursor: pointer;
    transition: background 0.4s;
    position: relative;
    z-index: 2;
    background: url('/image/cabinet/cabinetProfile/default-img.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    @media (max-width: $lg) {
        width: 248px;
        height: 248px;
    }
    @media (max-width: $sm) {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    &:hover {
        background: url('/image/cabinet/cabinetProfile/hover-img.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 0 0;
    }
}
.profile__photo-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: opacity 0.4s;
    border-radius: 50%;
}
</style>
