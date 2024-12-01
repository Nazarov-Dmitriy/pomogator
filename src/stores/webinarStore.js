import { defineStore } from 'pinia'
import axiosR from '@/api/http'
import { reactive, ref } from 'vue'

export const useWebinarStore = defineStore('webinarStore.js', {
    state: () => ({
        list: reactive([]),
        webinar: ref(null),
        isSuccess: false,
        errors: null
    }),
    getters: {
        getWebinarList(state) {
            return state.list
        },
        getWebinar(state) {
            return state.webinar
        },
        getIsSuccsesWebinar(state) {
            return state.isSuccess
        },
        getWebinarErrors(state) {
            return state.errors
        }
    },
    actions: {
        addWebinarDb(data) {
            this.isSuccess = false
            this.errors = null
            axiosR
                .post('/webinar/add', data, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                })
                .then((res) => {
                    if (res.status === 200) {
                        this.isSuccess = true
                    }
                })
                .catch((err) => {
                    this.errors = err.data
                })
        },
        getLisParamstDb(param) {
            try {
                axiosR
                    .get(`/webinar/list`, {
                        params: param
                    })
                    .then((res) => {
                        this.list = []
                        this.list = [...res.data]
                    })
            } catch (err) {
                console.dir(err)
            }
        },
        getWebinarDb(params) {
            axiosR
                .get(`/webinar/` + params)
                .then((res) => {
                    if (res?.status === 200) {
                        this.webinar = res.data
                    }
                })
                .catch((err) => {
                    if (err.status === 404) {
                        this.errors = 'not found'
                    }
                })
        },
        addShow(id) {
            axiosR
                .get('/webinar/show/' + id)
                .then(() => {})
                .catch((err) => {
                    console.dir(err)
                })
        },
        setLike(params) {
            axiosR.get('/webinar/like', {
                params
            })
        },
        async getFaforite(params) {
            let result = await axiosR
                .get('/webinar/favorite', {
                    params: params
                })
                .then((res) => {
                    if (res.status == 200) {
                        return res.data
                    }
                })
            return result
        },
        async addFaforite(params) {
            let result = await axiosR
                .get('/webinar/add-favorite', {
                    params: params
                })
                .then((res) => {
                    if (res.status == 200) {
                        return true
                    }
                })
            return result
        },
        async removeFaforite(params) {
            let result = await axiosR
                .get('/webinar/remove-favorite', {
                    params: params
                })
                .then((res) => {
                    if (res.status == 200) {
                        return true
                    }
                })
            return result
        },
        getWebinarFavorite(id, params) {
            axiosR
                .get('/webinar/favorite/user/' + id, {
                    params: params
                })
                .then((res) => {
                    if (res.status == 200) {
                        this.list = []
                        this.list = [...res.data]
                    }
                })
                .catch((err) => {
                    console.dir(err)
                })
        },
        editWebinarDb(data) {
            this.isSuccess = false
            this.errors = null
            axiosR
                .put('/webinar/edit', data, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                })
                .then((res) => {
                    if (res.status === 200) {
                        this.isSuccess = true
                    }
                })
                .catch((err) => {
                    this.errors = err.response.data
                })
        },
        async removeWebinar(id) {
            let result = await axiosR.get(`/webinar/remove/${id}`).then((res) => {
                if (res.status == 200) {
                    return true
                }
            })
            return result
        },
        async subsribeWebinar(params) {
            let result = await axiosR
                .get(`/webinar/subscribe`, {
                    params: params
                })
                .then((res) => {
                    if (res.status == 200) {
                        return true
                    }
                })
            return result
        },
        getSubsribeWebinar(params) {
            return axiosR
                .get('/webinar/get-subscribe', {
                    params: params
                })
                .then((res) => {
                    if (res.status == 200) {
                        return res.data
                    }
                })
        },
        setComplitedStatusWebinar(params) {
            this.isSuccess = false
            this.errors = null
            axiosR
                .get('/webinar/set-status', {
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
        },
        async setNewsPublished(id) {
            return await axiosR
                .put('/webinar/published/' + id)
                .then((res) => {
                    if (res.status == 200) {
                        return true
                    }
                })
                .catch((err) => {
                    console.dir(err)
                })
        }
    }
})
