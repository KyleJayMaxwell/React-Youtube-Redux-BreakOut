import _ from 'lodash';
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar';
import { apiKey } from '../config.js';

class App extends Component {

  constructor () {
    super();
    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('programming');
  }

  videoSearch(term) {
    YTSearch({ key: apiKey, term:term}, (videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      });
    });
  }
  //must have render in every react component
  //it can only return one elelement, everything must be wrapped in a parent div
  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
      </div>
    )
  }
}
ReactDom.render(<App />, document.querySelector('.container'));