import {combineReducers, createStore} from "redux";
import {composeWithDevToolsDevelopmentOnly} from "@redux-devtools/extension";
import {todosReducer} from "./reducers/todosReducer";

const rootReducer=combineReducers({
    todosReducer: todosReducer
})
const composeEnhancers= composeWithDevToolsDevelopmentOnly({
    trace: true,
    traceLimit:25
})
const store= createStore(rootReducer, composeEnhancers());

export {store}