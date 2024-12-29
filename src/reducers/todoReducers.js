function toDoReducers(state=[],action){
    if(action.type == 'add_todo'){
        let todoText=action.payload.todoText
        return [
            ...state,{id:state.length+1,todoData:todoText,finished:false}
        ]
    }
    else if(action.type=='edit_todo'){
        let todo=action.payload.todo
        let todoText=action.payload.todoText
        const updatedList=state.map((t)=>{
            if(t.id==todo.id){
                todo.todoData=todoText
            }
            return t
        })
        return updatedList
    }
    else if(action.type=='delete_todo'){
        let todo=action.payload.todo
        const updatedList=state.filter(t=>t.id!=todo.id)
        return updatedList
    }
    else if(action.type=='finishTodo'){
        let todo=action.payload.todo
        let isFinished=action.payload.isFinished
        const updatedList=state.map((t)=>{
            if(t.id==todo.id){
                todo.finished=isFinished      //by default set
            }
            return t
        })
        return updatedList
    }
    else{
        return state
    }


    createSlice({
        name:'todo',
        // initialState,
        reducers:{},
        extraReducers:(builder)=>{
            // if login in successfull then what to ds
            builder
            .addCase(login.fulfilled,(state,action)=>{
                // setting the data in the form of string 
                // we have stored in local storage because
                // statte will be fetched from local storage
                // current state will not be accessed from the local storage thatswhy we have saved in the state
                localStorage.setItem("data",JSON.stringify(action?.payload?.user))
                localStorage.setItem("isLoggedIn",true)
                localStorage.setItem("role",action?.payload?.user?.role)
                state.isLoggedIn=true
                state.data=action?.payload?.user
                state.role=action?.payload?.user?.role
            })
            
        }
    })


}

export default toDoReducers