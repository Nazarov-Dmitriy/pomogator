import { defineStore } from 'pinia'
import axiosR from '@/api/http'
import { reactive, ref } from 'vue'

export const useNewsStore = defineStore('newsStore', {
    state: () => ({
        newsList: reactive([]),
        tags: [],
        category: reactive([]),
        categoryId: ref(),
        news: ref(null),
        isSuccess: false,
        errors: null
    }),
    getters: {
        getNewsList(state) {
            return state.newsList
        },
        getTags(state) {
            return state.tags
        },
        getCategory(state) {
            return state.category
        },
        getNews(state) {
            return state.news
        },
        getCategoryId(state) {
            return state.categoryId
        },
        getIsSuccses(state) {
            return state.isSuccess
        },
        getErrors(state) {
            return state.errors
        }
    },
    actions: {
        setCategoryId(id) {
            this.categoryId = id
        },
        getNewsListDb() {
            try {
                axiosR.get(`/news/list`).then((res) => {
                    this.newsList = []
                    this.newsList = [...res.data]
                })
            } catch (err) {
                console.dir(err)
            }
        },
        getTagsDb() {
            try {
                if (this.tags.length === 0) {
                    axiosR.get(`/news/tags`).then((res) => {
                        this.tags = res.data
                    })
                }
            } catch (err) {
                console.dir(err)
            }
        },
        getCategoryDb() {
            try {
                if (this.category.length === 0) {
                    axiosR.get(`/news/category`).then((res) => {
                        this.category = res.data
                    })
                }
            } catch (err) {
                console.dir(err)
            }
        },
        getNewsDb(params) {
            this.isSuccess = false
            axiosR
                .get(`/news/` + params)
                .then((res) => {
                    if (res?.status === 200) {
                        this.news = res.data
                    }
                })
                .catch((err) => {
                    if (err.status === 404) {
                        this.errors = 'not found'
                    }
                })
        },
        getLisParamstDb(param) {
            try {
                this.isSuccess = false

                axiosR
                    .get(`/news/list`, {
                        params: param
                    })
                    .then((res) => {
                        this.isSuccess = true
                        this.newsList = []
                        this.newsList = [...res.data]
                    })
            } catch (err) {
                console.dir(err)
            }
        },
        getListActualDb() {
            axiosR
                .get(`/news/list-actial`)
                .then((res) => {
                    this.newsList = []
                    this.newsList = [...res.data]
                })
                .catch((err) => {
                    this.errors = err.response?.data
                })
        },
        addNewstDb(data) {
            this.isSuccess = false
            this.errors = null
            axiosR
                .post('/news/add', data, {
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
        editNewstDb(data) {
            this.isSuccess = false
            this.errors = null
            axiosR
                .put('/news/edit', data, {
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
        getMyNewstDb(param) {
            this.isSuccess = false
            axiosR
                .get('/news/my-material', {
                    params: param
                })
                .then((res) => {
                    if (res.status === 200) {
                        this.newsList = []
                        this.newsList = [...res.data]
                    }
                })
                .catch((err) => {
                    console.dir(err)
                })
        },
        addShow(id) {
            axiosR
                .get('/news/show/' + id)
                .then(() => {})
                .catch((err) => {
                    console.dir(err)
                })
        },
        setLike(params) {
            axiosR.get('/news/like', {
                params
            })
        },
        async removeArticle(id) {
            let result = await axiosR.get(`/news/remove/${id}`).then((res) => {
                if (res.status == 200) {
                    return true
                }
            })
            return result
        },
        async addFaforite(params) {
            let result = await axiosR
                .get('/news/add-favorite', {
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
                .get('/news/remove-favorite', {
                    params: params
                })
                .then((res) => {
                    if (res.status == 200) {
                        return true
                    }
                })
            return result
        },
        async getFaforite(params) {
            let result = await axiosR
                .get('/news/favorite', {
                    params: params
                })
                .then((res) => {
                    if (res.status == 200) {
                        return res.data
                    }
                })
            return result
        },
        getNewsFavorite(id, params) {
            axiosR
                .get('/news/favorite/user/' + id, {
                    params: params
                })
                .then((res) => {
                    if (res.status == 200) {
                        this.newsList = []
                        this.newsList = [...res.data]
                    }
                })
                .catch((err) => {
                    console.dir(err)
                })
        },
        async setNewsPublished(id) {
            return await axiosR
                .put('/news/published/' + id)
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
