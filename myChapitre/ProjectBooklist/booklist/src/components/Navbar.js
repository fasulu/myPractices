import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

function Navbar() {
    const {books} = useContext(BookContext);
    // console.log(books[0].title) // will access first item's title in the object

    return (

        <div className="navbar">
            <h1>Reading book list</h1>
            <p>Currently {books.length} book(s) is(are) available</p>
            {/* <p>{books[0].title}</p> will render first item's title in the object */}
        </div>
    );
}
export default Navbar;