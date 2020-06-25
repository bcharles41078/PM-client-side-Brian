import React, { Component } from 'react'

class TypeAdd extends Component {

    render() {

        return (
            <>
                <h1>Project Manager</h1>
                <section id='type-add' className='Types'>
                    <h2>Add a Project Type</h2>
                    <form type='Submit'>
                        <label for="type-name">Type Name</label>
                        <input id='type-name' type="text" />
                    </form>
                </section>
            </>
        )
    }
}

export default TypeAdd