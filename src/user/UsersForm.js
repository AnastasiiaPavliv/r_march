import React from 'react';
import {useForm} from "react-hook-form";
import {apiService} from "../servises/apiServise";

const UsersForm = ({setUsers}) => {
    const {register, handleSubmit}=useForm()
 const save=(user)=>{
         apiService.handleSave(user)

  // fetch(`https://localhost:3000`,{
  //    headers:{'Content-type':'application/json'},
  //   method:'POST', body:JSON.stringify(user) })
  //     .then(value => value.json())
  //     .then((value => setUsers(prev=>[...prev, value])))

        console.log(user)
 }

    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <lable name={'name'} >name<input placeholder={'name'} {...register('name')} /></lable>
                <lable name={'username'}>username<input placeholder={'username'} {...register('username')}/></lable>
                <lable name={'email'}>email<input placeholder={'email'} {...register('email')}/></lable>
                <button>Save</button>
            </form>
        </div>
    );
};

export {UsersForm};