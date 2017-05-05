import React, { Component } from 'react';
import SideBar from './SideBar';
import Main from './Main'
import './App.css';
import { BrowserRouter} from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
	      <div className="App">
	        <SideBar />
	        <Main />
	      </div>
      </BrowserRouter>
    );
  }
}

export default App;
