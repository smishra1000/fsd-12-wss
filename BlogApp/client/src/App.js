import logo from './logo.svg';
import './App.css';
import Blog from './pages/Blog';
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import BlogList from './pages/BlogList';
import EditBlog from './pages/EditBlog';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
      <Routes>
        <Route path="/createblog" element={<Blog/>}></Route>
        <Route path="/editblog/:id" element={<EditBlog/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/bloglist" element={<BlogList/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/" element={<Login/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
