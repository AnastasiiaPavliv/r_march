import {useEffect, useState} from "react";

const useFetch=(endpoint)=>{
   const [value, setValue]=useState([]);
   useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com${endpoint}`)
        .then(value=>value.json())
        .then(value=> setValue(value))
     },[])

return value
}
export {useFetch}