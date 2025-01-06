import { useState } from "react"
function Todo({todoData,isFinished,changeFinished,onDelete,onEdit}){
    const[finished,setFinised]=useState(isFinished)
    const[Isediting,setIsEditing]=useState(false) //initally not editing    
    const[editTet,setEditText]=useState(todoData)
    // finished=true;
    const [show,setShow]=useState(false)
    function Editing(editTet){
        if(editTet==""){
            setShow(true)
            return
        }
        onEdit(editTet)
    }
    return(
        <div className="flex flex-col items-center gap-[10px] p-[10px]">
            <div className="flex gap-[7%]"> 
                <input type="checkbox" checked={finished} onChange={(e)=>{
                    setFinised(e.target.checked)
                    changeFinished(e.target.checked)
                }}/>
                {(Isediting) ? <input type="text" value={editTet} className="text-3xl border border-black p-[7px] rounded-2xl" onChange={e=>setEditText(e.target.value)} />:<span className="text-white text-[35px]">{todoData}</span>}
                <button 
                className="p-[5px] border px-5 py-2 border-black border-[2px] rounded-xl bg-green-600 hover:bg-green-800"     
                onClick={()=>{
                    setIsEditing(!Isediting)
                    Editing(editTet)

                }}>{(!Isediting) ? 'Edit' : 'Save'}</button>
                {/* <br/> */}
                <button   className="p-[5px] border px-5 py-2 border-black border-[2px] rounded-xl bg-red-600 hover:bg-red-800"  onClick={onDelete}>Delete</button>
                <br/>

                
            </div>
            <div>
            {
                    show && 
                    <span className="text-red-700 text-3xl font-bold">
                        Enter Todo ...
                    </span>
                }
            </div>
           
        </div>
        
    )
}
export default Todo