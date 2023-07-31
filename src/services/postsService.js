import {apiService} from "./apiService";
import {urls} from "../constant/url";

const postsService = {
    getById:(id)=>apiService.get(urls.posts.byId(id))
}
export {postsService}