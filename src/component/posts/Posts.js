import React, {useEffect} from 'react';
import {Post} from "./Post";

const Posts = ({posts, setPosts}) => {


    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/comments`)
            .then(value => value.json())
            .then(value => setPosts(value))
    },[])
    return (
        <div>
            {posts.map(post=><Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};