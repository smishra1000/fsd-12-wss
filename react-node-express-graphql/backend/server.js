const express = require("express");
const {graphqlHTTP } = require("express-graphql")
const mongoose = require("mongoose");
const {buildSchema} = require("graphql")
const cors = require("cors");
const app = express();
app.use(cors())

// graphql schema setup 

const schema = buildSchema(`
type Blog {
    id:ID
    title: String
    description: String
    author: String
    category: String
}
input BlogInput {
    title: String
    description: String
    author: String
    category: String
}

type Query {
    getAllBlogs:[Blog]
    getBlogById(id:ID): Blog
}

type Mutation {
    addBlog(input: BlogInput) : Blog
    deleteBlog(id:ID): String
}
`
)
// initial data fo blogs
const blogs = [
    // {
    //     id:1,
    //     title:"MERN SATCK ",
    //     description:"MERN stak is full stack tech satck mongo node react ",
    //     author:"sameer",
    //     category:"software eng"
    // },
    // {
    //     id:2,
    //     title:"MEAN SATCK ",
    //     description:"ABOUT MEAN STACK ",
    //     author:"ROHIT",
    //     category:"software eng"
    // }
]
const root = {
    getBlogById:({id})=>{
        return blogs.find((item)=>Number(item.id)===Number(id))
    },
    getAllBlogs:()=>blogs,
    //https://stackoverflow.com/questions/58780466/how-to-solve-mutation-returning-data-null
    addBlog:({input})=>{
        console.log(input)
       const newBlog = {id:String(blogs.length+1),...input};
       blogs.push(newBlog)
       return newBlog
    },
    deleteBlog : ({id})=>{
        const foundBlogIndex = blogs.findIndex((item)=>{
            return Number(item.id)===Number(id)
        })
        blogs.splice(foundBlogIndex,1)
        return "blog deleted successfully"
    },
}

app.use("/graphql",graphqlHTTP({schema,rootValue:root,graphiql: true,}))

app.get("/allblogsbyrestapi",function(req,res){
    res.send(blogs)
})

/// server listen code
app.listen(3001,()=>{
    console.log("running server with graphql")
})