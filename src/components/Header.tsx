import React, { useState, useEffect } from 'react';
import { Scissors } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <Scissors 
              className={`h-6 w-6 mr-2 ${isScrolled ? 'text-primary-600' : 'text-accent-400'}`} 
            />
            <span className={`font-serif text-xl font-semibold transition-colors duration-300 ${
              isScrolled ? 'text-primary-800' : 'text-white'
            }`}>
              Elegance
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'Services', 'Book Appointment', 'Gallery', 'Reviews', 'Contact Us'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className={`font-sans text-sm font-medium transition-colors duration-300 hover:text-accent-400 ${
                  isScrolled ? 'text-neutral-800' : 'text-white'
                }`}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            <div className={`w-6 h-6 flex flex-col justify-around ${
              isScrolled ? 'text-neutral-800' : 'text-white'
            }`}>
              <span className={`w-full h-0.5 bg-current transition-transform duration-300 ease-in-out ${
                isMenuOpen ? 'transform rotate-45 translate-y-1.5' : ''
              }`}></span>
              <span className={`w-full h-0.5 bg-current transition-opacity duration-300 ease-in-out ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`w-full h-0.5 bg-current transition-transform duration-300 ease-in-out ${
                isMenuOpen ? 'transform -rotate-45 -translate-y-1.5' : ''
              }`}></span>
            </div>
          </button>
        </nav>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-64 opacity-100 mt-4' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="flex flex-col space-y-4 pb-4">
            {['Home', 'Services', 'Book Appointment', 'Gallery', 'Reviews', 'Contact Us'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                onClick={() => setIsMenuOpen(false)}
                className={`font-sans text-sm font-medium px-2 py-1 rounded transition-colors duration-300 hover:text-accent-400 ${
                  isScrolled ? 'text-neutral-800' : 'text-white bg-black/30'
                }`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;