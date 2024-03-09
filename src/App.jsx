import { useReducer } from 'react'
import './App.css'
import AddTodo from './components/Add Todo/AddTodo'
import TodoList from './components/ToDoList/ToDoList'
import ToDoContext from './context/ToDoContext'
import toDoReducers from './reducers/todoReducers'
import ToDoDispatch from './context/ToDoDispatch'
function App() {
  // const [list,setList]=useState([
  //   {id:1,todoData:'todo 1',finished:false},
  //   {id:2,todoData:'todo 2',finished:true},
  
  // ])
  const [list,dispatch]=useReducer(toDoReducers,[])
  return (
    <ToDoContext.Provider value={{list}}>
      <ToDoDispatch.Provider value={{dispatch}}>  
      {/* sending dispatch to all */}
      <AddTodo />
      <TodoList/>
      </ToDoDispatch.Provider>
    </ToDoContext.Provider>
  )
}

export default App
