import React from 'react';
import './UsersList.css';


function UsersList(props) {

    let usersLocal = props.usersList;

    /* console.log("users local w UsersList()",  usersLocal); */
    
    let usersLocalElement = usersLocal.map((user) => <li key={user.id}> 
    {user.name} <span onClick={()=> {props.removeMethod(user.id)}}>X</span> </li>); 

    /* ; console.log(`to jest id ${user.id} z user'em ${user.name}` ) */ 

   /*  console.log ("users local Elelement w UsersList()", usersLocalElement); */

    return (
        
        <ul>
            
            {usersLocalElement}
            
        </ul>
        
    );

}

export default UsersList;

