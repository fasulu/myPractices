// Learnt from the following website;
// https://levelup.gitconnected.com/building-a-simple-dynamic-search-bar-in-react-js-f1659d64dfae

import React from 'react';
import './App.css';
import Search from './components/Search';
import NamesContainer from './components/NamesContainer';

// const countries = './dataBase/Countries.js';

const cities = [
  "Paris", "Bern", "Chennai", "London", "Lourdes", "Chetenham", 
  "Birmingham", "Panama City", "Bamako", "Lima", "Mumbai", "Osaka"
];

class App extends React.Component {

  state = {
    names: cities,
    searchTerm: ""
  }

  // state = {
  //   names: [
  //     "Paris", "Bern", "Chennai", "London", "Lourdes", "Chetenham", "Birmingham", "Panama City", "Bamako", "Lima", "Mumbai", "Osaka"
  //   ],
  //   searchTerm: ""
  // }

  editSearchTerm = (e) => {
    this.setState({
      searchTerm: e.target.value
    });
  }

  dynamicSearch = () => {
    return this.state.names.filter(name => name.toLocaleLowerCase().includes(this.state.searchTerm.toLowerCase()))
  }

  render() {

    return (

      <div style={{ textAlign: 'left', padding: 30 }} >

        <h1>Running Word Search</h1>

        {/* <input type='text' value= {this.state.searchTerm} onChange = {this.editSearchTerm} placeholder= 'Search for a name'/> */}

        <Search editSearchTerm={this.editSearchTerm} searchTerm={this.state.searchTerm} />

        <h4>Names are as follows;</h4>

        <NamesContainer names={this.dynamicSearch()} />

      </div>
    );
  }
}

export default App;
