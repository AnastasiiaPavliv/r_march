import {createAsyncThunk, createSlice, isFulfilled, isRejectedWithValue, isPending} from "@reduxjs/toolkit";
import {carService} from "../../services/carService";

const initialState  ={
    cars:[],
    carForUpdate:null,
    errors:null,
    isLoading:null
} ;

const all=createAsyncThunk(
    'carsSlice/all',
    async (_, thunkAPI)=>{
        try{
            const {data}= await carService.getAll()
            return data
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }

    }
)
const create=createAsyncThunk(
'carsSlice/create',
    async ({car}, thunkAPI)=>{
    try{
    await carService.create(car)
        thunkAPI.dispatch(all())
    }catch (e){
        return thunkAPI.rejectWithValue(e.response.data)}})

const update=createAsyncThunk(
    'carsSlice/update',
    async ({id, car}, thunkAPI)=>{
        try{
            await carService.updateById(id,car)
            thunkAPI.dispatch(all())
        }catch (e){
            return thunkAPI.rejectWithValue(e.response.data)}})

const deleteCar=createAsyncThunk(
    'carsSlice/deleteCar',
    async ({id}, thunkAPI)=>{
        try{
            await carService.deleteById(id)
            thunkAPI.dispatch(all())
        }catch (e){
            return thunkAPI.rejectWithValue(e.response.data)}})

const carsSlice= createSlice({
    name:'carsSlice',
    initialState,
    reducers:{
        setCarForUpdate:(state, action)=>{
            state.carForUpdate=action.payload
        }
    },
    extraReducers:builder =>
        builder
            .addCase(all.fulfilled, (state, action)=>{
             state.cars= action.payload
        })
            .addCase(create.fulfilled, state=>{})
            .addCase(deleteCar.fulfilled, state => {})
            .addMatcher(isPending(),state => {
                state.isLoading=true
            })
            .addMatcher(isFulfilled(), state=>{
                state.isLoading=false
            })
            .addMatcher(isRejectedWithValue(), (state,action) => {
                state.isLoading=false
                state.errors=action.payload
            })

})


const {reducer:carReducer, actions:{setCarForUpdate} }=carsSlice

const carActions={
    all, create, setCarForUpdate, update, deleteCar
}
export {carActions, carReducer}
