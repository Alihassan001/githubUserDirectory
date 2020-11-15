import { BASE_URL } from './api'

const userApi = {
    getAllUsers : () => {
        return fetch(BASE_URL)
    },
    searchUser : (search) => {
        return fetch(`${BASE_URL}/${search}`)
    }
}

export default userApi