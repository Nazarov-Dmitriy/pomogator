import { defineStore } from 'pinia'
import axiosR from '@/api/http'

export const useAdminStore = defineStore('adminStore', {
    state: () => ({
        list: null,
        errors: null,
        success: false
    }),
    getters: {
        getUserList(state) {
            return state.list
        },
        getErrors(state) {
            return state.errors
        },
        getSuccess(state) {
            return state.success
        }
    },
    actions: {
        changeRole(data) {
            this.errors = null
            this.success = false

            axiosR
                .put('/admin/change-role', data)
                .then((res) => {
                    if (res.status === 200) {
                        this.success = true
                    }
                })
                .catch((err) => {
                    this.errors = err.data
                })
        },
        getListDb() {
            this.errors = null
            axiosR
                .get('/admin/user-list')
                .then((res) => {
                    if (res.status === 200) {
                        this.list = res.data
                    }
                })
                .catch((err) => {
                    this.errors = err.data
                })
        },
        //
        removeUser(id) {
            this.errors = null
            this.success = false

            axiosR
                .get('/admin/user-remove/' + id)
                .then((res) => {
                    if (res.status === 200) {
                        this.success = true
                    }
                })
                .catch((err) => {
                    this.errors = err.data
                })
        }
    }
})
