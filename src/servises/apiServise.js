import axios from "axios";

const instance = axios.create({
   baseUrl:`https://localhost:3010`
})
const apiService={
handleSave:(user)=>{
    fetch(`https://localhost:3010`,{
        headers:{'Content-type':'application/json'},
        method:'POST', body:JSON.stringify(user) })
        .then(value => value.json())
        .then((value => console.log(user)))
}}
export {apiService}