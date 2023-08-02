import {apiService} from "./apiService";
import {urls} from "../constatn/url";

class CommentService {
    getAll(){
    return apiService.get(urls.json.comments)}

}
export const commentService= new CommentService()