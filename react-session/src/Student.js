import React from "react"
class Student extends React.Component{
    constructor(){
        super();
        this.state={
            name:"test1",
            age:20,
            rollNo:101,
            courses:["MERN STACK","MEAN STACK","DS","PYTHON"]
        }
    }

    render(){
        return(
            <div>
                <h2>Student information</h2>
                <h4>Name: {this.state.name}</h4>
                <h4>age: {this.state.age}</h4>
                <h4>rollNo: {this.state.rollNo}</h4>
                <ul>{this.state.courses.map((course)=>{
                    return(
                       <li>{course}</li>
                    )
                })}</ul>
            </div>
        )
    }
}

export default Student