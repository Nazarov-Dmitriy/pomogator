import { defineStore } from 'pinia'
import axiosR from '@/api/http'

export const useSubsribeStore = defineStore('subsribeStore', {
    state: () => ({
        subscribe: ''
    }),
    getters: {
        getSubscribe(state) {
            return state.subscribe
        }
    },
    actions: {
        addSubscribe(email) {
            this.subscribe = ''
            axiosR
                .post('/subscribe', { email })
                .then((res) => {
                    if (res.status === 200) {
                        console.log(res)

                        this.subscribe = res.data
                    }
                })
                .catch((err) => {
                    this.errors = err.response.data
                })
        },
        setSubsribe() {
            this.subscribe = ''
        }
    }
})
