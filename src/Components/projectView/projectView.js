import React, { Component } from 'react'

class ProjectView extends Component {

    render () {
        return (
            <>
                <section class='buttons'>
            <button>Edit project</button>
            
        </section>
        <section id='single' className='sectionProjects'>
            <h4>Project Name</h4>
            <p>Desc</p>
            <p>Date added</p>
            <p>Due date</p>
            <p>Completed?</p>
            <p>Project Type</p>
            <p>Priority</p>
        </section>
            </>
        )
    }
}

export default ProjectView