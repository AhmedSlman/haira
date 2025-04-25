import React, { useState, useEffect } from 'react';
import Testimonial from './Testimonial';
import { testimonials } from '../data/testimonials';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  const handlePrev = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  return (
    <section id="reviews" className="py-20 bg-primary-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 animate-slide-up">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-accent-400 mx-auto mb-6"></div>
          <p className="text-neutral-600 md:text-lg">
            Hear from our satisfied clients about their experience with our services
          </p>
        </div>

        <div className="max-w-3xl mx-auto relative">
          <div className="min-h-[300px] flex items-center justify-center relative">
            {testimonials.map((testimonial, index) => (
              <Testimonial
                key={testimonial.id}
                testimonial={testimonial}
                isActive={index === activeIndex}
              />
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8">
            <button 
              onClick={handlePrev}
              className="p-2 rounded-full bg-white shadow hover:bg-neutral-100 transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <svg 
                className="w-5 h-5 text-neutral-700" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M15 19l-7-7 7-7" 
                />
              </svg>
            </button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === activeIndex 
                      ? 'bg-primary-600' 
                      : 'bg-neutral-300 hover:bg-neutral-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button 
              onClick={handleNext}
              className="p-2 rounded-full bg-white shadow hover:bg-neutral-100 transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <svg 
                className="w-5 h-5 text-neutral-700" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5l7 7-7 7" 
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;