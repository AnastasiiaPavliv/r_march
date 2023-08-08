import {apiService} from "./apiService";
import {urls} from "../const/urls";

const moviesService={
    getAll:(page)=>apiService.get(urls.movies(page))
}
export {moviesService}