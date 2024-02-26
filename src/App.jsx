import { useState } from 'react'
import './App.css'
import AddTodo from './components/Add Todo/AddTodo'
import TodoList from './components/ToDoList/ToDoList'
import ToDoContext from './context/ToDoContext'
function App() {
  const [list,setList]=useState([
    {id:1,todoData:'todo 1',finished:false},
    {id:2,todoData:'todo 2',finished:true},
  
  ])
  return (
    <ToDoContext.Provider value={{list,setList}}>
      <AddTodo updateList={(todo)=>setList([
              ...list,{id:list.length+1,todoData:todo,finished:false}])}/>
      <TodoList/>
    </ToDoContext.Provider>
  )
}

export default App
