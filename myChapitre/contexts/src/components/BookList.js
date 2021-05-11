import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { BookContextAPI } from '../contexts/BookContextAPI';

const BookList = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const { books } = useContext(BookContextAPI);
    const theme = isLightTheme ? light : dark;
    return ( 
        <div className="book-list" style={{ color: theme.text, background: theme.bg}}>
            <ul>
                {books.map(book => {
                    return (
                        <li key={book.id} style={{ background: theme.ui }} > { book.title }</li>
                    )
                })}
            </ul>
        </div>
     );
} 
export default BookList;