import React, { Component } from 'react';
import Axios from 'axios'
import ArtistsList from './ArtistsList.js'

class Home extends Component {
	state = {artists : []};
	render() {
		return (
			<div className="home-wrapper">
				<h1>Top Artists</h1>
				<ArtistsList type="artist" artists={this.state.artists}/>
			</div>
		);
	}
	componentWillMount(props){
		var _self = this;
		var z = Axios.get('https://api.spotify.com/v1/search',
		{
			params : 
			{
				q : 'q',
				type : 'artist',
				limit : 50
			}
		}
		);
		z.then(function(response){
			
			_self.setState({artists : response.data.artists.items});
		});
	}
}
export default Home;