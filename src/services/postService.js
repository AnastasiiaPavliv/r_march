import {apiService} from "./apiService";
import {urls} from "../constatn/url";

class PostService{
    getAll(){
        return apiService.get(urls.json.posts)
    }
}
export const postService = new PostService()