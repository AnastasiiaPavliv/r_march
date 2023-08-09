import {apiService} from "./apiService";
import {urls} from "../const/urls";

const genreService={
    getAll:()=>apiService.get(urls.genres)
}
export {genreService}