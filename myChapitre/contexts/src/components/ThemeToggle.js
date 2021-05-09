import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class ThemeToggle extends Component {

    static contextType = ThemeContext;
    
    render() { 

        const { changeTheme } = this.context
        return ( 
            <button onClick={changeTheme}>Click me to Change Theme</button>
         );
    }
}
 
export default ThemeToggle;