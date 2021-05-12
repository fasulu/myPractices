import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import BookDetails from './BookDetails'

function BookList() {

    const {books} = useContext(BookContext);

    return books.length ? (
        
        <div className="book-list">
            <ul className="title">
                {books.map(elem => {
                    console.log(elem)
                    return (<BookDetails eachBook={elem} key={elem.id}/>);
                })}
            </ul>
        </div>
        
      ) : (
          <div className="empty">No books to read</div>
      )
}
 
export default BookList