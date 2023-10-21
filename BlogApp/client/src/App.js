import logo from './logo.svg';
import './App.css';
import Blog from './pages/Blog';
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import BlogList from './pages/BlogList';
import EditBlog from './pages/EditBlog';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
      <Routes>
        <Route path="/createblog" element={<Blog/>}></Route>
        <Route path="/editblog/:id" element={<EditBlog/>}></Route>
        <Route path="/" element={<BlogList/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
