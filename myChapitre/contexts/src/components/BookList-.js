import React, { ThemeContext } from 'react';
import { useContext } from 'react';

function BookList() {

    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    return (

        <div className="book-list" style={{ color: theme.text, background: theme.bg }}>
            <ul>

                <li style={{ background: theme.ui }}>The way of Kings</li>
                <li style={{ background: theme.ui }}>The name of the wind</li>
                <li style={{ background: theme.ui }}>The final empire</li>
            </ul>
        </div>
    )
}
export default BookList;

// the following is the replacement of function component into class component

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