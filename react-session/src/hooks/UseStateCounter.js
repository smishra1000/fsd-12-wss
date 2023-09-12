import { useState } from "react"
function UseStateCounter(){
    const [count,setCount] = useState(0)

    const increment = ()=>{
        setCount(count+1)
    }

    const decrement = ()=>{
        setCount(count-1)
    }
    const reset = ()=>{
        setCount(0)
    }
    return(
        <div>
            <h1>use state hook counter example</h1>
            <h4>counte value is {count}</h4>
            <button onClick={()=>increment()}>Increment</button>
            <button onClick={()=>decrement()}>Decrement</button>
            <button onClick={()=>reset()}>Reset</button>
        </div>
    )
}

export default UseStateCounter