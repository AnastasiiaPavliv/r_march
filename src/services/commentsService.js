import {apiService} from "./apiService";
import {urls} from "../constant/url";

const commentsService={
    getAll:()=>apiService.get(urls.comments)
}
export {commentsService}