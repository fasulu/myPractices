import { Link } from 'react-router-dom';
// https://www.youtube.com/watch?v=t7VmF4WsLCo 

// function BlogList({ blogs, title}) {
const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map(elem => (

        <div className="blog-preview" key={elem.id} >
          <Link to={`/blogs/${elem.id}`}>
            <h2>{elem.title}</h2>
            <p>Written by {elem.author}</p>
          </Link>
        </div>
        
      ))}
    </div>
  );
}
export default BlogList;