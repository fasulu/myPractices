import React from 'react';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import '../src/index.css'
import ThemeContextProvider from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import BookContextProvider from './contexts/BookContextAPI'

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>

        <Navbar />
        <BookContextProvider>
          <BookList/>
        </BookContextProvider>
        <ThemeToggle />

      </ThemeContextProvider>
    </div>
  );
}
export default App;