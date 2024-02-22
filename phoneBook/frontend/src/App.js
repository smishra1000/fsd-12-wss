import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import CreateContact from './pages/Contacts/CreateContact';
import ContactList from './pages/Contacts/ContactsList';
import Contacts from './pages/Contacts/Contacts';
import PrivateRoutes from './components/PrivateRoutes';

function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        {/* <Route path="/" element={<Dashboard/>}> */}
        <Route exact element={<PrivateRoutes/>}>
          <Route path="/" element={<Contacts/>}>
          <Route path="/create-contact" element={<CreateContact/>}></Route>
          <Route path="/list" element={<ContactList/>}></Route>
          </Route>
        </Route>
        {/* </Route> */}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
