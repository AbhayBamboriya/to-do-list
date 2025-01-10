import { createSlice } from "@reduxjs/toolkit";

const initialState={
    todoList:JSON.parse(localStorage.getItem('state')) || []
}
const todoslice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action) => {
            let todoText=action.payload.todoText
            state.todoList.push({id:state.todoList.length+1,todoData:todoText,finished:false})
            let s=localStorage.getItem('state')
            // console.log('test',JSON.stringify(s));
            console.log('local',localStorage);
            
            localStorage.setItem('state',JSON.stringify(state.todoList))
            // console.log('local',localStorage.getItem("state"));
            console.log(process.env.NODE_ENV);
            
            if (process.env.NODE_ENV === "development") {
                localStorage.setItem("state", JSON.stringify(state.todoList)); // Works on localhost
              } else {
                console.log("Not storing in production!"); // Deployed on Netlify
              }
        },
        editTodo:(state,action)=>{
            let todo=action.payload.todo
            let todoText=action.payload.todoText
            state.todoList=state.todoList.map((t)=>{
                if(t.id==todo.id){
                    t.todoData=todoText
                }
                return t
            })
            localStorage.setItem('state',JSON.stringify(state.todoList))
            console.log('local',localStorage.getItem("state"));
        },
        todofinished:(state,action)=>{
            let todo=action.payload.todo
            let isFinished=action.payload.isFinished
            console.log("finished",isFinished);
            
            state.todoList=state.todoList.map((t)=>{
                if(t.id==todo.id){
                    console.log(
                        "l",todo.finished
                    );
                    
                    t.finished=isFinished    //by default set\
                    console.log(
                        "lss",todo.finished
                    );
                    console.log('checksdsndnss');
                    
                }
                return t
            })
            localStorage.setItem('state',JSON.stringify(state.todoList))
            console.log('local',localStorage.getItem("state"));
        },
        deleteTodo:(state,action)=>{
            let todo=action.payload.todo
            state.todoList=state.todoList.filter(t=>t.id!=todo.id)
            localStorage.setItem('state',JSON.stringify(state.todoList))
            console.log('local',localStorage.getItem("state"));
        }
        
    }
})
export const {deleteTodo,editTodo,todofinished,addTodo}=todoslice.actions
export default todoslice.reducer