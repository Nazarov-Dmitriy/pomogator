import { defineStore } from 'pinia'
import axiosR from '@/api/http'

export const useSendMessageStore = defineStore('sendMessageStore', {
    state: () => ({
        status: null,
        errors: null
    }),
    getters: {
        getStatus(state) {
            return state.status
        }
    },
    actions: {
        sendFaq(params) {
            this.status = ''
            axiosR
                .post('/send-mail/faq', { ...params })
                .then((res) => {
                    if (res.status === 200) {
                        this.status = 200
                        this.errors - null
                    }
                })
                .catch((err) => {
                    this.errors = err.response.data
                })
        },
        sendOfferMaterial(data) {
            this.status = ''
            axiosR
                .post('/send-mail/material', data)
                .then((res) => {
                    if (res.status === 200) {
                        this.status = 200
                        this.errors - null
                    }
                })
                .catch((err) => {
                    this.errors = err.response.data
                })
        },
        setStatusNull() {
            this.status = null
        }
    }
})
