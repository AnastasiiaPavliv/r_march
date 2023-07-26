import React, {useState} from 'react';
import {Users} from "../Users/Users";
import {UserForm} from "../Users/UserForm";

const UserPage = () => {
    const [users, setUsers]=useState([])

    return (
        <div>
            <UserForm setUsers={setUsers}/>
            <hr/>
            <Users users={users} setUsers={setUsers}/>
        </div>
    );
};

export {UserPage};

