import React from 'react';

const User = ({user}) => {
    const {id, name, username, email}=user
    return (
        <div>
            <div><b>id:</b> {id}</div>
            <div><b>name:</b> {name}</div>
            <div><b>userName:</b> {username}</div>
            <div><b>email:</b> {email}</div>
            <br/>
        </div>
    );
};

export {User};