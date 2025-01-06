import { useContext, useState } from "react"
import { useDispatch } from "react-redux"
// import { addtodo } from "../../actions/todoaction"

function AddTodo({addTodo}){
    const dispatch=useDispatch()
    const [inputText,setInputText]=useState('')
    const [show,setShow]=useState(false);
    function Adding(text){
        if(text=="") {
            setShow(true) 
            return
        }
        else{
            setShow(false)    
        }
        addTodo(text)
    }

    return(
            <div className="h-[40%] flex flex-col items-center justify-center gap-[10px]">
            <div className="flex">
            <input
                type="text"
                className="text-2xl border border-black p-[10px] rounded-2xl"
                value={inputText}
                placeholder="Add your next todo"
                onChange={e=>setInputText(e.target.value)}
            />
            <button onClick={()=>{
                // updateList(inputText)
                Adding(inputText)
                setInputText('');       //making the input field empty
                }}
                className="p-[5px] border px-5 py-2 border-black border-[2px] rounded-xl bg-amber-400 hover:bg-amber-600" 
                >Add</button>
                
            </div>
            {
                show && 
                <span className="text-red-700 text-3xl font-bold">
                    Enter Todo ...
                </span>
            }

        </div>
    )
}
export default AddTodo