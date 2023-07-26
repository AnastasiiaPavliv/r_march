import React, {useState} from 'react';

const UserForm = ({setUsers}) => {
    const [forValues, setForValues]= useState({
        name:'', username:'', email:''
    })
    const handleForChange=(e, key)=>{
        e.preventDefault();
        setForValues((prevState)=>{
            return {
                ...prevState,
                [key]: e.target.value
            } })
    }
    const handleSubmit=(e)=>{
         e.preventDefault();
        fetch('https://jsonplaceholder.typicode.com/users',
            {headers:{'Content-type':'application/json'},
                method:'POST',
                body:JSON.stringify(forValues)})
            .then(value => value.json())
            .then((value => setUsers(prev=>[...prev, value])))
        console.log(forValues)
    }

    // const handleCreate= async ()=>{
    //     try{
    //         const data = await fetch(`http://jsonplaceholder.typicode.com/users`,
    //             {method:'POST',
    //             body:JSON.stringify(forValues)})
    //         const response = await data.json()
    //     console.log(response)
    //     }catch (e) {
    //     }
    // }

    // const save=(e)=>{
    //     e.preventDefault()
    //     fetch('https://jsonplaceholder.typicode.com/users',
    //         {headers:{'content-type':'application/json'},
    //             method:'POST',
    //             body:JSON.stringify(forValues)})
    //         .then(value => value.json())
    //         .then(() => setOnSave(prev=>!prev))
    //
    // }
    return (
        <div >
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={forValues.name} onChange={(e)=>handleForChange(e,'name')} autoComplete={'off'}/>
                </label>
                <label>
                    Username:
                    <input type="text" name="username" value={forValues.username} onChange={(e)=>handleForChange(e,'username')} autoComplete={'off'}/>
                </label>
                <label>
                    Email:
                    <input type="text" name="email" value={forValues.email} onChange={(e)=>handleForChange(e,'email')} autoComplete={'off'}/>
                </label>
                <button type={"submit"}>Create</button>
            </form>

        </div>
    );
};

export {UserForm};