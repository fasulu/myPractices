import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext'

function BookForm() {
    const { addBook } = useContext(BookContext)
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        addBook(title, author);
        setTitle('');
        setAuthor('');
    }
    
    return (
        <form onSubmit={handleSubmit}>

<label>Book Title
            <input type="text" placeholder="Book Title" required value={title}
            onChange={(e) => setTitle(e.target.value)} required /></label>
            <label>Author Name
            <input type="text" placeholder="Author Name" required value={author}
            onChange={(e) => setAuthor(e.target.value)} required /></label>
            <input type="submit" value="Add Book"/>
            {/* <button type="submit" > Add Book </button> */}

        </form>
    )
}
export default BookForm