 import TokenService from './token-service'
import config from '../config'

const TypeApiService = {
    getTypes(user_id) {
        return fetch(`${config.API_ENDPOINT}/types/${user_id}`, {
            headers: {
                'authorization': `basic ${TokenService.getAuthToken()}`,
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },

    getType(user_id, list_id) {
        return fetch(`${config.API_ENDPOINT}/types/${user_id}/:?${list_id}`, {
            headers: {
                'authorization': `basic ${TokenService.getAuthToken()}`,
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },

    postType(user_id, title) {
        return fetch(`${config.API_ENDPOINT}/types/${user_id}`, {
            method: 'POST',
            headers: {
                'authorization': `basic ${TokenService.getAuthToken()}`,
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                user_id,
                title,
            }),
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },

    deleteType(user_id, list_id) {
        return fetch(`${config.API_ENDPOINT}/types/${user_id}/:?${list_id}`, {
            method: 'DELETE',
            headers: {
                'authorization': `basic ${TokenService.getAuthToken()}`,
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
} 
