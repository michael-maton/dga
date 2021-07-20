import { createStore, combineReducers } from "redux";
import shotsReducer from "./reducers/shotsReducer";

const rootReducer = combineReducers({
    shots: shotsReducer,
})

const configureStore = () => createStore(rootReducer);

export default configureStore;