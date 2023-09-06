import React from "react"

class StudentForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            age: "",
            mobile: "",
            isDisplay:false,
            displayAge:false
        }
    }
    nameChange(e){
        this.setState({name:e.target.value})
    }
    ageChange(e){
        this.setState({age:e.target.value})
    }
    mobileChange(e){
        this.setState({mobile:e.target.value})
    }

    saveData(e){
        e.preventDefault();
        this.setState({isDisplay:true})

    }

    render() {
        return (
            <div className="row">
                <h1>Student Registration form</h1>
                <form onSubmit={(e)=>this.saveData(e)}>
                    <div class="mb-3">
                        <label class="form-label">Name</label>
                        <input type="text" class="form-control" onChange={(e)=>this.nameChange(e)} value={this.state.name}/>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Age</label>
                        <input type="text" class="form-control" onChange={(e)=>this.ageChange(e)} value={this.state.age}/>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Mobile</label>
                        <input type="text" class="form-control" onChange={(e)=>this.mobileChange(e)} value={this.state.mobile}/>
                    </div>

                    <button type="submit" class="btn btn-success">Save</button>
                </form>

                {this.state.isDisplay && <div className="col-md-4">
                        <h1>student info </h1>
                        <h4>Name {this.state.name}</h4>
                        {this.state.displayAge && <h4>Age : {this.state.age}</h4>}
                        <h4>Mobile: {this.state.mobile}</h4>
                </div>}
            </div>
        )
    }
}

export default StudentForm