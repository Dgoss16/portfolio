import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import Skills from './Components/Skills/Skills';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <Title></Title>
        <About></About>
        <Skills></Skills>
        <Portfolio></Portfolio>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
