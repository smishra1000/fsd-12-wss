import { useState } from "react"
import BlogList from "./BlogList";
import { useMutation } from "@apollo/client"
import { gql } from "graphql-tag"
import { useNavigate } from "react-router-dom";
const ADD_BLOGS = gql`
mutation AddBlog($input:BlogInput!){
    addBlog(input:$input){
        title
        description
        author
        category
    }
}
`
function AddBlog(){
const [formData,setFormData] = useState({title:"",description:"",author:"",category:""})
const [addBlog, {loading,error}] = useMutation(ADD_BLOGS)
const navigate = useNavigate();

const handleChange = (e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
}

const saveBlog = async(e)=>{
    const {data} = await addBlog({variables:{input:formData}})
    console.log(data)
    resetFormData()
}

const resetFormData = ()=>{
    setFormData({title:"",description:"",author:"",category:""})
    navigate("/allblogs")
}

    return(
        <div>
            <h1>Blog create form</h1>
            <label>Title</label>
            <input type="text" name="title" value={formData.title} placeholder="enter title" onChange={(e)=>handleChange(e)}/>
            <label>Description</label>
            <input type="text" name="description" value={formData.description} placeholder="enter title" onChange={(e)=>handleChange(e)}/>
            <label>Author</label>
            <input type="text" name="author" value={formData.author} placeholder="enter title" onChange={(e)=>handleChange(e)}/>
            <label>Catgory</label>
            <input type="text" name="category" value={formData.catgory} placeholder="enter title" onChange={(e)=>handleChange(e)}/>
            <button onClick={(e)=>saveBlog(e)}>Save</button>
            
        </div>
    )
}

export default AddBlog