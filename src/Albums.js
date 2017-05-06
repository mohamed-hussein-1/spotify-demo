import React, { Component } from 'react';
import Axios from 'axios';
import ArtistsList from './ArtistsList';
class Albums extends Component {
	state = {searchQuery:'',albums:[]};
	render() {
		return (
			<div className="albums-wrapper">
                <h1>Search for Albums</h1>
    			<input className="search-form" type='text' onKeyPress={this._handleKeyPress} />
                <ArtistsList type='album' artists={this.state.albums}/>
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
                        type : 'album',
                        limit : 50
                    }
                }
            );
            z.then(function(response){
                _self.setState({albums : response.data.albums.items});
            });
    	}
  	};
}
export default Albums;