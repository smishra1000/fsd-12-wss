import React from "react";
class Input extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props)
        return(
            <input type={this.props.type} placeholder={this.props.placeholder}/>
        )
    }
}

export default Input