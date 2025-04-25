import React from 'react';
import { Testimonial as TestimonialType } from '../types';

interface TestimonialProps {
  testimonial: TestimonialType;
  isActive: boolean;
}

const Testimonial: React.FC<TestimonialProps> = ({ testimonial, isActive }) => {
  return (
    <div 
      className={`bg-white rounded-xl shadow-lg p-6 md:p-8 transition-all duration-500 ${
        isActive 
          ? 'opacity-100 scale-100 z-10' 
          : 'opacity-0 scale-95 absolute pointer-events-none'
      }`}
    >
      <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 mb-4">
        <img 
          src={testimonial.avatar} 
          alt={testimonial.name} 
          className="w-16 h-16 rounded-full object-cover border-2 border-accent-200"
        />
        <div>
          <h3 className="font-serif text-xl font-semibold text-neutral-900">{testimonial.name}</h3>
          <p className="text-neutral-500 text-sm">{testimonial.role}</p>
        </div>
      </div>
      <svg 
        className="w-8 h-8 text-primary-100 mb-4" 
        fill="currentColor" 
        viewBox="0 0 24 24"
      >
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>
      <p className="text-neutral-600 italic mb-4">
        "{testimonial.content}"
      </p>
      <div className="flex justify-center">
        <div className="flex space-x-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg 
              key={star}
              className="w-5 h-5 text-accent-400" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;