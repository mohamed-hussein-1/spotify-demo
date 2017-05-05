import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class ArtistElement extends Component{
	
	render(){
		if(this.props.thumbnail != null)
		var image = this.props.thumbnail.url;
		return (
			<div>
				<img src={image}/>
				<Link to={`/artist/${this.props.id}`} >
				hi
				</Link>
				{this.props.name}
			</div>
			);
	}

}
export default ArtistElement;