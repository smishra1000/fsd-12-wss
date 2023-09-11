import { useState } from "react"

function UseStateHookEx() {
    const [counter, setCounter] = useState(0)
    console.log(useState(10))
    const [age,setAge] = useState(10)
    const [name,setName] = useState("sameer mishra")
    // let result = useState(10)
    // console.log(result)

    const changeName = ()=>{
        setName("sameer updated")
    }

    return (
        <div>
            <h4>counter value is {counter}</h4>
            <h4>my age is {age}</h4>
            <h4>my name is {name}</h4>
            <button onClick={()=>changeName()}>change name</button>
        </div>
    )
}

export default UseStateHookEx