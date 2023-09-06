import React from "react";
class StudentList extends React.Component {
    constructor() {
        super()
        this.state = {
            students: [
                {
                    id: 1,
                    roll: 101,
                    name: "test1",
                    age: 20,
                    courses: ["mean", "mern", "ds"]
                },
                {
                    id: 2,
                    roll: 102,
                    name: "test2",
                    age: 22,
                    courses: ["mean"]
                },
                {
                    id: 3,
                    roll: 103,
                    name: "test3",
                    age: 23,
                    courses: ["mern", "ds"]
                },
                {
                    id: 4,
                    roll: 104,
                    name: "test4",
                    age: 24,
                    courses: ["ds"]
                }
            ]
        }
    }

    render() {
        return (
            <div className="contaniner">
                <h1>List of Students</h1>
                <div className="row">
                    {this.state.students.map((student) => {
                        return (
                            <div className="col-md-3">
                                <div className="card">
                                    <img src="https://th.bing.com/th?id=OIP.tQ7ULylwMqPFwFtVdCN9mgAAAA&w=176&h=176&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" className="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 className="card-title">Name : {student.name}</h5>
                                        <p className="card-text">Roll : {student.roll}</p>
                                        <p className="card-text">Age: {student.age}</p>
                                        <p className="card-text">ID: {student.id}</p>
                                        {student.courses.map((course)=>{
                                            return(
                                                <span class="badge text-bg-primary">{course}</span>
                                            )
                                        })}
                                       
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>

            </div>
        )
    }
}

export default StudentList