import React from "react";
class CompnayClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:"abc",
            address:"hyd"
        }
    }
    changeName(){
        this.setState({name:"abc updated"})
    }
    render(){
        return(
            <div>
                <h1>compnay info in class based</h1>
                <h4>compnay name is {this.state.name}</h4>
                <h4>address is {this.state.address}</h4>
                <button onClick={()=>this.changeName()}>change name</button>
            </div>
        )
    }
}

export default CompnayClass