import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'

export const useProfileStore = defineStore('profileStore', () => {
    const profileImage = ref('')

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
