import React from 'react';
import {useNavigate} from "react-router-dom";

const Comment = ({comment}) => {
const {postId, id,name,body}=comment;
const navigate=useNavigate()
    return (
        <div>
        <div>postId:{postId}</div>
        <div>id:{id}</div>
        <div>name:{name}</div>
        <div>body:{body}</div>
            <button onClick={()=>navigate(`posts/${postId}`)}>GetPost</button>
        </div>
    );
};

export {Comment};