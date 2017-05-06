import React, { Component } from 'react';
import { Link , Route , Switch } from 'react-router-dom';
class SideBar extends Component {
  render() {
    return (
      <div className="SideBar">
      	  <div className="logo">
      	  	
      	  </div>
	      <nav>
		      
            <Route render={()=> (
                <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/albums'>Albums</Link></li>
                <li><Link to='/artists'>Artists</Link></li>
                </ul>
              )}/>
			      
		      
	      </nav>
      </div>
    );
  }
}

export default SideBar;