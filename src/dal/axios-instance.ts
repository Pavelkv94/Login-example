import axios from "axios";


export const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    //headers: { "API-KEY": "1234567890" }
});

export const authAPI = {
    me() {
        return axiosInstance.get(`auth/me`);
    }
}