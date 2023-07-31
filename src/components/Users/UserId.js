import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";

const UserId = ({user}) => {
    const {userId}=useParams();
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(value => value.json())
    },[])
    return (
        <div>
            <div><b>id:</b>{user.id}</div>
            <div><b>name:</b>{user.name}</div>
            <div><b>username:</b>{user.username}</div>
            <div><b>email:</b>{user.email}</div>
        </div>
    );
};

export {UserId};