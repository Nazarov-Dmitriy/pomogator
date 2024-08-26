<template>
    <div class="profile__photo">
        <h2 class="profile__photo-title">Фотография профиля</h2>
        <div
            :class="{ 'profile__photo-img-empty': !hasCustomImage }"
            class="profile__photo-img-wrapper"
            @click="triggerFileInput"
        >
            <img
                :src="profileImage"
                class="profile__photo-img"
                :class="{ 'profile__photo-img-empty': !hasCustomImage }"
            />

            <div v-if="hasCustomImage" class="profile__photo-hover">
                <p class="profile__photo-hover-text">Сменить фото</p>
                <img
                    src="../../../assets/images/cabinet/cabinetProfile/bucket.png"
                    alt="delete png"
                    class="profile__photo-hover-delete"
                    @click.stop="removeImage"
                />
            </div>
        </div>
        <input
            type="file"
            ref="fileInput"
            class="profile__photo-input"
            @change="onFileChange"
            accept="image/*"
            style="display: none"
        />
    </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useProfileStore } from '/src/stores/useProfileStore'

const store = useProfileStore()

const fileInput = ref(null)

const profileImage = computed(() => store.profileImage)
const hasCustomImage = computed(() => store.profileImage !== '')

function triggerFileInput() {
    fileInput.value.click()
}

function onFileChange(event) {
    const file = event.target.files[0]
    if (file) {
        const reader = new FileReader()
        reader.onload = (e) => {
            store.setProfileImage(e.target.result)
        }
        reader.readAsDataURL(file)
    }
}

function removeImage() {
    store.removeProfileImage()
}
</script>

<style lang="scss" scoped>
.profile__photo {
    display: flex;
    flex-direction: column;
    gap: 32px;
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
}
.profile__photo-img-wrapper {
    width: 307px;
    height: 307px;
    cursor: pointer;
    transition: background 0.4s;
    position: relative;
    z-index: 2;
    background: url('../../../public/image/cabinet/cabinetProfile/default-img.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    &:hover {
        background: url('../../../public/image/cabinet/cabinetProfile/hover-img.png');
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
