import { Outlet } from "react-router-dom"
import HeaderBar from "../HeaderBar"
import { useEffect,useState } from "react"
function ContactList() {

    const [contacts,setContacts] = useState([])
    const [user,setUser] = useState({})
    const getUserInfoFromLocalStorage = async ()=>{
        let user = await localStorage.getItem("loggedInUser") && JSON.parse(localStorage.getItem("loggedInUser"))
        setUser(user)
    }
    useEffect(()=>{
        getUserInfoFromLocalStorage()
        
    },[])

    const getAllContacts = ()=>{
        fetch(`http://localhost:7000/contact/list/${user._id}`).then((res)=>{
            return res.json()
        }).then((result)=>{
            if(result.success){
                setContacts(result.contacts)
            }else{
                alert(result.message)
            }
        })
    }
    useEffect(()=>{
       getAllContacts()
    },[user])
    const deleteContact = (e,id)=>{
        e.preventDefault();
        fetch(`http://localhost:7000/contact/delete/${id}`,{method:"DELETE"}).then((res)=>{
            return res.json()
        }).then((result)=>{
            if(result.success){
                getAllContacts();
            }else{
                alert(result.message)
            }
        })
    }
    return (
        <div className="container">
            <div className="row mt-4">
                {contacts.map((item)=>{
                    return(
                        <div className="col-md-3">
                        <div className="card contact-card">
                            <img className="contact-img" src="https://www.pngitem.com/pimgs/m/581-5813504_avatar-dummy-png-transparent-png.png"/>
                            <div className="card-body">
                                <h4>Name: {item.fullName}</h4>
                                <p>Phone: {item.phone}</p>
                                <p>Email: {item.email}</p>
                                <p>Address: {item.address}</p>
                                <div class="action text-center">
                                    <button className="btn btn-danger btn-sm px-2" onClick={(e)=>deleteContact(e,item._id)}>Delete</button>
                                    <button className="btn btn-primary btn-sm">Edit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                })}
              
            </div>
        </div>
    )
}

export default ContactList