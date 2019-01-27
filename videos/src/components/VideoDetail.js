import React from 'react';

const VideoDetail = ({ selected }) => {
    if (selected == null) {
        return <div>This is not available yet</div>
    }
    return (
        <div>
            <div>{selected.snippet.title}</div>
            <div>{selected.snippet.description}</div>
            <div>{selected.snippet.thumbnails.medium}</div>
        </div>
    );
}

export default VideoDetail;