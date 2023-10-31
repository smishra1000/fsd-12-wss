import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"


function EditBlog() {
    const [blogData, setBlogData] = useState({ title: "", content: "", author: "", image: "",category:"" })
    const params = useParams()
    const navigate = useNavigate()
    

    useEffect(() => {
        axios.get(`http://localhost:8000/blog/blogById/${params.id}`).then(function (res) {
            console.log(res)
            setBlogData((prev) => {
                return {
                    ...prev,
                    title: res.data.title,
                    content: res.data.content,
                    author: res.data.author,
                    image: res.data.image,
                    category: res.data.category

                }
            })
        }).catch(function (err) {
            console.log(err)
        })
    }, [])
    const onFieldChange = (e) => {
        setBlogData((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }
    const editBlog = (e)=>{
        axios.put(`http://localhost:8000/blog/edit/${params.id}`,blogData).then(function(data){
            console.log("blog updated successfullly")
            navigate("/bloglist")
            
        }).catch(function(err){
            console.log(err)
        })
    }
    return (
        <div className="container">
            <div className="row" style={{ border: '2px solid #ddd' }}>
                <div className="col-md-6">
                    <div className="leftside" style={{ height: '400px', background: 'teal' }}>
                        <h1 className="text-center">Blog Edit Form</h1>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="row">
                        <div className="mb-3">
                            <label className="form-label">Title</label>
                            <input type="text" className="form-control" placeholder="Enter Title" name="title" value={blogData.title} onChange={(e) => onFieldChange(e)} />
                        </div>
                    </div>
                    <div className="row">
                        <div class="mb-3">
                            <label className="form-label">Content</label>
                            <textarea className="form-control" rows="7" value={blogData.content} onChange={(e) => onFieldChange(e)} name="content"></textarea>
                        </div>
                    </div>
                    <div className="row">
                        <div class="mb-3">
                            <label className="form-label">Author</label>
                            <input type="text" className="form-control" placeholder="Enter Author" name="author" value={blogData.author} onChange={(e) => onFieldChange(e)} />
                        </div>
                    </div>
                    <div className="row">
                        <div class="mb-3">
                            <label  className="form-label">Category</label>
                            <input type="text" className="form-control" placeholder="Enter Category" name="category" value={blogData.category} onChange={(e)=>onFieldChange(e)}/>
                        </div>
                    </div>
                    <button className="btn btn-primary" onClick={(e) => editBlog(e)}>Edit</button>
                </div>

            </div>
        </div>
    )
}

export default EditBlog