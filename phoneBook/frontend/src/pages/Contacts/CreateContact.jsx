import { useEffect, useState } from "react"
import {useNavigate} from "react-router-dom"

function CreateContact() {

    const [formData,setFormData] = useState({email:"",fullName:"",phone:"",address:""})
    const [user,setUser] = useState({})
    const navigate = useNavigate();

    const onFormFieldChange = (e)=>{
        e.preventDefault();
        setFormData((prevState)=>{
            return {
                ...prevState,
                [e.target.name]:e.target.value
            }
        })
    }
    const getUserInfoFromLocalStorage = async ()=>{
        let user = await localStorage.getItem("loggedInUser") && JSON.parse(localStorage.getItem("loggedInUser"))
        setUser(user)
    }
    useEffect(()=>{
        getUserInfoFromLocalStorage()
        
    },[])
    const addContact = (e)=>{
        e.preventDefault();
        fetch("http://localhost:7000/contact/create",{method:"POST",headers:{'Content-Type':"application/json"},body:JSON.stringify({...formData,userId:user._id})}).then((res)=>{
            return res.json()
        }).then((result)=>{
            if(result.success){
                navigate("/list")
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
                            <h5 class="text-center">Create Contact</h5>
                            <form onSubmit={addContact}>
                                <div class="mb-3">
                                    <label className="form-label">Full Name</label>
                                    <input type="text" class="form-control" value={formData.fullName} onChange={onFormFieldChange} name="fullName"/>
                                </div>
                                <div class="mb-3">
                                    <label className="form-label">Email</label>
                                    <input type="text" class="form-control" value={formData.email} onChange={onFormFieldChange} name="email"/>
                                </div>
                                <div class="mb-3">
                                    <label className="form-label">Phone</label>
                                    <input type="text" class="form-control" value={formData.phone} onChange={onFormFieldChange} name="phone"/>
                                </div>
                                <div class="mb-3">
                                    <label className="form-label">Address</label>
                                    <input type="text" class="form-control" value={formData.address} onChange={onFormFieldChange} name="address"/>
                                </div>
    
                                <input type="submit" className="btn btn-primary w-100" value="Add Contact" style={{background:'#ffc107'}}/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateContact