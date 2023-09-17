import { useEffect, useRef } from "react"

function UseRefHookEx(){
    const nameRef = useRef()
    const ageRef = useRef()
    const saveData = ()=>{
        console.log(nameRef.current.value)
        console.log(ageRef.current.value)
    }
    useEffect(()=>{
        ageRef.current.focus()
    },[])
    return(
        <div>
            <h4>Use Ref Hook Example</h4>
            <label>Name</label>
            <input type="text" ref={nameRef}/>
            <label>Age</label>
            <input type="text" ref={ageRef}/>
            <button onClick={()=>saveData()}>SaveData</button>
        </div>
    )
}

export default UseRefHookEx