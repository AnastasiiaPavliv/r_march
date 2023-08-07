import {apiService} from "./apiService";
import {urls} from "../constant/urls";

const commentsService={
    getAll:()=>apiService.get(urls.comments)
}
export {commentsService}