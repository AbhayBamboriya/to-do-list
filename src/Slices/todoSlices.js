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
            console.log('local',s);
            
            localStorage.setItem('state',JSON.stringify(state.todoList))
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
        },
        todofinished:(state,action)=>{
            let todo=action.payload.todo
            let isFinished=action.payload.isFinished
            state.todoList=state.todoList.map((t)=>{
                if(t.id==todo.id){
                    todo.finished=isFinished      //by default set
                }
                return t
            })
            localStorage.setItem('state',JSON.stringify(state.todoList))
        },
        deleteTodo:(state,action)=>{
            let todo=action.payload.todo
            state.todoList=state.todoList.filter(t=>t.id!=todo.id)
            localStorage.setItem('state',JSON.stringify(state.todoList))
        }
        
    }
})
export const {deleteTodo,editTodo,todofinished,addTodo}=todoslice.actions
export default todoslice.reducer