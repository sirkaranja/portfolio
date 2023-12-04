// App.js

import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Intro from './Components/Intro/Intro';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Services from './Components/Services/Services';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <About/>
      <Skills/>
      <Services/>
      <Portfolio/>
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
