import { defineStore } from "pinia";
import axiosR from '@/api/http';

import { reactive, ref } from "vue";

export const useNewsStore = defineStore("schoolsStore", {
    state: () => ({
        newsList: reactive([]),
        tags: reactive([]),
        category: reactive([]),
        categoryId: ref(),
        news: ref(null)
    }),
    getters: {
        getNewsList (state) {
            return state.newsList;
        },
        getTags (state) {
            return state.tags;
        },
        getCategory (state) {
            return state.category;
        },
        getNews (state) {
            return state.news;
        },
        getCategoryId (state) {
            return state.categoryId;
        },
    },
    actions: {
        setCategoryId (id) {
            this.categoryId = id
        },
        getNewsListDb () {
            try {
                axiosR.get(`/news/list`).then((res) => {
                    this.newsList = [];
                    this.newsList = [...res.data];

                });
            } catch (err) {
                console.log(err);
            }
        },
        getTagsDb () {
            try {
                if (this.tags.length === 0) {
                    axiosR.get(`/news/tags`).then((res) => {
                        this.tags = res.data;
                    });
                }
            } catch (err) {
                console.log(err);
            }
        },
        getCategoryDb () {
            try {
                if (this.category.length === 0) {
                    axiosR.get(`/news/categoty`).then((res) => {
                        this.category = res.data;
                    });
                }
            } catch (err) {
                console.log(err);
            }
        },
        getNewsDb (params) {
            try {
                axiosR.get(`/news/` + params).then((res) => {
                    this.news = res.data;
                });
            } catch (err) {
                console.log(err);
            }
        },
        getLisParamstDb (param,) {
            console.log(param);
            
            try {
                axiosR.get(`/news/list`,
                    {
                        params: param
                    }
                ).then((res) => {
                    this.newsList = [];
                    this.newsList = [...res.data];

                });
            } catch (err) {
                console.log(err);
            }
        },
        addNewstDb (data, result) {
            axiosR.post('/news/add', data,
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                })
                .then((res) => {
                    if (res.status === 200) {
                        result("Статья успешно добавлена")
                    }
                }
                )
                .catch(err => {
                    console.log(err);
                })        },
    },
});

