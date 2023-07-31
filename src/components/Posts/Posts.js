import React, {useEffect, useState} from 'react';
import {Post} from "./Post";
import {postsService} from "../../services/postsService";
import {useParams} from "react-router-dom";


const Posts = () => {
    const [post, setPost] =useState(null)
    const {postId}=useParams()
    useEffect(()=>{

        postsService.getById(postId).then(({data}) => setPost(data))
    },[postId])
    return (
        <div>
            {post&& <Post post={post}/>}
        </div>
    );
};

export {Posts};