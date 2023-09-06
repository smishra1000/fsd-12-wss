import React from "react";
class Course extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            courseName: "",
            instructor: "",
            fee: "",
            duration: "4 months",
            courses: []
        }
    }
    onNameChange(e) {
        this.setState({ courseName: e.target.value })
    }
    onInstructorChange(e) {
        this.setState({ instructor: e.target.value })
    }
    onFeeChange(e) {
        this.setState({ fee: e.target.value })
    }

    createCourse(e) {
        e.preventDefault();
        let course = {
            courseName: this.state.courseName,
            instructor: this.state.instructor,
            fee: this.state.fee,
            duration: this.state.duration
        }
        let tempcourses = this.state.courses
        tempcourses.push(course)
        this.setState({ courses: tempcourses })
        this.resetCourse();
    }
    resetCourse() {
        this.setState({ courseName: "", fee: "", instructor: "" })
    }

    deleteCourse(courseName){
        let tempCourses = this.state.courses
        let remainingCourses =tempCourses.filter((item)=>{
            return !item.courseName.toLowerCase().includes(courseName.toLowerCase())
        })
        this.setState({courses:remainingCourses})
    }

    render() {
        return (
            <div>
                <h1>Course Registration form</h1>
                <form onSubmit={(e) => this.createCourse(e)}>
                    <div class="mb-3">
                        <label class="form-label">Name</label>
                        <input type="text" class="form-control" onChange={(e) => this.onNameChange(e)} value={this.state.courseName} />
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Instructor</label>
                        <input type="text" class="form-control" onChange={(e) => this.onInstructorChange(e)} value={this.state.instructor} />
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Fee</label>
                        <input type="text" class="form-control" onChange={(e) => this.onFeeChange(e)} value={this.state.fee} />
                    </div>

                    <button type="submit" class="btn btn-success">Save</button>
                </form>
                <h1>course info</h1>
                <div className="row">
                    {this.state.courses.map((course) => {
                        return (
                            <div className="col-md-3">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-text">{course.courseName}</h4>
                                        <p className="card-text">{course.instructor}</p>
                                        <p className="card-text">{course.fee}</p>
                                        <p className="card-text">{course.duration}</p>
                                    </div>
                                    <div className="card-footer">
                                        <span className="badge text-bg-danger" onClick={()=>this.deleteCourse(course.courseName)}>Delete</span>
                                        <span className="badge text-bg-primary">Edit</span>
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

export default Course