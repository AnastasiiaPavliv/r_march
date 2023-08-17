import {combineReducers, createStore} from "redux";

import {episodesReducer} from "./reducer";
import {charactersReducer} from "./reducer/charactersReducer";

const rootReducer=combineReducers({
    episodes: episodesReducer,
    characters: charactersReducer
});
const store=createStore(rootReducer);

export {store}