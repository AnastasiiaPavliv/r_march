import axios from "axios";
import {owuBaseURL} from "../constatn/url";

const owuApiService = axios.create({baseURL:owuBaseURL})

export {owuApiService}