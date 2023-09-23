const initialEmployees = {
    employees:[
        {
            id:1,
            name:"test1",
            age:20,
            salary:200000
        },
        {
            id:2,
            name:"test2",
            age:22,
            salary:200000
        }
    ]
}

function EmployeeReducer(state=initialEmployees,action){
    if(action.type==="ADD_EMPLOYEE"){
        return {
           employees:[...state.employees,{id:3,name:"test3",age:30,salary:40000}]
        }
    }else {
        return state
    }
}

export default EmployeeReducer