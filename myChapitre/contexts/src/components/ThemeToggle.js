import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

function ThemeToggle() {

    const { changeTheme } = useContext(ThemeContext);

    return(
        <button onClick={changeTheme}>Click me to Change Theme</button>
    )
}
export default ThemeToggle;

// the following is the replacement of function component into class component

// class ThemeToggle extends Component {
//     static contextType = ThemeContext;    
//     render() { 
//         const { changeTheme } = this.context
//         return ( 
//             <button onClick={changeTheme}>Click me to Change Theme</button>
//          );
//     }
// } 
// export default ThemeToggle;