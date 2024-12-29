import { useContext, useState } from "react"
import { useDispatch } from "react-redux"
// import { addtodo } from "../../actions/todoaction"

function AddTodo({addTodo}){
    const dispatch=useDispatch()
    const [inputText,setInputText]=useState('')
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
                addTodo(inputText)
                setInputText('');       //making the input field empty
                }}>Add</button>
        </div>
    )
}
export default AddTodo