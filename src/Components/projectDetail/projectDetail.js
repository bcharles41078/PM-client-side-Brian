import React from 'react'
import './projectDetail.css'

export default function detail(props) {

    let myDate = new Date(props.project.due_date);
    let dd = myDate.getDate();
    let mm = myDate.getMonth() + 1;
    let yyyy = myDate.getFullYear();

    if (dd < 10) {
        dd = '0' + dd
    }
    if (mm < 10) {
        mm = '0' + mm
    }

    myDate = mm + '-' + dd + '-' + yyyy;



    return (
        <div className='detail-wrapper'>
        <div className='detail-box'>
            <h3>{props.project.title}</h3>
            <p>{props.project.project_description}</p>
            <p>{myDate}</p>
        </div>
        <div className='button-wrapper'>
            <button id='edit-button' onClick={()=>props.handleUpdateProject(props.project.id)}>Edit Project</button>
            <button id='delete-button' onClick={()=>props.handleDeleteProject(props.project.id)}>Delete Project</button>
        </div>
        </div>
    )

}