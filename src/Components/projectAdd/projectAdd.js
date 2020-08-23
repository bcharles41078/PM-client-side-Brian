import React, { Component } from 'react'
import './projectAdd.css'
import TokenService from '../../services/token-service'
import config from '../../config'
import { Button, Input } from '../Utils/Utils'
import { withRouter } from 'react-router-dom';

const { API_ENDPOINT } = config

class ProjectAdd extends Component {
    
    handleSubmit = ev => {
        ev.preventDefault()
        // const data = ev.firstChild.control.value


        const data = {
            project_title: ev.target.querySelector('#name').value,
            project_description: ev.target.querySelector('#desc').value,
            due_date: ev.target.querySelector('#due-date').value

        }
        fetch(`${API_ENDPOINT}/projects`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(data)
        })
            .then(response => { 
                if (response.ok) {
                    //this.onUpdateSuccess()
                    this.props.history.push('./dashboard')
                }
            }) 
            
    }
        
    getMinDate = () => {
        let MinDate = new Date();
        let dd = MinDate.getDate();
        let mm = MinDate.getMonth() + 1;
        let yyyy = MinDate.getFullYear();

        if (dd < 10) {
            dd = '0' + dd
        }
        if (mm < 10) {
            mm = '0' + mm
        }

        MinDate = yyyy + '-' + mm + '-' + dd;

        return MinDate;
    }

    getMaxDate = () => {
        let MaxDate = new Date();
        let dd = MaxDate.getDate() - 1;
        let mm = MaxDate.getMonth() + 1;
        let yyyy = MaxDate.getFullYear() + 5;

        if (dd < 10) {
            dd = '0' + dd
        }
        if (mm < 10) {
            mm = '0' + mm
        }

        MaxDate = yyyy + '-' + mm + '-' + dd;

        return MaxDate;
    }

    render() {
        return (
            <section id='add_project' className='addProjects'>

                <h2>Add a Project</h2>
                <form className='addProjectForm' type='Submit' onSubmit={(ev) => this.handleSubmit(ev)}>
                <div className='labels-and-inputs'>
                    <label htmlFor="name">Project Title</label>
                    <Input
                        name='title'
                        id='name'
                        type='text'> 
                    </Input>

                    <label htmlFor="desc">Project Description</label>
                    <Input 
                        name='desc'
                        id='desc'
                        type='text'> 
                    </Input>
                    
                    <label htmlFor='dateDue'>Due Date:</label>
                    <Input 
                        className='inputAdd' 
                        id='due-date' 
                        type="date"
                        min={this.getMinDate()} 
                        max={this.getMaxDate()}>
                    </Input>
</div>
                    <Button 
                        type='submit'
                        id='addProjectSubmit'>
                        Submit
                    </Button>
                    
                </form>
            </section>
        )
    }
}

export default withRouter(ProjectAdd)