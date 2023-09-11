import {useEffect,useState} from "react"

function UseEffectHookEx(){
    //useEffect(fn,depdendency)
    const [counter,setCounter] = useState(0)
    const [age,setAge] = useState(30)

    //1. it will call on each render 
    useEffect(()=>{
        console.log("i will call on each render callling use effect without dependency")
        // fetch('https://jsonplaceholder.typicode.com/todos/1')
        // .then(response => response.json())
        // .then(json => console.log(json))
    })

    //2. it will call on very first render time

    useEffect(()=>{
        console.log("i will call on very first render; calling with empty dependecny array")
        // fetch('https://jsonplaceholder.typicode.com/todos/1')
        // .then(response => response.json())
        // .then(json => console.log(json))
    },[])


    // 3. it will call on chnage of dependecy array list 

    useEffect(()=>{
        console.log("i will call on chnage of age; calling with dependency list")
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))

    },[age])

    const increment = ()=>{
        setCounter(counter+1)
    }
    const changeAge = ()=>{
        setAge(age+1)
    }

    return(
        <div>
            <h1>Use effect hook demo</h1>
            <h4>counter value is {counter}</h4>
            <button onClick={()=>increment()}>Increment</button>
            <button onClick={()=>changeAge()}>change age</button>
        </div>
    )
}

export default UseEffectHookEx