// let employeeData = {
//     id:1,
//     name:"test1",
//     age:20,
//     salary:"20000"
// }

// function updateEmpAge(){
// // upadte the age
// }

// function updateEmpName(){
//     // update name
// }

// function EmpUpdate(){
//     if(field=="age"){
//         upadte age
//     }else if(field==="name"){
//         // update name
//     }else if(field===="salary"){
//         // update salary
//     }
// }

import { useReducer } from "react"
function UseReducerEmployee(){
    const empData = {
        id:1,
        age:20,
        name:"test1",
        salary:20000
    }
    function EmpReducer(state,action){
        if(action==="update_age"){
            return {
                ...state,
                age:state.age+1
            }
        }else{
            return state
        }

    }
    const [state,dispatch] = useReducer(EmpReducer,empData)

    const updateAge = ()=>{
        dispatch("update_age")
    }
    return(
        <div>
            <h3>Employee example using use reducer</h3>
            <h4>name is {state.name}</h4>
            <h4>age is {state.age}</h4>
            <h4>salary is {state.salary}</h4>
            <button onClick={()=>updateAge()}>Update Age</button>
        </div>
    )
}

export default UseReducerEmployee
