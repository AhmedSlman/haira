import React from 'react';
import ServiceCard from './ServiceCard';
import { services } from '../data/services';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-slide-up">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Our Premium Services
          </h2>
          <div className="w-24 h-1 bg-accent-400 mx-auto mb-6"></div>
          <p className="text-neutral-600 md:text-lg">
            Indulge in our range of high-quality beauty and hair services designed to enhance your natural beauty
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="animate-slide-up" style={{ animationDelay: `${service.id * 0.1}s` }}>
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#book-appointment" 
            className="inline-block px-8 py-3 bg-primary-600 text-white font-medium rounded-md transform transition-transform duration-300 hover:scale-105 hover:bg-primary-700 hover:shadow-lg"
          >
            View All Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;