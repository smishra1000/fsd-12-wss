import React from "react";

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            counter:0
        }
    }
    increment(){
        this.setState({counter:this.state.counter+1})
    }
    render(){
        return(
            <div>
                <h4>Counter is {this.state.counter}</h4>
                <button onClick={()=>this.increment()}>Increment</button>
                <button>Increment</button>
                <button>Reset</button>
            </div>
        )
    }
}

export default Counter