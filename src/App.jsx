
import { useState } from 'react'
import './App.css'
import Addtodo from './Components/AddTodo/Addtodo'
import TodoList from './Components/TodoList/Todolist'

function App() {
  const [list,setList] =useState( [
    {id:1, todoData:'todo 1',finished:false},
    {id:2, todoData:'todo 2',finished:false},
    {id:3, todoData:'todo 3',finished:true},

])

  return (
    <>
      <Addtodo updateList={(todo) => setList([
        ...list,{todoData:todo,id:list.length+1,finished:false}])}/>
      <TodoList list={list} updateList={setList}/>
    </>
  )
}

export default App
