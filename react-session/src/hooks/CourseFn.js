import { useState } from "react"

function CourseFn() {
    const [course,setCourse] = useState({name:"",instructor:""})
    const [isDisplay,setIsDisplay] = useState(false)

    const onInstructorChange=(e)=>{
        setCourse((prevState)=>{
            return {
                ...prevState,
                instructor:e.target.value
            }
        })
    }
    const onNameChange = (e)=>{
            setCourse((prevState)=>{
                return {
                    ...prevState,
                    name:e.target.value
                }
            })
    }

    const saveCourse = (e)=>{
        e.preventDefault();
        setIsDisplay(true)

    } 
    return (
        <div>
            <h1>course regsitration</h1>
            <div className="row">
                <form onSubmit={(e)=>saveCourse(e)}>
                    <label>Title</label>
                    <input type="text" value={course.name} placeholder="enter course title" onChange={(e)=>onNameChange(e)}/>
                    <label>Instructor name</label>
                    <input type="text" placeholder="enter instructor name" value={course.instructor} onChange={(e)=>onInstructorChange(e)}/>
                    <button>Save</button>
                </form>
            </div>
            {isDisplay && <div className="row">
                <h4>course info</h4>
                    <h4>name: {course.name}</h4>
                    <h4>instructor: {course.instructor}</h4>
            </div>}
        </div>
    )
}

export default CourseFn