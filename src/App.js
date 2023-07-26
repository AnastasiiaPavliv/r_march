// import React, { useState} from 'react';
// import {UserContainer} from "./posts/UserContainer";
// import {Posts} from "./posts/Posts";
// import {Users} from "./user/Users";

// const App = () => {
//     // const [users, setUsers]=useState([])
//     // useEffect(()=>{
//     //     fetch(`https://jsonplaceholder.typicode.com/users`)
//     //         .then((value) => value.json())
//     //         .then(users => setUsers(users))
//     // },[])
// // const [userId,setUserId]=useState(null)
//
//     return (
//         <div >
//
//            {/*<UserContainer setUserId={setUserId}/>*/}
//            {/* <hr/>*/}
//            {/* {userId && <Posts userId={userId}/>}*/}
//             {/*<Users users={users}/>*/}
//         </div>
//     );
// };
//
// export {App};

import React, {createContext, useState} from 'react';
import {Child1} from "./Child1/Child1";
import {Child2} from "./Child2/Child2";

const Context=createContext(null)
const App = () => {
    const [data, setData]=useState(['Hello']);
    return (
        <Context.Provider value={{setData, data}}>
        <div>
            <Child1/>
            <Child2/>
        </div>
        </Context.Provider>
    );
};

export {App, Context};