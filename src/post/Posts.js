import React, {useEffect, useState} from 'react';

const Posts = () => {
    const [posts, setPosts]=useState([])

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then((res)=> res.json())
            .then((posts)=>{setPosts(posts)});
    })
    return (
        <div>
            {posts.map()}
        </div>
    );
};

export {Posts};