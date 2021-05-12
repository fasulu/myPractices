import React, { createContext, useState } from 'react';
import uuid from '../../node_modules/uuid/dist/v1';

export const BookContext = createContext();

function BookContextProvider(props) {

    const [books, setBooks] = useState([
        { title: "Name of the Wind", author: "Patrick Rothfuss", id: 1 },
        { title: "Alai Arasi", author: "Sandilyan", id: 2 },
        { title: "Parasakthi", author: "M. Karunanidhi", id: 3 },
        { title: "Germinal", author: "Emile Zola", id: 4 },
    ]);

    function addBook(titleBook, authorBook) {
        setBooks(
            [...books, { title: titleBook, author: authorBook, id: uuid() }]
        );
    };

    function removeBook(id) {
        setBooks(books.filter(book => book.id !== id)); // if passing id is found in the list of books then remove that book
    }

    return (

        <BookContext.Provider value={{books, addBook, removeBook}}>
            {props.children}
        </BookContext.Provider>
    )
}
export default BookContextProvider