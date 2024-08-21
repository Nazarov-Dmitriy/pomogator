import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'

export const useProfileStore = defineStore('profileStore', () => {
    const profileImage = ref('')

    // Хранилище для личных данных
    const personalData = reactive({
        lastName: '',
        firstName: '',
        phone: '',
        email: '',
        birthDate: '',
        rank: '',
        middleName: '',
        organization: ''
    })

    // Методы для работы с личными данными
    function setPersonalData(field, value) {
        if (personalData.hasOwnProperty(field)) {
            personalData[field] = value
        }
    }

    function setProfileImage(imageData) {
        profileImage.value = imageData
    }

    function removeProfileImage() {
        profileImage.value = ''
    }

    return {
        profileImage,
        personalData,
        setPersonalData,
        setProfileImage,
        removeProfileImage
    }
})
