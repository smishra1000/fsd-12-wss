import {useContext, useState,createContext} from "react"

const UserContext = createContext()

function Parent(){
    return(
        <div style={{border:'1px solid black',padding:'5px'}}>
            <h4>Parent</h4>
            <Child1/>
        </div>
    )
}

function Child1(){
    return(
        <div style={{border:'1px solid green',padding:'5px'}}>
            <h4>child1</h4>
            <Child2/>
        </div>
    )
}

function Child2(){
    const name = useContext(UserContext)
    return(
        <div style={{border:'1px solid red',padding:'5px'}}>
            <h4>child2 </h4>
            <p>my name is {name}</p>
            <Child3 />
        </div>
    )
}

function Child3(){
    const name = useContext(UserContext)
    return(
        <div style={{border:'1px solid blue',padding:'5px'}}>
            <h4>child3</h4>
            <h5>my name is {name}</h5>
        </div>
    )
}

function Child4(){
    const name = useContext(UserContext)
    return(
        <div style={{border:'1px solid blue',padding:'5px'}}>
            <h4>child4</h4>
            <h5>my name is {name}</h5>
        </div>
    )
}

function UseContextHookEx(){
    const [name,setName] = useState("test3")
   
    return(
        <div>
            <h1>Use Context Hook demo</h1>
            <UserContext.Provider value={name}>
                <Parent/>
                <Child4/>
            </UserContext.Provider>
        </div>
    )
}

export default UseContextHookEx