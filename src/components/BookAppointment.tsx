import React, { useState } from 'react';
import { Calendar, Clock } from 'lucide-react';

const BookAppointment: React.FC = () => {
  const [selectedService, setSelectedService] = useState('');
  
  const services = [
    'Haircut & Styling',
    'Hair Coloring',
    'Highlights',
    'Balayage',
    'Facial Treatments',
    'Manicure & Pedicure',
    'Makeup Services',
    'Hair Treatments'
  ];
  
  const times = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', 
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  return (
    <section id="book-appointment" className="py-20 bg-primary-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 animate-slide-up">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Book Your Appointment
          </h2>
          <div className="w-24 h-1 bg-accent-400 mx-auto mb-6"></div>
          <p className="text-neutral-600 md:text-lg">
            Schedule your visit with our expert stylists and beauty professionals
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 animate-slide-up">
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                <label htmlFor="service" className="block text-sm font-medium text-neutral-700 mb-1">
                  Service
                </label>
                <select 
                  id="service"
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-300 focus:border-primary-400 outline-none transition-colors duration-300"
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="date" className="block text-sm font-medium text-neutral-700 mb-1">
                  Preferred Date
                </label>
                <div className="relative">
                  <input 
                    type="date" 
                    id="date" 
                    className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-300 focus:border-primary-400 outline-none transition-colors duration-300"
                  />
                  <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-400 pointer-events-none w-5 h-5" />
                </div>
              </div>

              <div>
                <label htmlFor="time" className="block text-sm font-medium text-neutral-700 mb-1">
                  Preferred Time
                </label>
                <div className="relative">
                  <select 
                    id="time"
                    className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-300 focus:border-primary-400 outline-none transition-colors duration-300"
                  >
                    <option value="">Select a time</option>
                    {times.map((time) => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                  <Clock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-400 pointer-events-none w-5 h-5" />
                </div>
              </div>
            </div>

            <div className="mt-6">
              <label htmlFor="notes" className="block text-sm font-medium text-neutral-700 mb-1">
                Special Requests or Notes
              </label>
              <textarea 
                id="notes" 
                rows={3} 
                className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-300 focus:border-primary-400 outline-none transition-colors duration-300"
                placeholder="Any special requests or additional information"
              ></textarea>
            </div>

            <div className="mt-8">
              <button 
                type="submit" 
                className="w-full px-8 py-3 bg-accent-400 text-neutral-950 font-medium rounded-md transform transition-all duration-300 hover:bg-accent-500 hover:shadow-lg"
              >
                Book Appointment
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookAppointment;