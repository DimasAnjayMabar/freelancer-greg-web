import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface NavigationProps {
  isTransparent?: boolean;
}

export const Navigation: React.FC<NavigationProps> = ({ isTransparent = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', path: '/', label: 'HOME' },
    { id: 'types', path: '/services', label: 'SERVICES' },
    { id: 'pricing', path: '/pricing', label: 'PRICING' }
  ];

  // Fungsi untuk menentukan apakah item aktif berdasarkan path
  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  // Tentukan kelas background berdasarkan props dan status scroll
  const navBackgroundClass = isTransparent && !isScrolled 
    ? 'bg-transparent shadow-none' 
    : 'bg-[#252525] shadow-lg';

  // Tentukan kelas teks berdasarkan props dan status scroll
  const textColorClass = isTransparent && !isScrolled 
    ? 'text-[#e8e8e8]' 
    : 'text-[#e8e8e8]';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${navBackgroundClass} transition-all duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <Link 
          to="/" 
          className={`font-bold text-xl ${textColorClass} hover:opacity-80 transition-opacity duration-300`}
        >
          FREELANCER_GREG
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className={`relative font-semibold ${textColorClass} transition-all duration-300
                after:block after:h-0.5 after:w-0 after:bg-[#e8e8e8] after:absolute after:-bottom-1 after:left-0
                hover:after:w-full after:transition-all after:duration-300
                ${isActive(item.path) ? 'after:w-full' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(true)}
            className={`${textColorClass} transition-colors duration-300 hover:opacity-70`}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#252525] shadow-xl transform transition-transform duration-300 ease-in-out z-50
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex justify-end p-4">
          <button 
            onClick={() => setIsOpen(false)} 
            className="text-[#e8e8e8] hover:opacity-70 transition-opacity duration-300"
          >
            <X size={24} />
          </button>
        </div>
        <div className="flex flex-col px-6 space-y-6 mt-8">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`relative text-[#e8e8e8] font-semibold py-2 text-lg transition-all duration-300
                after:block after:h-0.5 after:w-0 after:bg-[#e8e8e8] after:absolute after:-bottom-1 after:left-0
                hover:after:w-full after:transition-all after:duration-300
                ${isActive(item.path) ? 'after:w-full' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Overlay saat sidebar terbuka */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/70 z-40 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
};