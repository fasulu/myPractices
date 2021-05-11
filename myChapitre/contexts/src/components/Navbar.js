import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

function Navbar() {

    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    return (
        <nav style={{ background: theme.ui, color: theme.text }}>
            <ul>
                <li> Home </li>
                <li> About </li>
                <li> Contact</li>
            </ul>
        </nav>
    )
}
export default Navbar;

// the following is the replacement of function component into class component

// class Navbar extends Component {
//     render() {
//         return (
//             <ThemeContext.Consumer>{(themeContext) => {
//                 const { isLightTheme, light, dark } = themeContext;
//                 const theme = isLightTheme ? light : dark;
//                 return (
//                     <nav style={{ background: theme.ui, color: theme.text }}>
//                         <ul>
//                             <li> Home </li>
//                             <li> About </li>
//                             <li> Contact</li>
//                         </ul>
//                     </nav>
//                 )
//             }}</ThemeContext.Consumer>
//         );
//     }
// }
// export default Navbar;