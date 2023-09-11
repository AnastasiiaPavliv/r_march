import {createAsyncThunk, createSlice, isRejectedWithValue} from "@reduxjs/toolkit";
import {ICar} from "../../interface";
import {carService} from "../../services";
import {AxiosError} from "axios";

interface IState{
    cars:ICar[],
    carForUpdate:ICar
}
const initialState: IState={
    cars:[],
    carForUpdate: null
}

const getAll = createAsyncThunk<ICar[], void>(
    'carSlice/getAll',
    async (_,{rejectWithValue})=>{
        try {
           const {data}= await carService.getAll()
            return data
        }catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const carSlice=createSlice({
    name:'carsSlice',
    initialState,
    reducers:{

    },
    extraReducers:builder => builder
        .addCase(getAll.fulfilled, (state, action)=>{
            state.cars=action.payload
        })
})
const {reducer:carReducer, actions}= carSlice;

const carActions={
    ...actions, getAll
}

export {carActions, carReducer}