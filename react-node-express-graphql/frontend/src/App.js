import logo from './logo.svg';
import './App.css';
import BlogList from './BlogList';
import AddBlog from './AddBlog';

import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import BlogDetail from './BlogDetail';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
          <Route path="/addblog" element={<AddBlog/>}></Route>
          <Route path="/allblogs" element={<BlogList/>}></Route>
          <Route path="/blog/:id" element={<BlogDetail/>}></Route>
          <Route path="/" element={<BlogList/>}></Route>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
