import { useReducer } from "react"
const initialState = {
    count:0
}
function UseReducerHookEx(){
    function CounterReducer(state,action){
        if(action==="increment"){
            return {
                count:state.count+1
            }
        }else if(action==="decrement"){
            return{
                count:state.count-1
            }
        }else if(action==="reset"){
            return{
                count:0
            }
        }else{
            return state;
        }

    }
    const [state,dispatch] = useReducer(CounterReducer,initialState)

    const increment = ()=>{
        dispatch("increment")
    }
    const decrement = ()=>{
        dispatch("decrement")
    }
    const reset = ()=>{
        dispatch("reset")
    }
    return(
        <div>
            <h1>use reducer hook demo</h1>
            <h4>counter value is {state.count}</h4>
            <button onClick={()=>increment()}>increment</button>
            <button onClick={()=>decrement()}>decrement</button>
            <button onClick={()=>reset()}>reset</button>
        </div>
    )
}

export default UseReducerHookEx