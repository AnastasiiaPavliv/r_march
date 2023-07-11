import React, {useState} from 'react';
import {PostDetails} from "./PostDetails";

const Post = ({post}) => {
    const [show, setShow]=useState(false)
    const {id, title}=post

    return (
        <div>
            <p>id:{id}</p>
            <p>title:{title}</p>
            <button onClick={()=>setShow(!show)}>{show?'Hide':'Details'}</button>
            {
                show&& <PostDetails post={post}/>
            }
        </div>
    );
};

export {Post};