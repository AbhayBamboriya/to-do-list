import { useState } from "react"

function Todo({todoData,isFinished,changeFinished}){
    const[finished,setFinised]=useState(isFinished)
    return(
        <>
            <input type="checkbox" checked={finished} onChange={(e)=>{
                setFinised(e.target.checked)
                changeFinished(e.target.checked)
            }}/>
            {todoData}
            <button>Edit</button>
            <button>Delete</button>
            <br/>
        </>
    )
}
export default Todo