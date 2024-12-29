import { combineReducers, createStore } from "redux";

// reducer import 
import toDoReducers from "./reducers/todoReducers";
const reducers=combineReducers({todo:toDoReducers})

const store=createStore(reducers)

export default store