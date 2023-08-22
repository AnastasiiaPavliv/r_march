import {applyMiddleware, combineReducers, createStore} from "redux";
import {carReducer} from "./reducer/carReducer";
import thunk from "redux-thunk";

const rootReducer=combineReducers({
     cars:carReducer
})
const store=createStore(rootReducer, applyMiddleware(thunk))
export {store}