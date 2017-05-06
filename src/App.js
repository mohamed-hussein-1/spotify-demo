import React, { Component } from 'react';
import SideBar from './SideBar';
import Main from './Main'
import './App.css';
import { BrowserRouter} from 'react-router-dom';
import ReactPlayer from 'react-player';
import MusicPlayer from './MusicPlayer';
import Util from './Util';

class App extends Component {
  state = {showPlayer : false , url : '',name:'',artists:""};
  render() {
    return (
      <BrowserRouter>
	      <div className="App">
	        <SideBar />
	        <Main class="content-wrapper" startPlaying={this.startPlaying}/>
          <div className="music-player-wrapper">
            {this.state.showPlayer ? <MusicPlayer url={this.state.url} name={this.state.name}
                artists={this.state.artists}/>:' '}
          </div>
	      </div>
      </BrowserRouter>
    );
  }
  startPlaying = (e) => {
    this.setState(
      {showPlayer:true,url:e.preview_url,name:e.name,artists:e.artists[0].name}
      );
  };
}

export default App;
