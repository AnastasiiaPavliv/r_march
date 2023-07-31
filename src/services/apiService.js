import axios from "axios";
import {baseURL} from "../constant/url";

const apiService=axios.create({baseURL})

export {apiService}