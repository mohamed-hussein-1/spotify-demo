import React, { Component } from 'react';
import Axios from 'axios';
import Util from './Util.js';
import {Link} from 'react-router-dom';
import TrackListItem from'./TrackListItem.js';
class Artist extends Component{
	state = {tracks : [],albums: []};
	componentWillMount(){
		
		var _self = this;
		
		var topTracksRequest = Axios.get('https://api.spotify.com/v1/artists/'+
			this.props.match.params.id+'/top-tracks?country=SE',null);
		topTracksRequest.then(function(response){
			
			_self.setState({tracks : response.data.tracks});
		});
		var topAlbumsRequest = Axios.get('https://api.spotify.com/v1/artists/'+
			this.props.match.params.id+'/albums',null);
		topAlbumsRequest.then(function(response){
			
			_self.setState({albums : response.data.items});
		});
	}
	render(){
		return(
			<div>

				<div>
					
					{this.state.tracks.map((e,i) =>
					 (<TrackListItem name={e.name} duration={Util.millisToMinutesAndSeconds(e.duration_ms)} 
					 	startPlaying={() => this.props.startPlaying(e)} key={i}/>))}
				</div>
				<div>
					{this.state.albums.map((e,i) => (<Link to={`/album/${e.id}`} key={i}>{e.name}</Link>))} 
				</div>
				
			</div>
			);
	}
}
export default Artist;