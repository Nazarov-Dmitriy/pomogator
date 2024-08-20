import axios from "axios";

const axiosR = axios.create({
    baseURL: import.meta.env.VITE_SERVER_URL,
    headers: {
        'Access-Control-Allow-Origin': '*',
        "Access-Control-Allow-Methods": "*",
        // 'Content-Type': 'application/json',
        // 'Access-Control-Allow-Credentials':true
    },
})

// axiosR.interceptors.request.use(
//     config => {
//         config.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
//         config.headers['X-Requested-With'] = `XMLHttpRequest`;
//         return config;
//     },
//     error => {
//         return Promise.reject(error);
//     }
// );

export default axiosR