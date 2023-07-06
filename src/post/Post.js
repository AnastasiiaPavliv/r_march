import React from 'react';

const Post = (post) => {
    const {id, title}=post
    return (
        <div>
            <p>id:{id}</p>
            <p>title:{title}</p>
        </div>
    );
};

export {Post};