import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

function BookDetails({eachBook}) {      // destructure the eachBook(props) with {}, if not you can't access individual elements
    console.log(eachBook)

    const { removeBook } = useContext(BookContext);

    return (
        <li className="title" onClick = {() => removeBook(eachBook.id)}> 
            <div className="title" >{ eachBook.title }, { eachBook.author }</div>
        </li>
    );
}
export default BookDetails