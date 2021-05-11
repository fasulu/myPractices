import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { BookContextAPI } from '../contexts/BookContextAPI';

function BookList() {
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

// this following is the ES6 of the above functionnal component

// const BookList = () => {
//     const { isLightTheme, light, dark } = useContext(ThemeContext);
//     const { books } = useContext(BookContextAPI);
//     const theme = isLightTheme ? light : dark;
//     return ( 
//         <div className="book-list" style={{ color: theme.text, background: theme.bg}}>
//             <ul>
//                 {books.map(book => {
//                     return (
//                         <li key={book.id} style={{ background: theme.ui }} > { book.title }</li>
//                     )
//                 })}
//             </ul>
//         </div>
//      );
// } 
// export default BookList;

// the following changed from functionnal component to class component still gives the same result

// class BookList extends Component {

//     render() {

//         return (

//             <ThemeContext.Consumer>{(themeContext) => {

//                 const { isLightTheme, light, dark } = themeContext;
//                 const theme = isLightTheme ? light : dark;

//                 return (

//                     <div className="book-list" style={{ color: theme.text, background: theme.bg }}>
//                         <ul>

//                             <li style={{ background: theme.ui }}>The way of Kings</li>
//                             <li style={{ background: theme.ui }}>The name of the wind</li>
//                             <li style={{ background: theme.ui }}>The final empire</li>
//                         </ul>
//                     </div>
//                 )
//             }}
//             </ThemeContext.Consumer>
//         );
//     }
// }

// export default BookList;