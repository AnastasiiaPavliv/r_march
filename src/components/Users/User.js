import React from 'react';
import {useNavigate} from "react-router-dom";

const User = ({user}) => {
    const {id, name,username, email} =user;
    const navigate=useNavigate();
    return (
        <div>
            <div><b>id:</b>{id}</div>
            <div><b>name:</b>{name}</div>
            <div><b>username:</b>{username}</div>
            <div><b>email:</b>{email}</div>
            <button onClick={()=>navigate(`${id}`)}>Info</button>
            <br/>
        </div>
    );
};

export {User};