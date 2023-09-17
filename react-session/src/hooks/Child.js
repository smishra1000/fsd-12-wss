import {memo} from "react"
function Child(props){
    console.log("child rendered")
    return(
        <div>
            <h4>Child component</h4>
            <h4>data from parent {props.name}</h4>
        </div>
    )
}

export default memo(Child)