import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';

class App extends Component{
  render(){
     return(
       <div className="App">
       <NavBar />
       <main style={{marginTop: '64px'}}><p>This is the page content</p></main>
       </div>
     )
  }
}

export default App;
