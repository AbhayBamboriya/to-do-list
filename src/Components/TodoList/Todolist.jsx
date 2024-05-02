import { useContext, useState } from "react"
import Todo from "../Todo/Todo"
import TodoContext from "../../Context/TodoContext"
function TodoList(){
    const {list,setList}=useContext(TodoContext)
    return(
        <div>
                {list.length>0 &&
                    list.map(todo=>
                        <Todo key={todo.id} 
                            id={todo.id} 
                            isFinished={todo.finished} 
                            todoData={todo.todoData }
                            changeFinished={(isFinished)=>{
                                const upadatedList= list.map((t)=>{
                                    if(t.id==todo.id)   {
                                        todo.finished=isFinished
                                    }
                                    return t
                                })
                                setList(upadatedList)
                            }}
                            onDelete={()=>{
                                const upadatedList= list.filter(t=>t.id != todo.id)
                                setList(upadatedList)
                            }}
                            onEdit={(todoText)=>{
                                const upadatedList= list.map((t)=>{
                                    if(t.id==todo.id)   {
                                        todo.todoData=todoText
                                    }
                                    return t
                                })
                                setList(upadatedList)
                            }}
                        />)}
        </div>
        
    )
}
export default TodoList