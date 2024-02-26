import { useState } from "react"
import Todo from "../Todo/Todo"

function TodoList({list,updatedList}){

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
                    }}/>)}
        </div>
    )
}
export default TodoList 