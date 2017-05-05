import React, { Component } from 'react';
import Axios from 'axios'
import ArtistsList from './ArtistsList.js'

class Home extends Component {
	state = {artists : []};
	render() {
		return (
			<ArtistsList artists={this.state.artists}/>
		);
	}
	componentWillMount(props){
		var _self = this;
		var z = Axios.get('https://api.spotify.com/v1/search',
		{
			params : 
			{
				q : 'linkin park',
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