import {useState,useCallback, useMemo} from "react"

function UseCallBackHookEx(){
    const [count,setCount] = useState(0)
    const [age,setAge] = useState(10)
    const logFn = useMemo(()=>{log()},[count])

    const logAgeFn = useMemo(()=>{
        logAge()
    },[age])

    const incrementCount = ()=>{
        setCount(count+1)
    }

    const changeAge = ()=>{
        setAge(age+1)
    }

    function log(){
        console.log("logging for count recreated")
    }

    function logAge(){
        console.log("logging for age recreated")
    }

    return(
        <div>
            <h2>Use call back hook ex</h2>
            <h4>count is {count}</h4>
            <h4>age is {age}</h4>
            <button onClick={()=>incrementCount()}>Increment count</button>
            <button onClick={()=>changeAge()}>Change age</button>
            <h4>{logFn}</h4>
            <h4>{logAgeFn}</h4>
        </div>
    )
}

export default UseCallBackHookEx





