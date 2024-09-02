import { defineStore } from 'pinia'

export const useProfileStore = defineStore('profileStore', {
    state: () => ({
        profileImage: '',
        personalData: {
            lastName: '',
            firstName: '',
            phone: '',
            email: '',
            birthDate: '',
            rank: '',
            middleName: '',
            organization: ''
        }
    }),

    actions: {
        setPersonalData(field, value) {
            if (this.personalData.hasOwnProperty(field)) {
                this.personalData[field] = value
            }
        },
        setProfileImage(imageData) {
            this.profileImage = imageData
        },
        removeProfileImage() {
            this.profileImage = ''
        }
    },
    computed: {
        profileStore() {
            return useProfileStore()
        }
    },
    methods: {
        updateName(value) {
            this.profileStore.setPersonalData('firstName', value)
        }
    }
})
