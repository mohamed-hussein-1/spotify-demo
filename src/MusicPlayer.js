import React, { Component } from 'react';
import ReactPlayer from 'react-player';

class MusicPlayer extends Component{
	state = {url:'',playing:true,played:0 , duration:0};
	render(){
		return (
			<div>
				{this.props.name}
				{this.props.artists}
				{Math.floor(this.state.played)}/{Math.floor(this.state.duration)}
				<button onClick={this.playPause}>{this.state.playing ? "pause":"play"}</button>
				<ReactPlayer
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