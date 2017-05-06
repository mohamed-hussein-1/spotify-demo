import React, { Component } from 'react';
import Axios from 'axios';
import Util from './Util.js';
import { Link } from 'react-router-dom';
class Album extends Component{
	state = {name:"" , tracks : [],image : "" , artist:"" , artist:""};
	componentWillMount(){
		
		var _self = this;
		var albumRequest = Axios.get('https://api.spotify.com/v1/albums/'+
			this.props.match.params.id,null);
		albumRequest.then(function(response){
			_self.setState({name: response.data.name ,
							 image:response.data.images[1].url ,
							 artist:response.data.artists[0].name ,
							 link:response.data.artists[0].id ,
							 tracks : response.data.tracks.items});
		});
		
	}
	render(){
		var startPlayingFn = this.props.startPlaying;
		return(
			<div className="album">
				<div className="album-info">
					
					<img src={this.state.image} />
					<span>{this.state.name}</span>
					<span>{this.state.artist}</span>
					<span>{this.state.tracks.length} tracks</span>
					<Link className="button" to={`/artist/${this.state.link}`}><span>Artist Profile</span></Link>

				</div>
				<div className="album-tracks">
					<table>
						<tbody>
							{
								this.state.tracks.map((e,i) => (
									<tr className="tr-click" key={i} onClick={() => (startPlayingFn(e))}>
										<td>{i}</td>
										<td>{e.name}</td>
										<td>{Util.millisToMinutesAndSeconds(e.duration_ms)}</td>
									</tr>
							 ))
							}
						</tbody>
					</table>
				</div>
				
			</div>
			);
	}
}
export default Album;