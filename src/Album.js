import React, { Component } from 'react';
import Axios from 'axios';
import Util from './Util.js';
class Album extends Component{
	state = {tracks : []};
	componentWillMount(){
		
		var _self = this;
		var albumRequest = Axios.get('https://api.spotify.com/v1/albums/'+
			this.props.match.params.id,null);
		albumRequest.then(function(response){
			
			_self.setState({tracks : response.data.tracks.items});
		});
		
	}
	render(){
		return(
			<div>
				<div>
					{
						this.state.tracks.map((e,i) => (i+ " " + e.name + " " +
					 Util.millisToMinutesAndSeconds(e.duration_ms)))
					}
				</div>
				<div>
					{this.state.tracks.length}
				</div>
				
			</div>
			);
	}
}
export default Album;