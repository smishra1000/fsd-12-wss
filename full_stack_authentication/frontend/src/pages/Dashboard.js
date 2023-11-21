import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Dashboard(){
    const getUsers = ()=>{
        toast("users got successfully",{type:'success',position:'top-left'});
    }
    return(
        <div>
            <h1>Dashboard</h1>
            <button onClick={()=>getUsers()}>
                Get users
            </button>
            <ToastContainer/>
        </div>
    )
}

export default Dashboard