import { useState } from "react"
function Todo({todoData,isFinished,changeFinished,onDelete,onEdit}){
    const[finished,setFinised]=useState(isFinished)
    const[Isediting,setIsEditing]=useState(false) //initally not editing    
    const[editTet,setEditText]=useState(todoData)
    // finished=true;
    return(
        <>
            <input type="checkbox" checked={finished} onChange={(e)=>{
                setFinised(e.target.checked)
                changeFinished(e.target.checked)
            }}/>
            {(Isediting) ? <input type="text" value={editTet} onChange={e=>setEditText(e.target.value)}/>:<span>{todoData}</span>}
            <button onClick={()=>{
                setIsEditing(!Isediting)
                onEdit(editTet)
            }}>{(!Isediting) ? 'Edit' : 'Save'}</button>
            {/* <br/> */}
            <button onClick={onDelete}>Delete</button>
            <br/>
        </>
    )
}
export default Todo