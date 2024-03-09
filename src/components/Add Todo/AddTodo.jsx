import { useState } from "react"

function AddTodo({updateList}){
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
                updateList(inputText)
                setInputText('');       //making the input field empty
                }}>Add</button>
        </div>
    )
}
export default AddTodo