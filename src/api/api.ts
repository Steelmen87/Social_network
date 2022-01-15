import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "4e5aee81-42dd-43de-87fa-a601a9c1e88b"

    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    /*getAuth() {
        return instance.get(`auth/me`)
            .then(data => data.data);
    },*/
    getProfile(userId: number) {
        return profileAPI.getProfile(userId);
    }

}
export const profileAPI = {
    getProfile(userId: number) {
        return instance.get(`profile/` + userId)
            .then(data => data.data);
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/` + userId)
            .then(res => res.data);
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status: status})
            .then(res => res.data);
    },
    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append("image", photoFile)
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profile) {
        return instance.put(`profile`, profile)
            .then(res => res.data);
    }
}
export const authAPI = {
    me() {
        return instance.get(`auth/me`)
            .then(data => data.data);
    },
    login(email: string, password: string, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}
export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`)
    }
}

