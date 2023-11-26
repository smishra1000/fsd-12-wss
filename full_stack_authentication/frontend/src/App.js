import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import PrivateRoutes from './pages/PrivateRoutes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/signup" element={<Signup />}></Route>
          <Route exact element={<PrivateRoutes />} >
            <Route exact path="/dashboard" element={<Dashboard />}></Route>
            <Route exact path="/" element={<Dashboard />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
