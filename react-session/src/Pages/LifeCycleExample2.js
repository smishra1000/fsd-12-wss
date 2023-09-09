import React from "react";
class LifeCycleExample2 extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            age:20
        }
    }
    render(){
        return(
            <div>
                <h1>Lifecycle2 example</h1>
                <h1>hellomy age is {this.state.age}</h1>
            </div>
        )
    }

    componentWillUnmount(){
        console.log("hey i am going to die")
    }
}

export default LifeCycleExample2