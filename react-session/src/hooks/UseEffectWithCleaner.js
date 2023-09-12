import { useEffect,useState } from "react"
function UseEffectCleaner(){
    const [age,setAge] = useState(10)

    function sayHi(){
        console.log("hiiii")
    }

    useEffect(()=>{
        console.log("hello inside use effect hook")
        let timer = setTimeout(()=>{
            console.log("hello i am timer")
            setAge(age+1)
        },2000)
        
        return ()=>{
            clearTimeout(timer)
        }
    })
    return(
        <div>
            <h2>Use effect cleaner {sayHi()}</h2>
        </div>
    )
}

export default UseEffectCleaner