import { defineStore } from 'pinia'
import axiosR from '@/api/http'

export const useCertificatetore = defineStore('certificateStore', {
    state: () => ({
        list: null,
        errors: null
    }),
    getters: {
        getCertificatList(state) {
            return state.list
        }
    },
    actions: {
        getCertificates(id) {
            axiosR
                .get('/certificate/my/' + id)
                .then((res) => {
                    if (res.status === 200) {
                        this.list = res.data
                    }
                })
                .catch((err) => {
                    this.errors = err.data
                })
        }
    }
})
