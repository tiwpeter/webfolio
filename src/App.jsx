import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Works from './components/Works';
import Feedbacks from './components/Feedbacks';
import Contact from './components/Contact';
import StarsCanvas from './components/StarsCanvas';
import Tech from './components/Tech';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <NavBar/>
          <Hero/>
        </div>
        <About/>
        <Experience/>

        <Tech/>
        <Works/>
        <Feedbacks/>
        <div className="relative z-0">
          <Contact/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
