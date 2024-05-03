function todoReducer(state,action){
    if(action.type=='add_todo'){
        let todoText=action.payload.todoText
        return [
            ...state,{todoData:todoText,id:state.length+1,finished:false}
        ]
    }
    else if(action.type=='edit_todo'){
        let todo=action.payload.todo
        let todoText=action.payload.todoText
        const upadatedList= state.map((t)=>{
            if(t.id==todo.id)   {
                todo.todoData=todoText
            }
            return t
        })
        return upadatedList
    }
    else if(action.type=='delete_todo'){
        let todo=action.payload.todo
        const upadatedList= state.filter(t=>t.id != todo.id)
        return upadatedList
    }

    else if(action.type=='on_Finished'){
        let todo=action.payload.todo
        let isFinished=action.payload.isFinished
        const upadatedList= state.map((t)=>{
            if(t.id==todo.id)   {
                todo.finished=isFinished
            }
            return t
        })
        return upadatedList
    }
    else{
        return state
    }
}
export default todoReducer