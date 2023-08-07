import {apiService} from "./apiService";
import {urls} from "../constant/urls";

const todosService={
    getAll:()=>apiService.get(urls.todos)
}
export {todosService}