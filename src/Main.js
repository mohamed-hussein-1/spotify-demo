import React, { Component } from 'react';
import Home from './Home';
import Albums from './Albums';
import Artists from './Artists';
import Artist from './Artist';
import Album from './Album';
import { Link , Route , Switch } from 'react-router-dom';
import ReactPlayer from 'react-player';
import MusicPlayer from './MusicPlayer';
import Util from './Util';


class Main extends Component {
  state = {showPlayer : false , url : '',name:'',artists:""};
  render() {
    return (
      <div>
        <div className="Main">
    		  <Switch>
    			   <Route exact path='/' component={Home}/>
    	       <Route path='/albums' component={Albums}/>
    	       <Route path='/artists' component={Artists}/>	
             <Route path='/artist/:id' render={(props) => (<Artist {...props} startPlaying={this.startPlaying}/>)}/>
             <Route path='/album/:id' render={(props) => (<Album {...props} startPlaying={this.startPlaying}/>)}/>
    		  </Switch>
        </div>
        <div className="music-player">
          {this.state.showPlayer ? <MusicPlayer url={this.state.url} name={this.state.name}
              artists={this.state.artists}/>:' '}
        </div>
      </div>
    );
  }
  startPlaying = (e) => {
    this.setState(
      {showPlayer:true,url:e.preview_url,name:e.name,artists:e.artists[0].name}
      );
  };
}

export default Main;