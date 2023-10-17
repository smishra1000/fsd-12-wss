import { useState, useEffect } from "react"
import axios from "axios"

function BlogList() {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8000/blog/all").then(function (res) {
            console.log(res)
            setBlogs(res.data)
        }).catch(function (err) {
            console.log(err)
        })
    }, [])
    return (
        <div className="container mt-4">
            <h3>My Blogs</h3>
            <ul className="list-group">
                {blogs && blogs.map((blog) => {
                    return (
                        <li className="list-group-item">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="blog-image" >
                                        <img src={blog.image} style={{ height: '200px' }} />
                                    </div>

                                </div>
                                <div className="col-md-6">
                                    <h2>{blog.title}</h2>
                                    <p>{blog.content}</p>
                                    <p className="">{blog.author}</p>
                                    <a href="#" className="btn btn-primary">Read More</a>
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