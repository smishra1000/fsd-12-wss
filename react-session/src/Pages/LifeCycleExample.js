import React from "react";
import LifeCycleExample2 from "./LifeCycleExample2";
class LifeCycleExample extends React.Component{
    constructor(props){
        console.log("calling constructor")
        super(props)
        this.state ={
            name:"test1",
            isDisplay:true
        }
        // this.id = setInterval(function(){
        //     console.log("calling intervale")
        // },4000)
    }
  
    static getDerivedStateFromProps(props){
        console.log("calling getDerivedStateFromProps",props)
        return {age:props.age}
        return null;
    }
    changeName(e){
        this.setState({name:"test1updated"})
    }
    hideLifeCycle2(){
        this.setState({isDisplay:false})
    }
    shouldComponentUpdate(){
        // update phase
        console.log("update phase calling shouldComponentUpdate")
        return true;
    }
    render(){
        console.log("calling render")
        return(
            <div>
                <h1>LifeCycle Example demo</h1>
                <h4>Name is <span style={{color:"red"}}>{this.state.name} {this.state.age}</span></h4>
                <button onClick={(e)=>this.changeName(e)}>change name</button>
                <button onClick={()=>this.hideLifeCycle2()}>Remove Compoenent</button>
                {this.state.isDisplay &&<LifeCycleExample2/>}
            </div>
        )
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        // update phase
        console.log(" update phase calling getSnapshotBeforeUpdate",prevState)
        return {name:"test3"}
    }
    componentDidUpdate(prevProps,prevState,snapshot){
        console.log(" update phase calling componentDidUpdate",snapshot)
        console.log("-------------update  phase done-------------")
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
        console.log("calling componentDidMount")
        console.log("-------------creation phase done-------------")
    }
    componentWillUnmount(){
        console.log("component unmounting")
        //clearInterval(this.id)
    }
}


export default LifeCycleExample