import React, {useState} from 'react';
import {UsersForm} from "../user/UsersForm";
import {Users} from "../user/Users";

const UsersPage = () => {
    const [users, setUsers]=useState([])
    return (
        <div>
            <UsersForm setUsers={setUsers}/>
            <hr/>
            <Users users={users} setUsers={setUsers}/>
        </div>
    );
};

export {UsersPage};