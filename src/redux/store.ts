import {configureStore} from "@reduxjs/toolkit";
import exp from "constants";
import {carReducer} from "./slice/carSlice";

const store= configureStore({
    reducer:{
         cars:carReducer
    }
})


type RootState= ReturnType<typeof store.getState>
type AppDispatch=typeof store.dispatch

export type{
    RootState, AppDispatch
}
export {store}