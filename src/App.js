import React, { useState} from 'react';
import {UserContainer} from "./posts/UserContainer";
import {Posts} from "./posts/Posts";
// import {Users} from "./user/Users";

const App = () => {
    // const [users, setUsers]=useState([])
    // useEffect(()=>{
    //     fetch(`https://jsonplaceholder.typicode.com/users`)
    //         .then((value) => value.json())
    //         .then(users => setUsers(users))
    // },[])
const [userId,setUserId]=useState(null)

    return (
        <div >
           <UserContainer setUserId={setUserId}/>
            <hr/>
            {userId && <Posts userId={userId}/>}
            {/*<Users users={users}/>*/}
        </div>
    );
};

export {App};