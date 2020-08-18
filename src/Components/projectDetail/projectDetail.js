import React from 'react'


export default function detail(props) {
    

    return (
        <>
            <h3>{props.project.project_title}</h3>
            <p>{props.project.project_description}</p>
            <p>{props.project.due_date}</p>
            <p>{props.project.priority}</p>
        </>
    )

}