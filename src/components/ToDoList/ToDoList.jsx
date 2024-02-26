import Todo from "../Todo/Todo"
import ToDoContext from "../../context/ToDoContext"
import { useContext } from "react"
function TodoList(){
    const {list,setList}=useContext(ToDoContext)
    return(
        <div>
            {list.length>0 && 
            list.map(todo=><Todo 
                    key={todo.id} 
                    isFinished={todo.finished} 
                    id={todo.id} 
                    todoData={todo.todoData}
                    changeFinished={(isFinished)=>{
                        const updatedList=list.map((t)=>{
                            if(t.id==todo.id){
                                todo.finished=isFinished
                            }
                            return t
                        })
                        setList(updatedList)
                    }}
                    onDelete={()=>{
                        const updatedList=list.filter(t=>t.id!=todo.id)
                        setList(updatedList)
                        
                    }}
                    onEdit={(toDoText)=>{
                        const updatedList=list.map((t)=>{
                            if(t.id==todo.id){
                                todo.todoData=toDoText
                            }
                            return t
                        })
                        setList(updatedList)
                    }}
                    />)}
        </div>
    )
}
export default TodoList 