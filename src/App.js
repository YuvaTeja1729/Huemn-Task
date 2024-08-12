

// src/App.js
import React from 'react';
import Header from './components/Header.js';
import MainPage from './components/MainPage.js';
import AnimationSection from './components/AnimationSection.js';
import Footer from './components/Footer.js';
import FastPage from './components/FastPage.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MainPage />
      <AnimationSection />
      <FastPage />
      <Footer />
    </div>
  );
}

export default App;





