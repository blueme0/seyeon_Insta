import React, { Component } from 'react';
import Topbar from "./components/Topbar";
import Profile from "./components/Profile";
import Story from "./components/Story";
import Nav from "./components/Nav";
import Posts from "./components/Posts";
import Etc from "./components/Etc";

import './App.css';

class App extends Component{
  render() {
    return (
      <div className="App">
        <Topbar></Topbar>
        <Profile></Profile>
        <Story></Story>
        <Nav></Nav>
        <Posts></Posts>
        <Etc></Etc>
      </div>
    );
  }
}

export default App;
