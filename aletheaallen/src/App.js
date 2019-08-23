import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import Home from './components/Home/Home';
import About from './components/About/About';
import Hypnotherapy from './components/Hypnotherapy/Hypnotherapy'
import Services from './components/Services/Services';
import ContactForm from './components/Contact/ContactForm';
import Footer from './components/Footer';

import { BrowserRouter, Route } from 'react-router-dom';
 
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
       <BrowserRouter>
       <div className="app" style={{height: '100%'}}>
       <NavBar drawerClickHandler={this.drawerToggleClickHandler} />
       <SideDrawer show={this.state.sideDrawerOpen}/>
       {backdrop }
       <main >
         <Route exact path='/' component={Home} />
         <Route path='/About' component={About} />
         <Route path='/Hypnotherapy' component={Hypnotherapy} />
         <Route path='/Services' component={Services} />
         <Route path='/Contactform' component={ContactForm} />
        </main>
       </div>
       <Footer />
       </BrowserRouter>
     )
  }
}

export default App;
