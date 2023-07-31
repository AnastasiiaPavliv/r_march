import React from 'react';

const Post = ({post}) => {
    const {id,title,body} =post
    return (
        <div>
            <div><b>id:</b> {id}</div>
            <div><b>title:</b> {title}</div>
            <div><b>body:</b> {body}</div>
            <br/>
        </div>
    );
};

export {Post};