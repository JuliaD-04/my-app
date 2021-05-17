import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers: {
        "API-KEY": "8b08a752-17ea-4da9-a24d-35058cc67ef8"
    }
});
//для Users
export const usersAPI = {
    getAllUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    follow(userId) {
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    }
}















//доделать с другими контейнерными компонентами
// export const getUsers2 = (currentPage = 1, pageSize = 10) => {
//     return instance.get(`/follow?page=${currentPage}&count=${pageSize}`)
//         .then(response => {
//             return response.data;
//         });
// }

