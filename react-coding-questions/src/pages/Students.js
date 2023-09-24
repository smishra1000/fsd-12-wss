
import { useEffect, useState } from "react"
import {useNavigate} from "react-router-dom"
function Students() {
    const [students, setStudents] = useState([])
    const [filteredStudents,setFilteredStudents] = useState([])
    const navigate = useNavigate();
    const gotoCreateStudentPage = ()=>{
        // we'll do logic for navigate
        navigate("/createStudent")
    }

    const getStudentsRecords = ()=>{
        let students = JSON.parse(localStorage.getItem("students"))
        if(students){
            setFilteredStudents(students)
            setStudents(students)
        }else{
            setFilteredStudents([])
            setStudents([])
        }
    }
    useEffect(()=>{
        getStudentsRecords();
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

    const editStudent = (e,student)=>{

        navigate("/updateStudent/"+student.id)
    }

    const deleteStudent = (e,st)=>{
        let filteredStudents = students.filter((student)=>{
            return student.id!==st.id
        })
        localStorage.setItem("students",JSON.stringify(filteredStudents))
        getStudentsRecords();
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
                {filteredStudents.length===0 && <h4>No Students</h4>}
                {filteredStudents.length>0 && <table className="table table-success table-striped">
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
                                        <button type="button" className="btn btn-primary" onClick={(e)=>editStudent(e,student)}>Edit</button>
                                        <button type="button" className="btn btn-secondary" onClick={(e)=>deleteStudent(e,student)}>Delete</button>
                                    </td>

                                </tr>
                            )
                        })}
                    </tbody>
                </table>}
            </div>

        </div>
    )
}

export default Students