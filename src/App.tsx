import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import BookAppointment from './components/BookAppointment';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Update page title
  useEffect(() => {
    document.title = 'Elegance Beauty Salon';
  }, []);

  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <Services />
      <BookAppointment />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;