import { useSelector, useDispath } from "react-redux"

function Employee() {
    const employeesState = useSelector((state) => state.employees)
    return (
        <div className="container">
            <div className="row">
                {employeesState.employees.map((employee) => {
                    return (
                        <div className="col-md-3">
                            <div className="card">
                                <h1>Name:{employee.name}</h1>
                                <p>age:{employee.age}</p>
                                <p>salary:{employee.salary}</p>
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}
export default Employee