import { useCallback, useState } from "react"
import Child from "./Child"

function Parent(){
    console.log("parent rendered")
    const [name,setName] = useState("test1")
    const [count,setCount] = useState(0)
    const changeName = ()=>{
        setName("testupdated")
        setCount(count+1)
    }
    // const changeAge = ()=>{
    //     console.log("changing age")
    // }

    const changeAgeUsingCallBack = useCallback(()=>{
        console.log("changing age")
    },[count])

    

    return(
        <div>
            <h4 style={{color:'green'}}>Parent component green</h4>
            <h4 style={{color:'green'}}>parent name is {name}</h4>
            <button onClick={()=>changeName()}>Change Name</button>
            <Child changeAge={changeAgeUsingCallBack}/>
        </div>
    )
}

export default Parent