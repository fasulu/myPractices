import React from 'react'
import { useHistory, useParams } from 'react-router'
import useFetch from './useFetch';

function BlogDetails() {
    const { id } = useParams(); // desturcture the id parameter which is coming from user through App.js "Route path="/blogs/:id""
    const { data: blog, error, isPending } = useFetch(`http://localhost:8000/blogs/${id}`);

    const history = useHistory();

    const handleDelete = () => {
        // console.log("ondelete")
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'        // method 'DELETE' is used to delete current blog id data from json file
        }).then(() => {             // after success do the following line
            history.push('/');  // use useHistory to go back to home page
        })
    }
    return (
        <div className="blog-details">
            {/* <h2>Blog details -  {id} </h2> */}
            { isPending && <div>Loading...</div>}  {/*  if the leftside(isPending) becomes true the "Loading..." div will apprear on screen */}
            { error && <div> {error} </div>}          {/*  if the leftside(error) becomes true the "error" message div will apprear on screen */}
            {/* if the leftside(blog) of the following condition becomes true the "blog" message div will apprear on screen */}
            { blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Writtern by {blog.author}</p>
                    <div> {blog.body}</div>
                    <button className="deleteButton" onClick={handleDelete}>Delete</button>
                </article>
            )}
        </div>
    )
}

export default BlogDetails
