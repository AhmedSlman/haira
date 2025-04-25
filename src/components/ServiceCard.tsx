import React from 'react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <span className="text-white font-medium">{service.price}</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-serif text-xl font-semibold text-neutral-900 mb-2">{service.title}</h3>
        <p className="text-neutral-600 mb-4">{service.description}</p>
        <a 
          href="#book-appointment" 
          className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors duration-300"
        >
          Book Service
          <svg 
            className="ml-1 w-5 h-5" 
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
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;