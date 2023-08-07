import React from 'react';

const Todo = ({todo}) => {
    const {userId, id, title, completed}=todo
    return (
        <div>
            <div><b>userId:</b> {userId}</div>
            <div><b>id:</b> {id}</div>
            <div><b>title:</b> {title}</div>
            {/*<div><b>completed:</b> {completed}</div>*/}
            <br/>
        </div>
    );
};

export {Todo};