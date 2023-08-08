import axios from "axios";
import {baseURL} from "../const/urls";

const apiService=axios.create({
baseURL,
    headers:{
    accept:'application/json',
        Authorization:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYmRkZmRiZTY1NTVhOTJhYWFiZTA0ZDQ5ZTliNmNkYiIsInN1YiI6IjYzZWViMmM4Y2RkYmJjMDBkNWU0NmIwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.z7rnd3pHCBKPrV7DkijkzSyqznbHM4lEedvOPxqkdZU'
    }

})
export {apiService}