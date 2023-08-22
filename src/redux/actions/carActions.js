import {carService} from "../../services/carService";

const carActionsTypes={
    SET_CARS:'SET_CARS',
    SET_CARS_FOR_UPDATE:'SET_CARS_FOR_UPDATE'
}
const actions={
    setCars:(payload)=>({type:carActionsTypes.SET_CARS, payload}),
    setCarsForUpdate:(payload)=>({type:carActionsTypes.SET_CARS_FOR_UPDATE, payload})
}
const getCars=()=>async dispatch=>{
    const {data}=await carService.getAll()
    dispatch(actions.setCars(data))
}
const create=(car)=>async dispatch=>{
    await carService.create(car)
    await dispatch(getCars())
}
const update=(id, car)=>async dispatch=>{
    await carService.updateById(id, car)
    dispatch(actions.setCarsForUpdate(null))
    await dispatch(getCars())
}
const deleteById=(id)=>async dispatch=>{
    await carService.deleteById(id)
    await dispatch(getCars())
}

const carActions={
    getCars, create,update,
     deleteById,
    setCarsForUpdate:actions.setCarsForUpdate
}
export {carActions,carActionsTypes}