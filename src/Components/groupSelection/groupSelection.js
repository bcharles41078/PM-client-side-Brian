import React, { Component } from 'react'

class GroupSelection extends Component {
    render() {
        return (
            <section id='groups' class='sectionGroups'>
                <h2>Project Groups</h2>
                <h3>Select a group to open it</h3>
                <ul id='topLeft' class='groupList'>
                    <li>Work Projects</li>
                    <li>Home Projects</li>
                    <li>Honey Do Projects</li>
                    <li>Hobbey Projects</li>
                    <li>Add a group</li>
                </ul>
            </section>
        )
    }
}

export default GroupSelection