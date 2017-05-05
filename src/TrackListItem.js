import React, { Component } from 'react';

class TrackListItem extends Component{
	render(){
		return(
			<div onClick={this.props.startPlaying}>
				<div>
					Song Name : {this.props.name}
				</div>
				<div>
					Duration : {this.props.duration} 
				</div>
			</div>
			);
	}
}
export default TrackListItem;