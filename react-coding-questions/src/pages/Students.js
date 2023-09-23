

import { useEffect, useState } from "react"
import {useNavigate} from "react-router-dom"
// const studentsD = [
//     {
//         id: 1,
//         name: "Mahesh",
//         email: "mahesh@carrerx.com",
//         status: "active"
//     },
//     {
//         id: 2,
//         name: "Nikhil",
//         email: "nikhil@carrerx.com",
//         status: "active",
//     }
// ]
function Students() {
    const [students, setStudents] = useState([])
    const [filteredStudents,setFilteredStudents] = useState([])
    const navigate = useNavigate();
    const gotoCreateStudentPage = ()=>{
        // we'll do logic for navigate
        navigate("/createStudent")
    }

    useEffect(()=>{
        let students = JSON.parse(localStorage.getItem("students"))
        if(students){
            setFilteredStudents(students)
            setStudents(students)
        }
    },[])

    const onSearchChange = (e)=>{
        // logic for serach
        if(e.target.value){
            let filteredStu = students.filter((student)=>{
                let keys = Object.keys(student);
                for(var key of keys){
                    if(student[key].toString().includes(e.target.value))
                    return true;
                }
                // return student.id.includes(e.target.value) ||
                //  student.name.includes(e.target.value) || 
                //  student.email.includes(e.target.value) || student.status.includes(e.targte.value)
            })
            setFilteredStudents(filteredStu)
        }else{
            setFilteredStudents(students)
        }
    }
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-9">
                    <div className="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Search Student" onChange={(e)=>onSearchChange(e)}/>
                            <button className="btn btn-outline-warning" type="button" id="button-addon2">Search</button>
                    </div>
                </div>
                <div className="col-md-3">
                    <button type="button" className="btn btn-success" onClick={(e)=>gotoCreateStudentPage(e)}>+ Create</button>
                </div>
            </div>
            <div className="row">
                <h3>Students Records</h3>
                <table className="table table-success table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredStudents.map((student) => {
                            return (
                                <tr>
                                    <td>{student.id}</td>
                                    <td>{student.name}</td>
                                    <td>{student.email}</td>
                                    <td>{student.status}</td>
                                    <td>
                                        <button type="button" className="btn btn-primary">Edit</button>
                                        <button type="button" className="btn btn-secondary">Delete</button>
                                    </td>

                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Students