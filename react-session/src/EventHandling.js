import React from "react"

class EventHandling extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            count:0
        }
        this.increment = this.increment.bind(this)
        // this.decrement = this.decrement.bind(this)
        // this.reset = this.reset.bind(this)
    }
    increment(){
         this.setState({count:this.state.count+1})
        //this.state.count = 2
        //console.log(this.state.count)
    }
    decrement(){
        this.setState({count:this.state.count-1})
    }
    reset(){
        this.setState({count:0})
    }
    render(){
        return(
            <div className="row">
                <div className="col-md-3">
                    <h3>counter value= {this.state.count}</h3>
                    <button onClick={this.increment}>Increment</button>
                    <button onClick={this.decrement.bind(this)}>Decrement</button>
                    <button onClick={()=>this.reset()}>Reset</button>

                </div>
            </div>
        )
    }
}

export default EventHandling