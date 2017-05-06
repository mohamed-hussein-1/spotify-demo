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
		console.log("albums");	
		console.log(this.state.albums);
		return(
			<div className="artist">
				
				<div className="tracks-wrapper">
				<h1>Top Tracks</h1>
					<table className="tracks-table">
						<tbody>
							{this.state.tracks.map((e,i) =>
							 (<TrackListItem name={e.name} duration={Util.millisToMinutesAndSeconds(e.duration_ms)} 
							 	startPlaying={() => this.props.startPlaying(e)} key={i}/>))}
						</tbody>
					</table>
				</div>
				<div className="top-albums-wrapper">
					<h1>Top Albums</h1>
						{
							this.state.albums.map((e,i) => (
								<Link to={`/album/${e.id}`} key={i}>
									<div className="artist-wrapper">
										<img src={e.images[1].url || null}/>
										{e.name}
									</div>
								</Link>
								))
						}
				</div>
				
			</div>
			);
	}
}
export default Artist;