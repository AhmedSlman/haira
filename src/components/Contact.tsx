import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact-us" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 animate-slide-up">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-accent-400 mx-auto mb-6"></div>
          <p className="text-neutral-600 md:text-lg">
            Have questions or ready to book? Reach out to us through any of these channels
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="bg-white rounded-xl shadow-lg p-8 animate-slide-up">
            <h3 className="font-serif text-2xl font-semibold text-neutral-900 mb-6">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                <div className="ml-4">
                  <h4 className="font-medium text-neutral-900">Location</h4>
                  <p className="text-neutral-600">123 Beauty Lane, Suite 100<br />New York, NY 10001</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                <div className="ml-4">
                  <h4 className="font-medium text-neutral-900">Phone</h4>
                  <p className="text-neutral-600">(555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                <div className="ml-4">
                  <h4 className="font-medium text-neutral-900">Email</h4>
                  <p className="text-neutral-600">info@elegancesalon.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                <div className="ml-4">
                  <h4 className="font-medium text-neutral-900">Hours</h4>
                  <p className="text-neutral-600">
                    Monday - Friday: 9:00 AM - 8:00 PM<br />
                    Saturday: 10:00 AM - 6:00 PM<br />
                    Sunday: 11:00 AM - 5:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-medium text-neutral-900 mb-3">Connect With Us</h4>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-primary-600 hover:bg-primary-100 transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-primary-600 hover:bg-primary-100 transition-colors duration-300"
                  aria-label="WhatsApp"
                >
                  <MessageSquare className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-primary-600 hover:bg-primary-100 transition-colors duration-300"
                  aria-label="Google Maps"
                >
                  <MapPin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="font-serif text-2xl font-semibold text-neutral-900 mb-6">
              Send Us a Message
            </h3>

            <form>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                    Full Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-300 focus:border-primary-400 outline-none transition-colors duration-300"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-300 focus:border-primary-400 outline-none transition-colors duration-300"
                    placeholder="Your email"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
                    Phone Number
                  </label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-300 focus:border-primary-400 outline-none transition-colors duration-300"
                    placeholder="Your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                    Message
                  </label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-300 focus:border-primary-400 outline-none transition-colors duration-300"
                    placeholder="Your message"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full px-8 py-3 bg-primary-600 text-white font-medium rounded-md transform transition-all duration-300 hover:bg-primary-700 hover:shadow-lg"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;