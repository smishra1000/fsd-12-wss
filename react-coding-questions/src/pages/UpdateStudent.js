import { useEffect, useState } from "react"
import { useParams,useNavigate } from "react-router-dom"

function UpdateStudent() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const { id } = useParams()
    const naviagte = useNavigate()
    useEffect(() => {
        const students = JSON.parse(localStorage.getItem("students"))
        if (students) {
            let selectedStudent = students.find((student) => {
                return student.id === Number(id)
            })
            if (selectedStudent) {
                setEmail(selectedStudent.email)
                setName(selectedStudent.name)
            }

        }
    },[])

    const onNameChange = (e) => {
        setName(e.target.value)
    }
    const onEmailChange = (e) => {
        setEmail(e.target.value)
    }
    
    const editStudent = (e) => {
        e.preventDefault();
        let students = JSON.parse(localStorage.getItem("students"))
        let updatedStudents = students.map((student)=>{
            if(student.id===Number(id)){
                return {...student,email,name}
            }else{
                return student
            }
        })
        localStorage.setItem("students",JSON.stringify(updatedStudents))
        naviagte("/students")
        
    }
    return (
        <div className="container">
            <div className="row">
                <h4>Update Student</h4>
                <form onSubmit={(e) => editStudent(e)}>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Name</label>
                        <input type="text" class="form-control" id="exampleInputPassword1" onChange={(e) => onNameChange(e)} value={name}/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => onEmailChange(e)} value={email}/>
                    </div>

                    <button type="submit" class="btn btn-warning">Update</button>
                </form>
            </div>
        </div>
    )
}

export default UpdateStudent