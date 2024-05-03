
import { useReducer, useState } from 'react'
import './App.css'
import Addtodo from './Components/AddTodo/Addtodo'
import TodoList from './Components/TodoList/Todolist'
import TodoContext from './Context/TodoContext'
import todoReducer from './Reducers/ToDoReducer'
import ToDodispatchContext from './Context/ToDodispatchContext'
function App() {
  // useContext is a hook and passing the todo context init
  // const [list,setList] =useState( [
  //   {id:1, todoData:'todo 1',finished:false},
  //   {id:2, todoData:'todo 2',finished:false},
  //   {id:3, todoData:'todo 3',finished:true},
  
  // ])
  // useReducer hook take first argument as reducer method and second argument as inital state
  // dispatch want only one argument as action object
  const [list,dispatch]=useReducer(todoReducer,[])
  return (
    // list and setlist as object 
    <TodoContext.Provider value={{list}}>
      <ToDodispatchContext.Provider value={{dispatch}}>
          <Addtodo/>
          <TodoList/>
      </ToDodispatchContext.Provider>
    </TodoContext.Provider>
  )
}

export default App
