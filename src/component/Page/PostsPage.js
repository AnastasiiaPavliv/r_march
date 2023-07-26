import React, {useState} from 'react';
import {Posts} from "../posts/Posts";
import {PostsForm} from "../posts/PostsForm";

const PostsPage = () => {
    const [posts, setPosts]=useState([])
    return (
        <div>
            <PostsForm setPosts={setPosts}/>
            <hr/>
            <Posts posts={posts} setPosts={setPosts}/>
        </div>
    );
};

export {PostsPage};