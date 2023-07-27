import React from 'react';
import {useForm} from "react-hook-form";

const PostsForm = ({setPosts}) => {
    const {register, reset, handleSubmit}=useForm();
const save=(post)=>{
    fetch(`https://jsonplaceholder.typicode.com/comments`,
       {headers:{'Content-type':'application/json'},
        method:'POST',
            body:JSON.stringify(post)})
        .then(value => value.json())
        .then((value => setPosts(prev=>[...prev, value])))
    // reset()
    console.log(post)
}
    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <label>Name:<input type={"text"} placeholder={'name'} {...register('name')}/></label>
                <label>Email:<input type={"text"} placeholder={'email'} {...register('email')}/></label>
                <label>Body:<input type={"text"} placeholder={'body'} {...register('body')}/></label>
               <button>Save</button>
            </form>
        </div>
    );
};

export {PostsForm};