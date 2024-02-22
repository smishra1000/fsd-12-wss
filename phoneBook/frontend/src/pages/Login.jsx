import { useState,useEffect } from "react"
import {useNavigate} from "react-router-dom"

function Login() {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate()

    const onPasswordChange = (e)=>{
        e.preventDefault();
        setPassword(e.target.value)
    }

    const onEmailChange = (e)=>{
        e.preventDefault();
        setEmail(e.target.value)
    }

    const login = (e)=>{
        e.preventDefault();
        fetch("http://localhost:7000/auth/login",{method:"POST",headers:{'Content-Type':"application/json"},body:JSON.stringify({email,password})}).then((res)=>{
            return res.json()
        }).then((result)=>{
            if(result.success){
                localStorage.setItem("loggedInUser",JSON.stringify(result.user))
                navigate("/")
            }else{
                alert(result.message)
            }
        })
    }
    return (
        <div className="container">
            <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                <div className="col-md-5">
                    <div className="card">
                        <div class="card-body">
                            <h5 class="text-center">Login</h5>
                            <form onSubmit={login}>
                                <div class="mb-3">
                                    <label className="form-label">Email</label>
                                    <input type="text" class="form-control" value={email} onChange={onEmailChange}/>
                                </div>
                                <div class="mb-3">
                                    <label className="form-label">Password</label>
                                    <input type="text" class="form-control" value={password} onChange={onPasswordChange}/>
                                </div>
                                <input type="submit"  className="btn btn-primary w-100" value="Login"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login