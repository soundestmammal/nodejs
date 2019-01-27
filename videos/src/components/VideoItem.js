import './VideoItem.css';
import React from 'react';

const VideoItem = ({ video, select }) => {
    return (
        <div className="item video-item" onClick={() => select(video)}>
            <img src={video.snippet.thumbnails.medium.url} className="ui image" />
            <div className="content">
                <div className="header">
                {video.snippet.title}
                </div>
            </div>
        </div>
    );       
}

export default VideoItem;