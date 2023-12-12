import React, {useState,useEffect} from "react"

import { useQuery } from "@apollo/client"
import { gql } from "graphql-tag"


const GET_BLOGS = gql`
query {
    getAllBlogs {
        title
        description,
        author,
        category
    }
}
`

const BlogList = () => {
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
    if (loading) return <h1>Data Loading ...</h1>
    if (error) return <h1>Some thing wrong</h1>
    return (
        <div>
            <h1>Blog List</h1>
                {data.getAllBlogs.map((item) => {
                    return (
                        <div style={{width:'200px',height:'200px',border:'2px solid #ddd',boxShadow:'2px 2px #ddd'}}>
                            <h4>Title{item.title}</h4>
                            <h4>Description:{item.description}</h4>
                            <h4>author:{item.author}</h4>
                        </div>

                    )
                })}
        </div>
    )
}

export default BlogList