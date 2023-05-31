import React from 'react';

import './App.css'
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Navbar/Intro/Intro';
import Services from './Services/Services';
import Expereince from './components/Expereince/Expereince';
import Work from './components/Works/Work';
import Portfolio from './components/Portfolio/Portfolio';
import Testimonial from './components/Testimonials/Testimonial';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


const App = () => {

  
  return (
    <div className='App'>
    <Navbar></Navbar>
    <Intro></Intro>
    <Services></Services>
    <Expereince></Expereince>
    <Work></Work>
    <Portfolio></Portfolio>
    <Testimonial></Testimonial>
    <Contact></Contact>
    <Footer></Footer>
    </div>
  );
};

export default App;