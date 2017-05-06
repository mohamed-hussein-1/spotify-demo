import React, { Component } from 'react';
import ArtistElement from './ArtistElement.js';
class ArtistsList extends Component {
   
	render(){
		var mmm = this.props.type;
        return (

            <div className="artists-wrapper">
            {this.props.artists.map((e,i) => 
                (<ArtistElement xtype={mmm} name={e.name} thumbnail={e.images[1] || null} id={e.id} key={i} type='Artist'/>))}
            </div>
        );
	}
}
export default ArtistsList;