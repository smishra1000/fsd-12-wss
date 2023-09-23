import { useState } from "react"
import {useNavigate} from "react-router-dom"
function CreateStudent() {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const navigate = useNavigate();

    const createStudent = (e)=>{
        e.preventDefault()
        let students = JSON.parse(localStorage.getItem("students"))
        if(students){
            let student = {
                id:students.length+1,
                name:name,
                email:email,
                status:"active"
            }
            let newStudents = [...students,student]
            localStorage.setItem("students",JSON.stringify(newStudents))
        }else{
            let student = {
                id:1,
                name:name,
                email:email,
                status:"active"
            }
            let newStudents=[student]
            localStorage.setItem("students",JSON.stringify(newStudents))
        }
        navigate("/students")
        
    }

    const onEmailChange = (e)=>{
            setEmail(e.target.value)
    }

    const onNameChange = (e)=>{
        setName(e.target.value)
    }

    return (
        <div className="container">
            <div>
                <h3>Create Student</h3>
                <div className="row">
                    <form onSubmit={(e)=>createStudent(e)}>
                    <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Name</label>
                            <input type="text" class="form-control" id="exampleInputPassword1" onChange={(e)=>onNameChange(e)}/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>onEmailChange(e)}/>
                        </div>
                       
                        <button type="submit" class="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateStudent