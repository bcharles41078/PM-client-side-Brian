import React, { Component } from 'react'
import config from '../../config'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import Detail from '../projectDetail/projectDetail'
import { withRouter } from 'react-router-dom';

const { API_ENDPOINT } = config

class Dashboard extends Component {


    constructor(props) {
        super(props)

        this.state = { 
            projects: []
        }
    }


componentDidMount() {
    this.handleGetProjects()
}

handleGetProjects = () => {
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

handleUpdateProject = (detail_id, projects = this.state.projects) => {
    const project = projects.find(project => project.id === detail_id)
    const { history } = this.props
    this.props.setProjectState(project)
    history.push('./updateproject')
}



handleDeleteProject = (detail_id) => {
    fetch(`${API_ENDPOINT}/projects`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
            'authorization': `bearer ${TokenService.getAuthToken()}`
        },
        body: JSON.stringify({ detail_id })
    })
        .then(res => {

            if (res.ok) {
                this.handleGetProjects();
            }
        })
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
                <Detail key={i} project={project}
                    handleUpdateProject={this.handleUpdateProject}
                    handleDeleteProject={this.handleDeleteProject} />
            )}


        </>
    );
}
}

export default withRouter(Dashboard) 