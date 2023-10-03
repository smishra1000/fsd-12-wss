import { useEffect,useState } from "react"
function Employee(){
    const [employees,setEmployees] = useState([])
    useEffect(()=>{
        fetch("http://localhost:8001/employees/all").then(function(res){
            return res.json()
        }).then(function(result){
            setEmployees(result)
        })
    },[])
    return(
        <div className="container">
            <h1>Employee managament using react node express</h1>
            <div>
                <table className="table table-stripped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((emp)=>{
                            return(
                                <tr>
                                    <td>{emp.id}</td>
                                    <td>{emp.name}</td>
                                    <td>{emp.email}</td>
                                    <td>{emp.age}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Employee