import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

import youtube from '../apis/youtube'; 

class App extends React.Component {

    state = { videos: [], selectedVideo: null };

    onTermSubmit = async term => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        console.log(response);
        this.setState({ videos: response.data.items});
    }
    
    onVideoSelect = (video) => {
        console.log("This was passed correctly ", video);
    }

    render() {
        return (
        <div className="ui container">
            <SearchBar onFormSubmit={this.onTermSubmit}/>
            <VideoDetail selected={this.state.selectedVideo}/>
            <VideoList videos={this.state.videos} select={this.onVideoSelect}/>
        </div>
        );
    }
}
export default App;