import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class SideBar extends Component {
  render() {
    var links = ['/','/album','/artist']
    var xyz = ["","",""];
    for (var i = links.length - 1; i >= 0; i--) {
      if(this.props.location.pathname.includes(links[i])){
        xyz[i] = "active";
        break;
      }
    }
    return (
      <div className="SideBar">
      	  <div className="logo">
      	  	
      	  </div>
	      <nav>
		      
            
                <ul>
                <li><Link to='/' className={xyz[0]}>Home</Link></li>
                <li><Link to='/albums' className={xyz[1]}>Albums</Link></li>
                <li><Link to='/artists' className={xyz[2]}>Artists</Link></li>
                </ul>
             
			      
		      
	      </nav>
      </div>
    );
  }
}

export default SideBar;