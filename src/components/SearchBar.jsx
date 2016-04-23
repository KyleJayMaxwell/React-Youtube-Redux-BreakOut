import React, { Component } from 'react';

class SearchBar extends Component {
  constructor() {
    // first line has to be super
    super();
    this.setState = {term: ''}
  }

  onInputChange(term) {
    // if you have a key value pair of same name you don't need both  
    this.setState({ term });
  }

  render () {
    return (
      <div className="search-bar">
        <h1>YouTube Redux</h1>
        <input
          value={ // brackets make it so you can write JS
            this.state.term
          }
          onChange = { // ES6 Arrow Function
            event => this.onInputChange(event.target.value)
          }
        />
      </div>
    )
  }
}


export default SearchBar;