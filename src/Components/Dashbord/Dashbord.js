import React, { Component } from 'react'
import config from '../../config'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import Detail from '../projectDetail/projectDetail'

const { API_ENDPOINT } = config

class FirstView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            projects: []
        }
    }

    componentDidMount() {
        console.log(API_ENDPOINT)
        {this.handleGetProjects()}
    }

    handleGetProjects = () => {
        console.log('getting projects')
        return fetch(`${API_ENDPOINT}/projects`,
            {
                method: 'GET',
                headers: {
                    'authorization': `bearer ${TokenService.getAuthToken()}`
                }
            })

            .then(res => res.json())
            .then(data => this.setState({ projects: data }))
    }

    handleDeleteProject = (detail_id) => {
        console.log('running', detail_id)
        fetch(`${config.API_ENDPOINT}/projects`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify({ detail_id })
        })
            .then(res => {
                console.log(res.ok)
                if (res.ok) {
                    this.handleGetProjects();
                }
            })
            
            .catch(e => console.log(e))
    }

    render() {
        return (
            <>
                <section className='buttons'>
                    <Link className='project-type button'
                        to='/addproject'>
                        Add project</Link>
                </section>
                {this.state.projects.map((project, i) =>
                    <Detail key={i} project={project} handleDeleteProject={this.handleDeleteProject} />
                )}


            </>
        );
    }
}

export default FirstView