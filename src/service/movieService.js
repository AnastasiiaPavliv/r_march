import {apiService} from "./apiService";
import {urls} from "../const/urls";

const movieService={
     getAll:(id)=>apiService.get(urls.movie(id)),
     // getById:(id)=>apiService.get(urls.movie.byId(id))
}
export {movieService}