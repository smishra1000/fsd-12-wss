import { useState } from "react"
import CompnayClass from "../Pages/CompanyClass"
import CompanyFn from "./CompanyFn"
import CourseFn from "./CourseFn"
import EmployeeFn from "./EmployeeFn"
import UseEffectHookEx from "./UseEffectHookEx"
import UseEffectCleaner from "./UseEffectWithCleaner"
import UseStateHookEx from "./UseStateHookEx"
import PropsDrilling from "./PropsDrilling"
import UseContextHookEx from "./UseContextHookEx"
import UseReducerHookEx from "./UseReducerHookEx"
import UseStateCounter from "./UseStateCounter"
import UseReducerEmployee from "./UseReducerEmployee"

function AllHooks(){
    const [show,setShow] = useState(false)
    return(
        <div>
            <h1>All Hooks Example </h1>
            {/* <UseStateHookEx/>
            <EmployeeFn/>
            <CompanyFn/> */}
            {/* <CompnayClass/> */}
            {/* <CourseFn/> */}
            {/* <UseEffectHookEx/> */}
            {/* {show &&<UseEffectCleaner/>}
            <button onClick={()=>setShow(!show)}>hide/show</button> */}
            {/* <PropsDrilling/> */}
            {/* <UseContextHookEx/> */}
            {/* <UseReducerHookEx/>
            <UseStateCounter/> */}
            <UseReducerEmployee/>
            
        </div>
    )
}

export default AllHooks