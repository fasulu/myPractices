import React, { createContext, useState } from 'react';

export const BookContextAPI = createContext();

function BookContextProvider(props) {
    const [books, setBooks] = useState([
        {title: 'Name of the Wind', id: 1},
        {title: 'The way of Kings', id: 2},
        {title: 'The final Empire', id: 3}
    ]);
    return ( 
        <BookContextAPI.Provider value={{books}}>
            {props.children}
        </BookContextAPI.Provider>
     );
}
export default BookContextProvider;

// the following is the replacement of function component into class component

// const BookContextProvider = (props) => {
//     const [books, setBooks] = useState([
//         {title: 'Name of the Wind', id: 1},
//         {title: 'The way of Kings', id: 2},
//         {title: 'The final Empire', id: 3}
//     ]);
//     return ( 
//         <BookContextAPI.Provider value={{books}}>
//             {props.children}
//         </BookContextAPI.Provider>
//      );
// } 
// export default BookContextProvider;