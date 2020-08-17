import React, { Component } from 'react'

class TypeAdd extends Component {

    handleSubmit = ev => {
        ev.preventDefault()
        // const data = ev.firstChild.control.value
        const data = {
           title: ev.target.querySelector('#type-name').value
        }
        console.log(data)


        fetch('http://localhost:8000/api/types', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                //   if (data.response[0] === '2') { // expecting a 250 response
                //     this.formSuccess();
                //   } else {
                //     this.formFailure();
                //   }
            })
            .catch((e) => {
                console.log(e);
            })

    }

    render() {

        return (
            <>
                <button className='static-button button'
                    onClick={e => console.log('Log Off')}
                >Log Off</button>

                <h1>Project Manager</h1>
                <section id='type-add' className='Types'>
                    <h2>Add a Project Type</h2>
                    <form type='Submit' onSubmit={(ev) => this.handleSubmit(ev)}>
                        <label for="type-name">Type Name </label>
                        <input id='type-name' type="text" />
                        <button type='submit'>Add Type</button>
                    </form>
                </section>
            </>
        )
    }
}

export default TypeAdd