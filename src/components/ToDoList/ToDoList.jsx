import Todo from "../Todo/Todo"
import ToDoContext from "../../context/ToDoContext"
import { useContext } from "react"
import ToDoDispatch from "../../context/ToDoDispatch"
function TodoList(){
    const {list}=useContext(ToDoContext)
    const {dispatch}=useContext(ToDoDispatch)
    function onFinished(todo,isFinished){
        
        dispatch({type:'finishTodo',payload:{todo,isFinished:isFinished}})      
    }

    function onDelete(todo){
        dispatch({type:'delete_todo',payload:{todo}})       
    }


    function onEdit(todo,todoText){
        dispatch({type:'edit_todo',payload:{todo,todoText}})       
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