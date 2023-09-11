import { useState } from "react"
function EmployeeFn(){
    const [name,setName] = useState("test1")
    const [age,setAge] = useState(20)
    const [address,setAddress] = useState("hyd")
    const [salary] = useState(20000)
    return(
        <div>
            <h1>employee information</h1>
            <h4>name is  {name}</h4>
            <h4>age is {age}</h4>
            <h4>address is {address}</h4>
            <h4>salary is {salary}</h4>
        </div>
    )
}

export default EmployeeFn