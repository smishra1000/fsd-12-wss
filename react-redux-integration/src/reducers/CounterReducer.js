const initialState = {
    count:0
}

function CounterReducer(state=initialState,action){
    if(action.type==="increment"){
        return {
            count:state.count+1
        }
    }else if(action.type==="decrement"){
        return {
            count:state.count-1
        }
    }else if(action.type==="reset"){
        return {
            count:0
        }
    }else{
        return state;
    }
}

export default CounterReducer