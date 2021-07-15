import React, { Component } from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import ContactMe from './components/ContactMe';
import Work from './components/Work';
import logo from './logo.svg';
import './App.css';
import portfolioData from './portfolioData';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <AboutMe />
          <ContactMe />
        </div>
      </div>
      
      <Work portfolioData={portfolioData}/>
    </div>
   
  );
}

export default App;
