import { useContext, useState } from "react"
import ToDoDispatch from "../../context/ToDoDispatch"

function AddTodo(){
    const [inputText,setInputText]=useState('')
    const {dispatch}=useContext(ToDoDispatch)
    return(
        <div>
            <input
                type="text"
                value={inputText}
                placeholder="add your next todo"
                onChange={e=>setInputText(e.target.value)}
            />
            <button onClick={()=>{
                // updateList(inputText)
                dispatch({type:'add_todo',payload:{todoText:inputText}})
                setInputText('');       //making the input field empty
                }}>Add</button>
        </div>
    )
}
export default AddTodo