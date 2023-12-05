import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

function BlogList() {
    const [blogs, setBlogs] = useState([])
    const [searchKey, setSearchKey] = useState("")
    const [categories, setCategories] = useState(['All', 'Tech', 'Science', 'Bio'])
    const [selectedCategoryIndex,setSelectedCategoryIndex] = useState(0)
    const navigate = useNavigate();
    useEffect(() => {
        getAllBlogs();
    }, [])

    const goToCreateBlog = () => {
        navigate("/createblog")
    }
    const goToEditBlog = (e, blog) => {
        navigate("/editblog/" + blog._id)
    }
    const getAllBlogs = () => {
        axios.get("http://localhost:8000/blog/all").then(function (res) {
            console.log(res)
            setBlogs(res.data)
        }).catch(function (err) {
            console.log(err)
        })
    }
    const deleteBlog = (e, blog) => {
        axios.delete(`http://localhost:8000/blog/deleteBlog/${blog._id}`).then(function (res) {
            console.log(res)
            getAllBlogs()
        }).catch(function (err) {
            console.log(err)
        })
    }

    const changeSearchkey = (e) => {
        setSearchKey(e.target.value)
        // if(e.target.value===""){
        //     getAllBlogs();

        // }else{
        //     setSearchKey(e.target.value)
        // }

    }

    const searchBlogs = (e) => {
        e.preventDefault();
        if (searchKey !== "") {
            axios.get(`http://localhost:8000/blog/searchByTitle/${searchKey}`).then(function (res) {
                setBlogs(res.data)
            }).catch(function (err) {
                console.log(err)
            })
        } else {
            getAllBlogs();
        }
    }

    const logout = () => {
        navigate("/login")
    }
    const getByCategory = (e,category,index)=>{
        setSelectedCategoryIndex(index)
        console.log(category)
        axios.get(`http://localhost:8000/blog/searchByCategory/${category}`).then(function (res) {
            setBlogs(res.data)
        }).catch(function (err) {
            console.log(err)
        })
    }
    return (
        <div className="container mt-4">
            <div className="row mt-4">
                <div className="col-md-9">
                    <h3>My Blogs</h3>
                </div>
                <div className="col-md-3" style={{ textAlign: 'right' }}>
                    <button className="btn btn-success btn-sm" onClick={() => goToCreateBlog()}>
                        +Create
                    </button>
                    <button className="btn btn-danger btn-sm" onClick={() => logout()}>
                        Logout
                    </button>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <form class="form-inline my-2 my-lg-0" style={{ display: 'flex' }}>
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => changeSearchkey(e)} value={searchKey} />
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={(e) => searchBlogs(e)}>Search</button>
                    </form>
                </div>
                <div className="col-md-6" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                    {categories.map((category,index) => {
                        return (
                            <span className={selectedCategoryIndex===index ? 'badge rounded-pill bg-success with-border' : 'badge rounded-pill bg-secondary'} style={{cursor:'pointer'}} onClick={(e)=>getByCategory(e,category,index)}>{category}</span>
                        )
                    })}
                </div>
            </div>

            <ul className="list-group">
                {blogs && blogs.map((blog) => {
                    return (
                        <li className="list-group-item">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="blog-image" >
                                        <img src={`http://localhost:8000/uploads/${blog.image}`} style={{ height: '200px' }} />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <h2>{blog.title}</h2>
                                    <p>{blog.content}</p>
                                    <p className="">Author : <span class="badge rounded-pill bg-success">{blog.author}</span></p>
                                    <p className="">Category : <span class="badge rounded-pill bg-danger">{blog.category}</span></p>
                                    <a href="#" className="btn btn-primary">Read More</a>
                                </div>
                                <div className="col-md-2">
                                    <button className="btn btn-sm btn-danger mr-2" onClick={(e) => deleteBlog(e, blog)}>Delete</button>
                                    <button className="btn btn-sm btn-warning mr-2" onClick={(e) => goToEditBlog(e, blog)}>Edit</button>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default BlogList