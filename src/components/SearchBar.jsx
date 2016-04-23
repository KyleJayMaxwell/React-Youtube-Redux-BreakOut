import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    // first line has to be super
    super(props);
    this.state = { term: '' }
  }

  onInputChange(term) {
    // if you have a key value pair of same name you don't need both  
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }

  render () {
    return (
      <div className="search-bar">
        <h1>YouTube Redux</h1>
        <input value={this.state.term}onChange = {event => this.onInputChange(event.target.value)} />
      </div>
    )
  }
}


export default SearchBar;