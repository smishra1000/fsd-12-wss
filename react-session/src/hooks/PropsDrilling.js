function Component1(props){
    return(
        <div>
            <h4>component1</h4>
            <Component2 age={props.age}/>
        </div>
    )
}

function Component2(props){
    return(
        <div>
            <h4>
                component2
            </h4>
            <Component3 age={props.age}/>
        </div>
    )
}

function Component3(props){
    return(
        <div>
            <h4>component3</h4>
            <p>age value is {props.age}</p>
        </div>
    )
}


function PropsDrilling(){
    return(
        <div>
            <h1>Props drilling ex</h1>
            <Component1 age="20"/>
        </div>
    )
}

export default PropsDrilling