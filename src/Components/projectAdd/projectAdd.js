import React, { Component } from 'react'
import './projectAdd.css'

class ProjectAdd extends Component {

    handleSubmit = ev => {
        ev.preventDefault()
        // const data = ev.firstChild.control.value

        const data = {
           project_title: ev.target.querySelector('#name').value,
           project_description: ev.target.querySelector('#desc').value,
           due_date: ev.target.querySelector('#dateDue').value,
           list_id: 1,
           user_id: 16
        }
        console.log(data)


        fetch('http://localhost:8000/api/projects', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
            const { history } = this.props       
        })
            // go back to main page
            
            //console.log(history)
            // history.push('/firstView')

            .catch((e) => {
                console.log(e);
            })

    }
    
    render() {
        return (
            <section id='single' className='sectionProjects'>
                <button className='static-button button'
                onClick={e=>console.log('Log Off')}
                >Log Off</button>
                <h2>Add a Project</h2>
                <form className='addProjectForm' type='Submit'onSubmit={(ev) => this.handleSubmit(ev)}>
                    
                        <label htmlFor="name">Project Name</label>
                        <input className='inputAdd' id='name' type="text" />
                   
                        <label htmlFor="desc">Project Description</label>
                        <input className='inputAdd' id='desc' type="text" />
                    
                        <label htmlFor="dateAdded">Date Added</label>
                        <input className='inputAdd' id='dateAdded' type="text" />
                    
                        <label htmlFor='dateDue'>Due Date</label>
                        <input className='inputAdd' id='dateDue' type="text" />
                    
                        <label htmlFor="projectType">Project Type</label>
                        <input className='inputAdd' id='projectType' type="text" />
                    
                        <label htmlFor="priority">Priority</label>
                        <input className='inputAdd' id='priority' type="text" />
                    
                    <button className='addProject' type ='submit'>Submit</button>
                </form>
            </section>
        )
    }
}
export default ProjectAdd