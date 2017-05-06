import React, { Component } from 'react';
import Axios from 'axios';
import ArtistsList from './ArtistsList';

class Artists extends Component {
	state = {searchQuery:'',artists:[]};
	render() {
		return (
			<div className="albums-wrapper">
                <h1>Search for Artists</h1>
    			<input className="search-form" type='text' onKeyPress={this._handleKeyPress} />
                <ArtistsList type='artist' artists={this.state.artists}/>
			</div>
		);
	}
	_handleKeyPress = (e) => {
    	if (e.key === 'Enter') {
      		this.setState({searchQuery:e.target.value});
            var _self = this;
            var z = Axios.get('https://api.spotify.com/v1/search',
                {
                    params : 
                    {
                        q : e.target.value,
                        type : 'artist',
                        limit : 50
                    }
                }
            );
            z.then(function(response){
                _self.setState({artists : response.data.artists.items});
            });
    	}
  	};
}
export default Artists;