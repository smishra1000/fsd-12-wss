import { Link } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    const onEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const onPasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const login = (e)=>{
        e.preventDefault();
        const data = {
            email,password
        }
        axios.post("http://localhost:8000/auth/login",data).then(function(data){
            console.log(data)
            if(data.data.success===true){
                navigate("/bloglist")
            }
        }).catch(function(err){
            console.log(err)
        })


    }
    return (
        <div className="container">
             <h1>Login page</h1>
            <form onSubmit={(e)=>login(e)}>
                <div class="mb-3">
                    <label  class="form-label">Email address</label>
                    <input type="email" class="form-control" value={email} onChange={(e) => onEmailChange(e)}/>
                </div>
                <div class="mb-3">
                    <label class="form-label">Password</label>
                    <input type="password" class="form-control" value={password} onChange={(e) => onPasswordChange(e)}/>
                </div>
                <button type="submit" class="btn btn-primary">Login</button>
                <div>
                    <p>Dont have account please signup <Link to="/signup">here</Link></p>
                </div>
            </form>
        </div>
    )
}

export default Login