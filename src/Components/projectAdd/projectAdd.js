import React, { Component } from 'react'

class ProjectAdd extends Component {
    render() {
        return (
            <section id='single' class='sectionProjects'>
                <button className='static-button button'
                onClick={e=>console.log('Log Off')}
                >Log Off</button>
                <h2>Add a Project</h2>
                <form type='Submit'>
                    <div>
                        <label for="name">Project Name</label>
                        <input id='name' type="text" />
                    </div>
                    <div>
                        <label for="desc">Project Description</label>
                        <input id='desc' type="text" />
                    </div>
                    <div>
                        <label for="dateAdded">Date Added</label>
                        <input id='dateAdded' type="text" />
                    </div>
                    <div>
                        <label for='dateDue'>Due Date</label>
                        <input id='dateDue' type="text" />
                    </div>
                    <div>
                        <label for="projectType">Project Type</label>
                        <input id='projectType' type="text" />
                    </div>
                    <div>
                        <label for="priority">Priority</label>
                        <input id='priority' type="text" />
                    </div>
                </form>
            </section>
        )
    }
}
export default ProjectAdd