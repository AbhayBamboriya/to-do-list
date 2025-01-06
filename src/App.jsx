import { useDispatch } from 'react-redux'
import './App.css'
import AddTodo from './components/Add Todo/AddTodo'
import TodoList from './components/ToDoList/ToDoList'
import { bindActionCreators } from 'redux'
import { addTodo,deleteTodo,editTodo,todofinished } from './actions/todoaction'
function App() {
  const dispatch=useDispatch()
  const action=bindActionCreators({addTodo,deleteTodo,editTodo,todofinished},dispatch)
  return ( 

    <div className='h-screen flex flex-col bg-gray-800 items-center'>
        <h1 className='text-6xl text-center pt-[30px] italic text-lime-500'>To-Do-List</h1>
        <AddTodo addTodo={action.addTodo}/>
        <TodoList deleteTodo={action.deleteTodo} editTodo={action.editTodo} todofinished={action.todofinished}/>
    </div>
  )
}

export default App
