import { useSelector,useDispatch } from "react-redux"

function Counter(){
    const countState = useSelector((state)=>state.counter)
    const dispatch = useDispatch()

    const increment =()=>{
        dispatch({type:"increment"})
    }
    const decrement =()=>{
        dispatch({type:"decrement"})
    }
    const reset =()=>{
        dispatch({type:"reset"})
    }
    return(
        <div className="container">
            <h2>Counter example using react redux</h2>
            <div className="row">
            <div className="col-md-6" style={{width:"200px",height:'100px',background:'green',fontSize:'30px'}}>
                {countState.count}
            </div>
            <div className="col-md-6">
                <button className="btn btn-primary" onClick={()=>increment()}>Increment</button>
                <button className="btn btn-danger" onClick={()=>decrement()}>Decrement</button>
                <button className="btn btn-info" onClick={()=>reset()}>Reset</button>
            </div>
            </div>
        </div>
    )
}

export default Counter