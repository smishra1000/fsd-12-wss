import { useParams } from "react-router-dom"
import { useQuery } from "@apollo/client"
import { gql } from "graphql-tag"

const GET_BLOG_BY_ID = gql`
query GetBlogById($id:ID!){
    getBlogById(id:$id){
        id
        title
        description
        category
        author
        __typename
    }
}
`
function BlogDetail(){
    const {id} = useParams();

const {loading,error,data} = useQuery(GET_BLOG_BY_ID, {variables:{id:Number(id)}})
const blog = data.getBlogById;
    return(
        <div>
            <h1>Blog detail</h1>
                <div>
                    <h4>Blog title:{blog.title}</h4>
                    <h4>Blog author:{blog.author}</h4>
                    <h4>Blog description:{blog.description}</h4>
                     <h4>Blog category:{blog.category}</h4>
                </div>
        </div>
    )
}

export default BlogDetail