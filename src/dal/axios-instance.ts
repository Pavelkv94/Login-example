import axios from "axios";


export const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: { "API-KEY": "92cf59a3-3b12-407b-a573-626b86aed9d2" }
});

export const authAPI = {
    me() {
        return axiosInstance.get(`auth/me`);
    }
}