import React from 'react';

const PostDetails = ({post}) => {
    const {userId, id, title,body }=post
    return (
        <div>
            <p> userId:{userId}</p>
            <p> id:{id}</p>
            <p> title:{title}</p>
            <p> body:{body}</p>
        </div>
    );
};

export {PostDetails};