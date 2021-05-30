import React, { Component } from 'react';

export class UserCreate extends Component {
    state = {
        name: '',

    }

    handleNameChange = (event) => {
        const name = event.target.value;

        this.setState({ name }) 
    }

    handleUserCreate = () => {
        const name = this.state;

        fetch('https://jsonplaceholder.typicode.com/users', 
        { 
            method: 'POST', 
            body: JSON.stringify({ name }),
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            }
        
        })
        .then(response => response.json())
        .then(() => { 
            alert ('User created');
            this.setState({ name: '' })
        })
            
    }


    render() {
        const { name } = this.state;

        return (
            <div>
                <input type="text" name="name" placeholder="username" onChange={this.handleNameChange} value={name}/>
                <input type="button" onClick={this.handleUserCreate} value="Create" disabled={!name.length}/>
            </div>
        )
    }

}
