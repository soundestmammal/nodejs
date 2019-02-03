import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';


/*
We have a class based component. We have a helper function renderList.
The renderList returns a bunch of jsx that has the data from application state.
Then it is all rendered inside of the parent div with class name ui divided list that is
found in the render method.
*/
class SongList extends Component {
    renderList = () => {
        return this.props.songs.map(song => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button 
                        className="ui button primary"
                        onClick={() => this.props.selectSong(song)}
                        >
                            Select
                        </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            );
        });
    }
    render() {
        return <div className="ui divided list">{this.renderList()}</div>
    }
}

const mapStateToProps = (state) => {
    return { songs: state.songs };
};

export default connect(mapStateToProps, { selectSong })(SongList);