import axios from "axios";
import {baseUrl} from "../constant";


const apiService=axios.create({baseUrl})
export {apiService}