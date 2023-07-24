import React, {useState} from 'react';
import {PostDetails} from "./PostDetails";

const Post = ({post}) => {
    const { id, title}=post
    const [show, setShow]=useState(false)
    return (
        <div>
            <p> id:{id}</p>
            <p> title:{title}</p>
            <button onClick={()=>setShow(!show)}>{show?'Hide':'Details'}</button>
            {
                show&&<PostDetails post={post}/>
            }
        </div>
    );
};

export {Post};
