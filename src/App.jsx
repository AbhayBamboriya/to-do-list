
import { useState } from 'react'
import './App.css'
import Addtodo from './Components/AddTodo/Addtodo'
import TodoList from './Components/TodoList/Todolist'
import TodoContext from './Context/TodoContext'
function App() {
  // useContext is a hook and passing the todo context init
  const [list,setList] =useState( [
    {id:1, todoData:'todo 1',finished:false},
    {id:2, todoData:'todo 2',finished:false},
    {id:3, todoData:'todo 3',finished:true},
  
  ])
  return (
    // list and setlist as object 
    <TodoContext.Provider value={{list,setList}}>
      <Addtodo updateList={(todo) => setList([
        ...list,{todoData:todo,id:list.length+1,finished:false}])}/>
      <TodoList/>
    </TodoContext.Provider>
  )
}

export default App
