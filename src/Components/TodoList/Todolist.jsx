import { useContext, useState } from "react"
import Todo from "../Todo/Todo"
import TodoContext from "../../Context/TodoContext"
import ToDodispatchContext from "../../Context/ToDodispatchContext"
function TodoList(){
    const {list}=useContext(TodoContext)
    const {dispatch}=useContext(ToDodispatchContext)

    function onFinished(isFinished,todo){
        dispatch({type:'on_Finished',payload:{todo,isFinished:isFinished}})
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
                    list.map(todo=>
                        <Todo key={todo.id} 
                            id={todo.id} 
                            isFinished={todo.finished} 
                            todoData={todo.todoData }
                            changeFinished={(isFinished)=>onFinished(todo,isFinished)}
                            onDelete={()=>onDelete(todo)}
                            onEdit={(todoText)=>onEdit(todo,todoText)}
                        />)}
        </div>
        
    )
}
export default TodoList