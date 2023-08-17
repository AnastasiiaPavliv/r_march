import {apiService} from "./apiService";
import {urls} from "../const";

const episodesService={
    getAll:(page)=>apiService.get(urls.episodes, {params:{page}})
}
export {episodesService}