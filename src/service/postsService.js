import {apiService} from "./apiService";
import {urls} from "../constant";

const postsService={
    getAll:()=>apiService.get(urls.posts),
    getById:(id)=>apiService.get(urls.posts.byId(id))
}
export {postsService}