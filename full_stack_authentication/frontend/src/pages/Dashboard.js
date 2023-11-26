import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Header';
function Dashboard(){
    const getUsers = ()=>{
        toast("users got successfully",{type:'success',position:'top-left'});
    }
    return(
        <div>
            <Header/>
        </div>
    )
}

export default Dashboard