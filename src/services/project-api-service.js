import TokenService from './token-service'
import config from '../config'

const ProjectApiService = {
    getProjects(user_id) {
        return fetch(`${config.API_ENDPOINT}/projects/${user_id}`, {
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

    getProject(user_id, detail_id) {
        return fetch(`${config.API_ENDPOINT}/projects/${user_id}/:?${detail_id}`, {
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

    postProject(user_id, project_title, project_description, due_date) {
        return fetch(`${config.API_ENDPOINT}/projects/${user_id}`, {
            method: 'POST',
            headers: {
                'authorization': `basic ${TokenService.getAuthToken()}`,
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                user_id,
                project_title,
                project_description,
                due_date,
            }),
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },

    updateProject(detail_id, project_title, project_description, due_date) {
        return fetch(`${config.API_ENDPOINT}/projects`, {
            method: 'PATCH',
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                detail_id,
                project_title,
                project_description,
                due_date,
            }),
        })
            .then(res => {
               if (!res.ok){
                   
               }
            })
            
    },
    

    deleteProject(user_id, detail_id) {
        return fetch(`${config.API_ENDPOINT}/projects/${user_id}/:?${detail_id}`, {
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

export default ProjectApiService;