import { useState } from "react";
import { useHistory } from 'react-router-dom';

// function Create() {
    const Create = () => {

        const [title, setTitle] = useState('');
        const [body, setBody] = useState('');
        const [author, setAuthor] = useState('fas');
        const [isPending, setIsPending] = useState(false);  // this is to check is the blog saving is pending or finished
        const history = useHistory();      // learn useHistory https://www.youtube.com/watch?v=TmVqwhBUiSM

        const handleSubmit = (e) => {
            e.preventDefault();
            const blog = { title, body, author };

            // console.log(blog);
            setIsPending(true);     // we set this as true because save is ongoing process 

            fetch('http://localhost:8000/blogs', {
                method: 'POST',
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(blog)
            }).then(() => {
                console.log('new blog added');
                setIsPending(false)     // we set this to false because saving the blog in json file is success
                // history.go(-1); // this will take to previous screen of the browser(that is one step back)
                history.push('/'); // this will take to home page 
            })
        }

    return (
        <div className="create">
            <h2>Add Blog</h2>

            <form onSubmit= {handleSubmit}>
                <label>Blog Title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog Body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label> Blog Author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="fas"> Fas</option>
                    <option value="ray"> Ray</option>
                </select>
                {/* <button>Add Blog</button> */}
                {/* <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p> */}
                { !isPending && <button>Add Blog</button>}    {/*   it the leftside of the condition becomes false the button will apprear for next action */}
                { isPending && <button disabled>Adding Blog...</button>}  {/*   if the leftside of the condition becomes true the button will be disabled to protect from further button press action */}
            </form>
        </div>
    );
}

export default Create;