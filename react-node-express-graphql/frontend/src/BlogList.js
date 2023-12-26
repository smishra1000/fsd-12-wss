import React, {useState,useEffect} from "react"

import { useMutation, useQuery } from "@apollo/client"
import { gql } from "graphql-tag"
import { useNavigate } from "react-router-dom"


const GET_BLOGS = gql`
query {
    getAllBlogs {
        id
        title
        description,
        author,
        category
    }
}
`

const DELETE_BLOG = gql`
mutation DeleteBlog($id:ID!){
    deleteBlog(id:$id)
}
`

const BlogList = () => {
    const navigate = useNavigate();
// const [blogs,setBlogs] = useState([])

// useEffect(()=>{
//     fetch("http://localhost:3001/allblogsbyrestapi").then(function(res){
//         return res.json()
//     }).then(function(result){
//         console.log(result)
//         setBlogs(result)
//     })
// },[])

    const { loading, error, data } = useQuery(GET_BLOGS)
    const [deleteBlog] = useMutation(DELETE_BLOG)
    if (loading) return <h1>Data Loading ...</h1>
    if (error) return <h1>Some thing wrong</h1>
    const goToBlogDetail = (id)=>{
        navigate("/blog/"+id)
    }
    const handleDelte = async (e,id)=>{
        e.stopPropagation();
        const {data} = await deleteBlog({variables: {id:Number(id)}})

    }
    return (
        <div style={{display:'flex',flexDirection:'row',gap:'10px'}}>
            {data.getAllBlogs.length===0 &&<h1>No Blogs </h1>}
                {data.getAllBlogs.map((item) => {
                    return (
                        <div style={{width:'200px',height:'200px',border:'2px solid #ddd',boxShadow:'2px 2px #ddd'}} onClick={()=>goToBlogDetail(item.id)}>
                            <h4>Title{item.title}</h4>
                            <h4>Description:{item.description}</h4>
                            <h4>author:{item.author}</h4>
                            <button onClick={(e)=>handleDelte(e,item.id)}>delete blog</button>
                        </div>

                    )
                })}
        </div>
    )
}

export default BlogList