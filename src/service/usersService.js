import {apiService} from "./apiService";
import {urls} from "../constant";

const usersService={
    getAll:()=>apiService.get(urls.users),
    getById:(id)=>apiService.get(urls.users.byId(id))
}
export {usersService}