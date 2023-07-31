import {apiService} from "./apiService";
import {urls} from "../constant";

const commentsService= {
    getAll: () => apiService.get(urls.comments)
}
export {commentsService}