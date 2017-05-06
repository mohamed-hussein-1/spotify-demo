import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class ArtistElement extends Component{
	
	render(){
		if(this.props.thumbnail != null)
		var image = this.props.thumbnail.url;
		return (
			<Link to={`/${this.props.xtype}/${this.props.id}`} >
				<div className="artist-wrapper">
					<img src={image}/>
					{this.props.name}
				</div>
			</Link>
			);
	}

}
export default ArtistElement;