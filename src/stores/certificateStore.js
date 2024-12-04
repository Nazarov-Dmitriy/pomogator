import { defineStore } from 'pinia'
import axiosR from '@/api/http'

export const useCertificatetore = defineStore('certificateStore', {
    state: () => ({
        list: null,
        errors: null,
        webinarUserCertificat: null,
        isSuccess: false
    }),
    getters: {
        getCertificatList(state) {
            return state.list
        },
        getWebinarUserCertificat(state) {
            return state.webinarUserCertificat
        },
        getIsSuccsesCertificat(state) {
            return state.isSuccess
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
        },
        getCertificatUser(params) {
            axiosR
                .get('/certificate/webinar', {
                    params: params
                })
                .then((res) => {
                    if (res.status == 200) {
                        this.webinarUserCertificat = res.data
                    }
                })
                .catch((err) => {
                    this.errors = err.data
                })
        },
        setCertificatUser(params) {
            this.isSuccess = false
            axiosR
                .get('/certificate/add', {
                    params: params
                })
                .then((res) => {
                    if (res.status == 200) {
                        this.isSuccess = true
                    }
                })
                .catch((err) => {
                    this.errors = err.data
                })
        }
    }
})
