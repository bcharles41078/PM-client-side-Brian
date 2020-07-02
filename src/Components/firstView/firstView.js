import React, { Component } from 'react'
import { API_ENDPOINT } from '../../config'

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
        return fetch(`${API_ENDPOINT}/api/projects/?type_id=1&user_id=1`)
            .then(res => res.json())
            .then(data => data.message)
            .then(projects => this.setState({ projects }))
    }
    
    render() {
        console.log(this.state)
        return (
            <>
                <section className='buttons'>
                    <button>Add project</button>
                    <button>Add type</button>
                </section>
                <p projects={this.state.projects} />
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