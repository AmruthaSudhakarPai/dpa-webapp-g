import { combineReducers, createStore } from "redux";
import homeReducer from "./reducers/homeReducers";


const rootReducer = combineReducers({
    home:homeReducer
});
export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;
