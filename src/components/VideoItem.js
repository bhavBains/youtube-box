import './VideoItem.css';
import React, { Component } from 'react';

class VideoItem extends Component {
	render() {
		const { video, onSelectedVideo } = this.props;
		return (
			<div className="video-item item" onClick={() => onSelectedVideo(video)}>
				<img className="ui image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
				<div className="content">
					<div className="header">{video.snippet.title}</div>
				</div>
			</div>
		);
	}
}

export default VideoItem;
