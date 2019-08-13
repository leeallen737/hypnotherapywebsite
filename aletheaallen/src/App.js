import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import Home from './components/Home/Home';

class App extends Component{
  state = {
    sideDrawerOpen: false
  };

drawerToggleClickHandler = () => {
  this.setState((prevState) => {
    return {sideDrawerOpen: !prevState.sideDrawerOpen};
  })
};

backdropClickHandler = () => {
  this.setState({sideDrawerOpen: false})
}


  render(){
    let backdrop;

    if (this.state.sideDrawerOpen)  {
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }

     return(
       <div className="app" style={{height: '100%'}}>
       <NavBar drawerClickHandler={this.drawerToggleClickHandler} />
       <SideDrawer show={this.state.sideDrawerOpen}/>
       {backdrop }
       <main style={{marginTop: '64px'}}><p><Home /></p></main>
       
       </div>
     )
  }
}

export default App;
