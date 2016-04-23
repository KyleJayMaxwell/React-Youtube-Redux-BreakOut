// ES6 Syntax 
// getting react
// Same as var React = require('react');
import React from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
// importing components
import SearchBar from './components/SearchBar';

// deconstructed variable
// import React, { Component }from 'react';

import { apiKey } from '../config.js';


// let is a variable that can be changed.
// this is assigning Component to React.Component
// Example
// let Component = React.Component
// rewrite of class
// class App extends Component 

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      videos: [],
      selectedVideo: null
    }
    this.videoSearch('developers');
  }

  videoSearch(term) {
    YTSearch({ key: apiKey, term: term}, (videos) => {
      console.log(videos);
    })
  }

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    )
  }
}

// Instantiate 
ReactDom.render(<App />, document.querySelector('.container'));