import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { BusinessSection } from './components/BusinessSection';
import PortfolioBentoGrid from './components/PortfolioGrid';
import { CarouselSection } from './components/CarouselSection';

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
          
          <Route path="/portfolio" element={
            <div id="services">
              <PortfolioBentoGrid />
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;