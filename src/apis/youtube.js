import axios from 'axios';

const KEY = 'AIzaSyABX3Of2K3rJFfAtzIBpNjZNbMKdTbfH9M';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		type: 'video',
		key: KEY
	}
});
