import React from "react"
class User extends React.Component{
    constructor(){
        super();
        this.state = {
            name:"test1",
            roll:"101",
            phone:"12412424",
            email:"test1@gmail.com",
            address:{
                street:"123-k",
                state:"TA"
            }
        }
    }
    render(){
        return(
            <div>
                <h4>user info</h4>
                <h4>name: {this.state.name}</h4>
                <h4>roll: {this.state.roll}</h4>
                <h4>phone: {this.state.phone}</h4>
                <h4>email: {this.state.email}</h4>
                <h4>address {this.state.address.state}</h4>
            </div>
        )
    }
}

export default User