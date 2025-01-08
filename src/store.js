
// reducer import 
import toDoReducers from "./Slices/todoSlices";
import { configureStore } from "@reduxjs/toolkit";

const store=configureStore({
    reducer:{
        todo:toDoReducers
    },
    devTools:true
})



export default store