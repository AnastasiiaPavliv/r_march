import React, {useEffect} from 'react';
import {User} from "./User";

const Users = ({users, setUsers}) => {

    useEffect(()=>{
     fetch('https://jsonplaceholder.typicode.com/users')
         .then(value => value.json())
         .then(value => setUsers(value))
    },[users])
    return (
        <div>
            {users.map(user=><User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};