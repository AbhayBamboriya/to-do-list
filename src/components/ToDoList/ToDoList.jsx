import Todo from "../Todo/Todo"
import ToDoContext from "../../context/ToDoContext"
import { useContext } from "react"
function TodoList(){
    const {list,setList}=useContext(ToDoContext)

    function onFinished(todo,isFinished){
        const updatedList=list.map((t)=>{
            if(t.id==todo.id){
                todo.finished=isFinished
            }
            return t
        })
        setList(updatedList)
    }

    function onDelete(todo){
        const updatedList=list.filter(t=>t.id!=todo.id)
                        setList(updatedList)
                        
    }


    function onEdit(todo,toDoText){
        const updatedList=list.map((t)=>{
            if(t.id==todo.id){
                todo.todoData=toDoText
            }
            return t
        })
        setList(updatedList)
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