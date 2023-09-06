import React from "react"

class Employee extends React.Component{
    constructor(){
        super();
        this.state = {
            name:"test1",
            address:"blr",
            email:"test1@gmail.com",
            company:"abc"
        }
    }
   render(){
    return(
        <div>
            {/* <h1>Employee Info</h1>
            <h4>Name: sameer</h4>
            <h4>email: test@gmail.com</h4>
            <h4>address : hyd</h4> */}
            <table border={5}>
                <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Email</th>
                    <th>Compnay</th>
                </tr>
                <tr>
                    <td>{this.state.name}</td>
                    <td>{this.state.address}</td>
                    <td>{this.state.email}</td>
                    <td>{this.state.company}</td>
                </tr>
            </table>
        </div>
    )
   }
}

export default Employee

