import React, { Component } from 'react'
import './projectAdd.css'
import TokenService from '../../services/token-service'

class ProjectAdd extends Component {
    static defaultProps = {
        location: {},
        history: {
          push: () => {},
        },
      }

    handleSubmit = ev => {
        ev.preventDefault()
        // const data = ev.firstChild.control.value

        const data = {
           project_title: ev.target.querySelector('#name').value,
           project_description: ev.target.querySelector('#desc').value,
           due_date: ev.target.querySelector('#due-date').value
           
        }
        console.log(data)


        fetch('http://localhost:8000/api/projects', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                const { history } = this.props 
                console.log(history)
                history.push('/firstView')
        })
            // go back to main page
            

            .catch(e => console.log(e))

    }
    
    getMinDate = () => {
        let MinDate = new Date();
        let dd = MinDate.getDate();
        let mm = MinDate.getMonth()+1;
        let yyyy = MinDate.getFullYear();

        if (dd<10){
            dd='0' +dd
        }
        if (mm<10){
            mm='0' +mm
        }

        MinDate = yyyy+'-'+mm+'-'+dd;
        
        return MinDate;
    }

    getMaxDate = () => {
        let MaxDate = new Date();
        let dd = MaxDate.getDate()-1;
        let mm = MaxDate.getMonth()+1;
        let yyyy = MaxDate.getFullYear()+5;

        if (dd<10){
            dd='0' +dd
        }
        if (mm<10){
            mm='0' +mm
        }

        MaxDate = yyyy+'-'+mm+'-'+dd;
        
        return MaxDate;
    }

    render() {
        return (
            <section id='single' className='sectionProjects'>
                
                <h2>Add a Project</h2>
                <form className='addProjectForm' type='Submit'onSubmit={(ev) => this.handleSubmit(ev)}>
                    
                        <label htmlFor="name">Project Name</label>
                        <input className='inputAdd' id='name' type="text" />
                   
                        <label htmlFor="desc">Project Description</label>
                        <input className='inputAdd' id='desc' type="text" />
                    
                        <label htmlFor='dateDue'>Due Date:</label>
                        <input className='inputAdd' id='due-date' type="date"
                            min={this.getMinDate()} max={this.getMaxDate()}/>
                
                        <label htmlFor="priority">Priority</label>
                        <input className='inputAdd' id='priority' type="text" />
                    
                    <button className='addProject' type ='submit'>Submit</button>
                </form>
            </section>
        )
    }
}
export default ProjectAdd