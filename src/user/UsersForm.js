import React from 'react';

const UsersForm = () => {
    const {register,}=useForm

    return (
        <div>
            <form>
                <lable  name={'name'} ><input placeholder={'name'} name={'name'}/></lable>
                <lable  name={'username'} ><input placeholder={'username'} name={'username'}/></lable>
                <lable  name={'email'} ><input placeholder={'email'} name={'email'}/></lable>
                <button>Save</button>
            </form>
        </div>
    );
};

export {UsersForm};