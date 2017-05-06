import React, { Component } from 'react';
import ReactPlayer from 'react-player';

class MusicPlayer extends Component{
	state = {url:'',playing:true,played:0 , duration:0};
	render(){
		var current_dur = Math.floor(this.state.played)/Math.floor(this.state.duration) * 100;
		var pause = <i className="fa fa-pause" aria-hidden="true"></i>;
		return (
			<div>
				<div className="music-player-info">
					<span>{this.props.name}</span>
					<span>{this.props.artists}</span>
				</div>
				
				<div className="player-control">
					<a href="#" onClick={this.playPause}>{this.state.playing ? pause:"play"}</a>
					<div className="progress-bar" ><span style={{width:current_dur+"%"}}></span></div>
				</div>
				<ReactPlayer style={{display:"none"}}
				 url={this.props.url} playing={this.state.playing} onEnded={()=>(this.setState({playing:false}))}
				 onProgress={this.onProgress}
				 onDuration={(dur) => {this.setState({duration:dur})}}
				 />
			</div>
			);
	}
	playPause = () => {
		this.setState({playing:!this.state.playing});
	}
	onProgress = (progress) => {this.setState({played:progress.playedSeconds})};
}
export default MusicPlayer;