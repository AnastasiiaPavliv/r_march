import React from 'react';

const UserComponent = ({user, setUserId}) => {
const {id, name, username}=user
    return (
        <div>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>username:{username}</div>
            <button onClick={()=> setUserId(id)}>Posts</button>
        </div>
    );
};

export {UserComponent};