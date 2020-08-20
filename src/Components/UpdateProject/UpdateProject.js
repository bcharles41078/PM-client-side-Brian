import React, { Component } from 'react'
import ProjectApiService from '../../services/project-api-service'
import { withRouter } from 'react-router-dom';
import { Button, Input } from '../Utils/Utils'
import './UpdateProject.css'

class UpdateProject extends Component {
    

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
        let dd = MaxDate.getDate() + 1;
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

    getDateValue = () => {

        let myDate = new Date(this.props.project.due_date);
        let dd = myDate.getDate() + 1;
        let mm = myDate.getMonth() + 1;
        let yyyy = myDate.getFullYear();

        if (dd < 10) {
            dd = '0' + dd
        }
        if (mm < 10) {
            mm = '0' + mm
        }

        myDate = yyyy + '-' + mm + '-' + dd;

        return myDate;
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        const { title, desc, dateDue } = ev.target

        // get the new values
        const detail_id = this.props.project.id
        const project_title = title.value
        const project_description = desc.value
        const due_date = dateDue.value

        

        // do the api call
        ProjectApiService.updateProject(detail_id,
            project_title,
            project_description,
            due_date)

            .then(project => {
                title.value = ''
                desc.value = ''
                dateDue.value = ''
                // go back to dashboard
                this.props.history.push('./dashboard')
            })
            .catch(res => {
                this.setState({ error: res.error })
            })
        
    }

    render() {
        return (
            <section id='update_project' className='updateProjects'>

                <h2>Update a Project</h2>
                <form className='addProjectForm' type='Submit' onSubmit={(ev) => this.handleSubmit(ev)}>
                <div className='labels-and-inputs'>
                    <label htmlFor="name">Project Name</label>
                    <Input 
                        name='title' 
                        id='name' 
                        type="text" 
                        defaultValue={this.props.project.title}>
                    </Input>

                    <label htmlFor="desc">Project Description</label>
                    <Input 
                        name='desc' 
                        id='desc' 
                        type="text" 
                        defaultValue={this.props.project.project_description}>
                    </Input>

                    <label htmlFor='dateDue'>Due Date:</label>
                    <Input 
                        name='dateDue' 
                        id='due-date' 
                        type="date"
                        min={this.getMinDate()} 
                        max={this.getMaxDate()} 
                        defaultValue={this.getDateValue()}>
                    </Input>
</div>
                    <Button 
                        className='addProject' 
                        type='submit'>
                        Submit
                    </Button>
                </form>
            </section>
        )
    }
}

export default withRouter(UpdateProject)