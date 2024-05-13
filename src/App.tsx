import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Home from './Home'; // Import your Home element
import Features from './Features'; // Import your Features element
import Hardware from './Hardware'; // Import your Hardware element
import Pricing from './Pricing'; // Import your Pricing element
import FreeTrial from './FreeTrial'; // Import your FreeTrial element

function App() {
  // Define anchor links
  const anchorLinks = [
    { name: 'Home', path:'/', id: 'intro-section' },
    { name: 'Features', path:'/features', id: 'features-section' },
    { name: 'Hardware',path:'/hardware', id: 'hardware-section' },
    { name: 'Pricing', path:'/pricing', id: 'pricing-section' },
  ];

  return (
    <div className='App'>
      <Router basename='/inventory-management'>
        <div style={{flex:'1', padding: '4rem'}}>
          <Navbar anchorLinks={anchorLinks} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/hardware" element={<Hardware />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/free-trial" element={<FreeTrial />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
