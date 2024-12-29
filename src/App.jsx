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

    <>
        <AddTodo addTodo={action.addTodo}/>
        <TodoList deleteTodo={action.deleteTodo} editTodo={action.editTodo} todofinished={action.todofinished}/>
    </>
  )
}

export default App
