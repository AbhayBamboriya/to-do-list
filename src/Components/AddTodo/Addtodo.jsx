import { useContext, useState } from "react"
import ToDodispatchContext from "../../Context/ToDodispatchContext"

function Addtodo(){
    const[inputText,setInputText]=useState('')
    const {dispatch}=useContext(ToDodispatchContext)
    return(
        <div>
            <input type="text" placeholder="Add your next Todo" value={inputText} onChange={e=>setInputText(e.target.value)}/>
            <button onClick={()=>{
                dispatch({type:'add_todo',payload:{todoText:inputText}})

                setInputText('')
            }}>Add</button>
        </div>
    )
}
export default Addtodo