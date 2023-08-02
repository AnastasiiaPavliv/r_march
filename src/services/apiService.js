import axios from "axios";
import {jsonBaseURL} from "../constatn/url";

const apiService=axios.create({baseURL:jsonBaseURL})
export {apiService}