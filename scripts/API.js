/* eslint-disable no-unused-vars */
/*global $, cuid*/
'use strict';

const API = (function() {
	let API_KEY = 'AIzaSyAwrbvcBw6a8z5lD7mdMzUy7UWP76DLd14';
	let BASE_URL = 'https://www.googleapis.com/youtube/v3/search';
	
	let fetchVideos = function(searchTerm, callback) {
		const query = {
			q : searchTerm,
			key : API_KEY,
			part : 'snippet'
		};
		$.getJSON(BASE_URL, query, callback);
	};
  
	let decorateResponse = function(response) {
		return response.items.map(item => {
			return {
				id: item.id.videoId,
				title: item.snippet.title,
				thumbnail: item.snippet.thumbnails.default.url,
			};
		});
	};

	return {fetchVideos, decorateResponse};
}() );