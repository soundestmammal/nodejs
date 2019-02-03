import React, { Component } from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends Component {
  // Images will be an array of objects
  state = { images: [] };

  
  onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term }, 
    });
    this.setState({ images: response.data.results });
  };
  
  /*
  I have a container that wraps the App component. Inside I will have the searchbar and the image list.
  
  */
  render() {
    return (
      <div className='ui-container' style={{marginTop: '10px '}}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        Found: {this.state.images.length} images
        <ImageList images={this.state.images}/>
      </div>
    );   
  }
}

export default App;