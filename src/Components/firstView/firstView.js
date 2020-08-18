import React, { Component } from 'react'
import config from '../../config'
import { Link } from 'react-router-dom'
import getAuthToken from '../../services/token-service'
import Detail from '../projectDetail/projectDetail'

const { API_ENDPOINT } = config

class FirstView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            projects: [],
            types: []
        }
    }

    componentDidMount() {
        console.log(API_ENDPOINT)
        return fetch(`${API_ENDPOINT}/projects`,
            {
                method: 'GET',
                headers: {
                    'authorization': `bearer ${getAuthToken.getAuthToken()}`
                }
            })

            .then(res => res.json())
            .then(data => this.setState({ projects: data }))
    }

    render() {
        console.log(this.state)
        return (
            <>
                <section className='buttons'>
                    <Link className='project-type button'
                        to='/addproject'>
                        Add project</Link>
                    <Link className='project-type button'
                        to='/addtype'>
                        Add type</Link>
                </section>
                {this.state.projects.map((project, i) => 
                    <Detail key = {i} project = {project}/>
                )}

                {/* <section id='work' className='sectionProjects'>
                    <h2>Work Projects</h2>
                    <ul id='topLeft' className='projectList'>
                        <li>Project one</li>
                        <li>Project two</li>
                        <li>Project three</li>
                        <li>Project four</li>
                        <li>Project five</li>
                    </ul>
                </section>
                <section id='home' className='sectionProjects'>
                    <h2>Home Projects</h2>
                    <ul id='topRight' className='projectList'>
                        <li>Project one</li>
                        <li>Project two</li>
                        <li>Project three</li>
                        <li>Project four</li>
                        <li>Project five</li>
                    </ul>
                </section> */}
                <section className="overdue">
                    <h2>The following projects are overdue</h2>
                </section>
            </>
        );
    }
}

export default FirstView