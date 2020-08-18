import React from 'react'
import './projectDetail.css'

export default function detail(props) {
    console.log(props.project)

    return (
        <div className='detail-wrapper'>
        <div className='detail-box'>
            <h3>{props.project.project_title}</h3>
            <p>{props.project.project_description}</p>
            <p>{props.project.due_date}</p>
            <p>{props.project.priority}</p>
        </div>
        <div className='button-wrapper'>
            <button id='edit-button'>Edit Project</button>
            <button id='delete-button' onClick={()=>props.handleDeleteProject(props.project.id)}>Delete Project</button>
        </div>
        </div>
    )

}