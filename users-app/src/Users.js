import React, {Component} from 'react';
import './Users.css';

import UsersList from './UsersList';

class Users extends Component {

    constructor (props) {
        super(props); 

        this.state = {
           users: []
        }
        
    }

    addUser = (e) => {

        e.preventDefault();

        /* console.log(this._inputName.value) */

        let newUser = {
            id: Date.now(),
            name: this._inputName.value 
        }

        if (this._inputName.value !== '') {

        this.setState((/* prevstate */) => {

            /* console.log('setState()'); */
            
            return ({
                users: this.state.users.concat(newUser)
            });

        });

        // this.setState ({users: this.state.users.concat(newUser)})
        
        }   

        this._inputName.value = '';  
    }

    removeUser = (userID) => { 

        this.setState((state)=>{ 

            // console.log(`removeUser () clicked ${userID}` ); 

            return ({
                users: state.users.filter(user => user.id !== userID)
            });

        });

        /* this.setState ({users: this.state.users.filter(user => user.id !== userID)}) */

    }

    render () {
        return  (

            <div className = "users-main">

                <h1>User's list</h1>

                <form onSubmit={this.addUser} >
                    <input type="text" placeholder = "Enter name" ref={(element)=>{this._inputName=element}}/>
                    <button type="submit">Add user</button>
                </form>
                <UsersList usersList={this.state.users} removeMethod={this.removeUser}/>

            </div>

        );
    }

}

export default Users;