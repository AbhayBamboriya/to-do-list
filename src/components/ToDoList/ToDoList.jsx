import Todo from "../Todo/Todo"
import ToDoContext from "../../context/ToDoContext"
import { useContext } from "react"
import { useDispatch, useSelector } from "react-redux"
function TodoList({editTodo,deleteTodo,todofinished}){
    const dispatch=useDispatch()
    const list=useSelector((state)=>state.todo.todoList)
    console.log('list is',list);
    
    function onFinished(todo,isFinished){
        todofinished({todo,isFinished})
        // dispatch({type:'finishTodo',payload:{todo,isFinished:isFinished}})      
    }

    function onDelete(todo){
        deleteTodo({todo})  //creating paylload object
        // disp/atch({type:'delete_todo',payload:{todo}})       
    }


    function onEdit(todo,todoText){
        editTodo({todo,todoText})
        // dispatch({type:'edit_todo',payload:{todo,todoText}})       
    }

    return(
        <div>
            {list.length>0 && 
            
            list.map(todo=><Todo 
                    key={todo.id} 
                    isFinished={todo.finished} 
                    onEdit={(todoText)=>onEdit(todo,todoText)}
                    id={todo.id} 
                    todoData={todo.todoData}
                    changeFinished={(isFinished)=>onFinished(todo,isFinished)}
                    onDelete={()=>onDelete(todo)}
                    />)}
        </div>
    )
}
export default TodoList 