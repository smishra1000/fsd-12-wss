import logo from './logo.svg';
import './App.css';

import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import Home from './pages/Home';
import Header from './pages/Header';
import Parent from './pages/Parent';
import Students from './pages/Students';
import CreateStudent from './pages/CreateStudent';
function App() {
  return (
    <div className='container-fluid'>
        <BrowserRouter>
       <Header/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/parentChild" element={<Parent/>}></Route>
          <Route path="/students" element={<Students/>}></Route>
          <Route path="/createStudent" element={<CreateStudent/>}></Route>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
