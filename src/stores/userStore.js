import { defineStore } from 'pinia'
import axiosR from '@/api/http'

export const useUserStore = defineStore('userStore', {
    state: () => ({
        user: null,
        token: '',
        error: null,
        rigisterStepTwo: false,
        successRes: false
    }),
    getters: {
        getUser(state) {
            return state.user
        },
        getSuccessRes(state) {
            return state.successRes
        },
        getToken(state) {
            return state.token
        },
        getError(state) {
            return state.error
        },
        getRigisterStepTwo(state) {
            return state.rigisterStepTwo
        }
    },
    actions: {
        login(data) {
            axiosR
                .post(`/auth/sign-in`, data)
                .then((res) => {
                    this.token = res.data
                    this.error = null
                    this.user = res.data.user
                    localStorage.setItem('token', res.data.token)
                })
                .catch((err) => {
                    this.error = err.response.data
                })
        },
        registerUser(data, result) {
            axiosR
                .post(`/auth/sign-up`, data)
                .then((res) => {
                    if (res.status === 200) {
                        this.token = res.data.token
                        this.error = null
                        this.rigisterStepTwo = true
                        this.user = res.data.user
                        localStorage.setItem('token', res.data.token)
                        result(200)
                    }
                })
                .catch((err) => {
                    this.error = err.response?.data || 'Ошибка регистрации'
                })
        },
        registerUserInfo(data) {
            axiosR
                .post(`/auth/user-info`, data)
                .then((res) => {
                    this.token = res.data
                    this.error = null
                    this.rigisterStepTwo = false
                    this.user = res.data
                })
                .catch((err) => {
                    this.error = err.response.data
                })
        },
        autoLigon() {
            const token = localStorage.getItem('token')
            if (token) {
                axiosR
                    .post(`/auth/auto-login`, { token: token })
                    .then((res) => {
                        this.user = res.data
                    })
                    .catch(() => {
                        localStorage.removeItem('token')
                    })
            }
        },
        userUpdateInfo(data) {
            axiosR
                .post(`/user/info`, data)
                .then((res) => {
                    this.user = res.data.user
                    if (res.data.token !== '') {
                        localStorage.setItem('token', res.data.token)
                    }
                })
                .catch((err) => {
                    this.error = err.response.data
                })
        },
        userChangePassword(data) {
            axiosR
                .post(`/user/change-password`, data)
                .then(() => {})
                .catch((err) => {
                    this.error = err.response.data
                })
        },
        logout() {
            axiosR
                .get('/auth/logout')
                .then((res) => {
                    if (res.status === 200) {
                        localStorage.removeItem('token')
                        this.user = null
                        this.successRes = true
                    }
                })
                .catch((error) => {
                    console.log('error', error)
                })
        },
        resetSuccessRes() {
            this.successRes = false
        },
        userAddAvatar(data) {
            axiosR
                .post(`/user/avatar/add`, data)
                .then((res) => {
                    this.user.avatar = res.data
                })
                .catch((err) => {
                    this.error = err.response.data
                })
        },
        userRemoveAvatar() {
            axiosR
                .get(`/user/avatar/remove`)
                .then((res) => {
                    if (res.status === 200) {
                        this.user.avatar = null
                    }
                })
                .catch((err) => {
                    this.error = err.response.data
                })
        }
    }
})
