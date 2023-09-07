import axios from "axios";
import {apiService, IRes} from "./apiService";
import {ICar} from "../interface";
import {urls} from "../const";

const carService={
    getAll:():IRes<ICar[]>=>apiService.get(urls.cars.base),
    create:(data:ICar)=>apiService.post<ICar>(urls.cars.base, data),
    getById:(id:number)=>apiService.get<ICar>(urls.cars.byId(id)),
    updateById:(id:number, data:ICar)=>apiService.put<ICar>(urls.cars.byId(id),data),
    deleteById:(id:number):IRes<void>=>apiService.delete(urls.cars.byId(id))
}
export {carService}