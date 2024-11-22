import { defineStore } from 'pinia'
import axiosR from '@/api/http'

export const useReviewsStore = defineStore('reviewsStore', {
    state: () => ({
        list: null,
        errors: null,
        success: false
    }),
    getters: {
        getReviewsList(state) {
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
        addReviews(data) {
            this.success = false
            this.errors = null

            axiosR
                .post('/admin/reviews/add', data)
                .then((res) => {
                    if (res.status === 200) {
                        this.success = true
                    }
                })
                .catch((err) => {
                    this.errors = err.data
                })
        },
        ediReviews(data) {
            this.success = false
            this.errors = null
            axiosR
                .put('/admin/reviews/edit', data)
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
                .get('/admin/reviews/list')
                .then((res) => {
                    if (res.status === 200) {
                        this.list = res.data
                    }
                })
                .catch((err) => {
                    this.errors = err.data
                })
        },
        removeReviews(id) {
            this.errors = null
            this.success = false

            axiosR
                .get('/admin/reviews/remove/' + id)
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
