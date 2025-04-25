import React, { useState } from 'react';
import { galleryImages } from '../data/gallery';

const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filteredImages = activeFilter === 'all'
    ? galleryImages
    : galleryImages.filter(image => image.category === activeFilter);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 animate-slide-up">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Our Latest Work
          </h2>
          <div className="w-24 h-1 bg-accent-400 mx-auto mb-6"></div>
          <p className="text-neutral-600 md:text-lg">
            Browse through our gallery of stunning transformations and artistic creations
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {['all', 'haircut', 'color', 'skincare'].map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-md capitalize font-medium transition-colors duration-300 ${
                activeFilter === filter
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              {filter === 'all' ? 'All' : filter}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filteredImages.map((image) => (
            <div 
              key={image.id} 
              className="group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${image.id * 0.1}s` }}
            >
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white font-medium capitalize">{image.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#book-appointment" 
            className="inline-block px-8 py-3 bg-primary-600 text-white font-medium rounded-md transform transition-transform duration-300 hover:scale-105 hover:bg-primary-700 hover:shadow-lg"
          >
            Book Your Transformation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;