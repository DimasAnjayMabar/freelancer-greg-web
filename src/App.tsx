import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { BusinessSection } from './components/BusinessSection';
import { CarouselSection } from './components/CarouselSection';
import { TypesSection } from './components/TypesSection';
import { PricingSection } from './components/PricingSection';

// Komponen wrapper untuk menentukan transparansi navbar
const NavWrapper: React.FC = () => {
  const location = useLocation();
  const [isHomePage, setIsHomePage] = useState(false);
  
  useEffect(() => {
    setIsHomePage(location.pathname === '/');
  }, [location]);
  
  return <Navigation isTransparent={isHomePage} />;
};

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <NavWrapper />
        
        <Routes>
          <Route path="/" element={
            <div id="home">
              <HeroSection />
              <BusinessSection />
              <CarouselSection />
            </div>
          } />
          
          <Route path="/services" element={
            <div id="services">
              <TypesSection />
            </div>
          } />
          
          <Route path="/pricing" element={
            <div id="pricing">
              <PricingSection />
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;