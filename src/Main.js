import React, { Component } from 'react';
import Home from './Home';
import Albums from './Albums';
import Artists from './Artists';
import Artist from './Artist';
import Album from './Album';
import { Route , Switch } from 'react-router-dom';





class Main extends Component {
  render() {
    return (
        <div className="Main">
    		  <Switch>
    			   <Route exact path='/' component={Home}/>
    	       <Route path='/albums' component={Albums}/>
    	       <Route path='/artists' component={Artists}/>	
             <Route path='/artist/:id' render={(props) => (<Artist {...props} startPlaying={this.props.startPlaying}/>)}/>
             <Route path='/album/:id' render={(props) => (<Album {...props} startPlaying={this.props.startPlaying}/>)}/>
    		  </Switch>
        </div>
    );
  }
}

export default Main;