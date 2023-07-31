import React, {useEffect, useState} from 'react';
import {User} from "./User";
import {usersService} from "../../service";

const Users = () => {
    const [users, setUsers]= useState([])
    useEffect(()=>{
        usersService.getAll().then(({data}) => setUsers(data))
    },[])
    return (
        <div>
            {users.map(user=><User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};