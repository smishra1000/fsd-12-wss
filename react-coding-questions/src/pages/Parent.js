import Child from "./Child"
import {useState} from "react"

function Parent(){
    const [color,setColor] = useState("red")
    const setBackground = (color)=>{
        setColor(color)
    }
    return(
        <div className="col-md-6" style={{background:`${color}`,height:'400px',textAlign:'center'}}>
            <Child setBackground={setBackground}/>
        </div>
    )
}

export default Parent