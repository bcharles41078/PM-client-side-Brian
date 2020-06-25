import React, { Component } from 'react'

class SingleList extends Component {

    render() {

        return (
            <>
                <h1>Project Manager</h1>
                <section class='buttons'>
                    <button>Add project</button>
                    <button>View another group</button>
                </section>
                <section id='work' class='sectionProjects'>
                    <h2>Work Projects</h2>
                    <ul id='topLeft' class='projectList'>
                        <li>Project one</li>
                        <li>Project two</li>
                        <li>Project three</li>
                        <li>Project four</li>
                        <li>Project five</li>
                    </ul>
                </section>
            </>
        )
    }
}

export default SingleList