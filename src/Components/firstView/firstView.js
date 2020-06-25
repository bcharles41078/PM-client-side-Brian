import React, { Component } from 'react'

class FirstView extends Component {

    render() {
        return (
            <>
                <h1>Project Manager</h1>
                <section class='buttons'>
                    <button>Add project</button>
                    <button>Add type</button>
                </section>
                <section id='work' class='sectionProjects'>
                    <h2>Work Projects</h2>
                    <ul id='topLeft' class='projectList'>
                        <li>Project one</li>
                        <li>Project two</li>
                        <li>Project three</li>
                        <li>Project four</li>
                        <li>Project five</li>
                    </ul>
                </section>
                <section id='home' class='sectionProjects'>
                    <h2>Home Projects</h2>
                    <ul id='topRight' class='projectList'>
                        <li>Project one</li>
                        <li>Project two</li>
                        <li>Project three</li>
                        <li>Project four</li>
                        <li>Project five</li>
                    </ul>
                </section>
                <section class="overdue">
                    <h2>The following projects are overdue</h2>
                </section>
            </>
        );
    }
}

export default FirstView