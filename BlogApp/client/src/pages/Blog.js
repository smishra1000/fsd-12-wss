import { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"


function Blog() {
    const [blogData,setBlogData] = useState({title:"",content:"",author:"",image:"https://knorish-asset-cdn.azureedge.net/knorish-static-assets/images/v1/default_announcement_thumb.jpg",category:""})
    const navigate = useNavigate();
    const onFieldChange = (e)=>{
            setBlogData((prev)=>{
                return {
                    ...prev,
                    [e.target.name]:e.target.value
                }
            })
    }

    const saveBlog = (e)=>{
        axios.post("http://localhost:8000/blog/create",blogData).then(function(data){
            console.log("blog created successfullly")
            navigate("/bloglist")
            
        }).catch(function(err){
            console.log(err)
        })
    }
    const goToBlogs = ()=>{
        navigate("/bloglist")
    }
    return (
        <div className="container">
            <div className="row" style={{border:'2px solid #ddd'}}>
                <div className="col-md-6">
                    <div className="leftside" style={{height:'400px',background:'teal'}}>
                        <h1 className="text-center">Blog Create Form</h1>
                       
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="row">
                        <div className="mb-3">
                            <label className="form-label">Ttitle</label>
                            <input type="text" className="form-control" placeholder="Enter Title" name="title" value={blogData.title} onChange={(e)=>onFieldChange(e)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div class="mb-3">
                            <label  className="form-label">Content</label>
                            <textarea className="form-control"  rows="7" value={blogData.content} name="content" onChange={(e)=>onFieldChange(e)}></textarea>
                        </div>
                    </div>
                    <div className="row">
                        <div class="mb-3">
                            <label  className="form-label">Author</label>
                            <input type="text" className="form-control" placeholder="Enter Author" name="author" value={blogData.author} onChange={(e)=>onFieldChange(e)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div class="mb-3">
                            <label  className="form-label">Category</label>
                            <input type="text" className="form-control" placeholder="Enter Category" name="category" value={blogData.category} onChange={(e)=>onFieldChange(e)}/>
                        </div>
                    </div>
                    <button className="btn btn-primary" onClick={(e)=>saveBlog(e)}>Create</button>
                </div>
            </div>
            <button className="btn btn-primary" onClick={(e)=>goToBlogs(e)}>Back</button>
        </div>
    )
}

export default Blog