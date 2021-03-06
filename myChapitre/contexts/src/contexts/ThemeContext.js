import React, { createContext, Component } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    state = { 
        isLightTheme: false,
        light: { text: '#555', ui: '#ddd', bg: '#eee'},
        dark: { text: '#ddd', ui: '#333', bg: '#555'},
     }
     toggleTheme = () => {
         this.setState({ isLightTheme: !this.state.isLightTheme});
     }
    render() { 
        return ( 
            <ThemeContext.Provider value={{...this.state, changeTheme: this.toggleTheme}}>

                {this.props.children}

            </ThemeContext.Provider>
         );
    }
} 
export default ThemeContextProvider