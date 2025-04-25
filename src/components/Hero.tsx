import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Elegant salon interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center md:text-left md:ml-16 animate-fade-in">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 md:max-w-xl">
          Elevate Your Beauty Experience
        </h1>
        <p className="text-white/90 text-lg md:text-xl mb-8 md:max-w-lg">
          Luxurious hair and beauty services tailored for your unique style
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a 
            href="#book-appointment"
            className="inline-block px-8 py-3 bg-accent-400 text-neutral-950 font-medium rounded-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            Book Now
          </a>
          <a 
            href="#services"
            className="inline-block px-8 py-3 bg-transparent border border-white text-white font-medium rounded-md transform transition-all duration-300 hover:bg-white/10"
          >
            Explore Services
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg 
          className="w-6 h-6 text-white" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;