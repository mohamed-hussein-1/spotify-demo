import React, { Component } from 'react';

class TrackListItem extends Component{
	render(){
		return(
			<tr className="tr-click" onClick={this.props.startPlaying}>
				<td style={{width:700}}>
					{this.props.name}
				</td>
				<td>
					{this.props.duration} 
				</td>
			</tr>
			);
	}
}
export default TrackListItem;