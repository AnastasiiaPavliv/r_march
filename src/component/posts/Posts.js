import React, {useEffect, useState} from 'react';
import {Post} from "./Post";

const Posts = ({posts, setPosts}) => {


    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/comments`)
            .then(value => value.json())
            .then(value => setPosts(value))
    },[posts])
    return (
        <div>
            {posts.map(post=><Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};