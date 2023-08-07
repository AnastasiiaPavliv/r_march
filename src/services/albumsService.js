import {apiService} from "./apiService";
import {urls} from "../constant/urls";

const albumsService={
    getAll:()=>apiService.get(urls.albums)
}
export {albumsService}