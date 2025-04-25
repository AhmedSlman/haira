import React from 'react';
import { Scissors, Instagram, MessageSquare, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center mb-4">
              <Scissors className="h-6 w-6 mr-2 text-accent-400" />
              <span className="font-serif text-xl font-semibold">Elegance</span>
            </div>
            <p className="text-neutral-400 mb-6">
              Luxury hair and beauty salon dedicated to enhancing your natural beauty with exceptional services and expert care.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-white hover:bg-accent-400 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-white hover:bg-accent-400 transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-white hover:bg-accent-400 transition-colors duration-300"
                aria-label="Google Maps"
              >
                <MapPin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Services', 'Book Appointment', 'Gallery', 'Reviews', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-neutral-400 hover:text-white hover:underline transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {[
                'Haircut & Styling', 
                'Hair Coloring', 
                'Highlights & Balayage',
                'Hair Treatments',
                'Facial Treatments',
                'Manicure & Pedicure',
                'Makeup Services'
              ].map((service) => (
                <li key={service}>
                  <a 
                    href="#services" 
                    className="text-neutral-400 hover:text-white hover:underline transition-colors duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="w-5 h-5 text-accent-400 mt-1 flex-shrink-0" />
                <span className="ml-3 text-neutral-400">
                  123 Beauty Lane, Suite 100<br />New York, NY 10001
                </span>
              </li>
              <li className="flex">
                <Phone className="w-5 h-5 text-accent-400 mt-1 flex-shrink-0" />
                <span className="ml-3 text-neutral-400">(555) 123-4567</span>
              </li>
              <li className="flex">
                <Mail className="w-5 h-5 text-accent-400 mt-1 flex-shrink-0" />
                <span className="ml-3 text-neutral-400">info@elegancesalon.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Elegance Beauty Salon. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;