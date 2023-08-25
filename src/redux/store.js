import {configureStore} from "@reduxjs/toolkit";
import {carReducer} from "./slice/carsSlice";

const store=configureStore({
   reducer:{
      cars:carReducer
   }
})
export {store}