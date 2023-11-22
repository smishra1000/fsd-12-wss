import logo from './logo.svg';
import './App.css';

import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import Home from './pages/Home';
import Header from './pages/Header';
import Parent from './pages/Parent';
import Students from './pages/Students';
import CreateStudent from './pages/CreateStudent';
import UpdateStudent from './pages/UpdateStudent';
import Dropdown from './pages/Dropdown';
import Employee from './pages/Employee';
import Login from './pages/Login';
import { UserAuthContextProvider } from './context/UserAuthContext';
function App() {
  return (
    <div className='container-fluid'>
      <UserAuthContextProvider>
        <BrowserRouter>
       <Header/>
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/parentChild" element={<Parent/>}></Route>
          <Route path="/students" element={<Students/>}></Route>
          <Route path="/createStudent" element={<CreateStudent/>}></Route>
          <Route path="/updateStudent/:id" element={<UpdateStudent/>}></Route>
          <Route path="/dropdown" element={<Dropdown/>}></Route>
          <Route path="/emp-react-node-express" element={<Employee/>}></Route>
        </Routes>
        </BrowserRouter>
        </UserAuthContextProvider>
    </div>
  );
}

export default App;