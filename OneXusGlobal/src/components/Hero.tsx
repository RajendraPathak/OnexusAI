import React, { useState, useEffect } from 'react';

type Props = {
  onContactOpen?: () => void;
};

const Hero: React.FC<Props> = ({ onContactOpen }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroSlides = [
    "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1720&q=80",
    "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1700&q=80",
    // "https://images.unsplash.com/photo-1677442135135-416f8aa26a5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1700&q=80",
    "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1700&q=80",
    "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1700&q=80"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % heroSlides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  return (
    <section className="hero">
      <div className="hero-slides">
        {heroSlides.map((slide, index) => (
          <div 
            key={index} 
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide})` }}
          ></div>
        ))}
      </div>
      
      <h1>Transforming Business with AI & IT Solutions</h1>
      <p>We deliver measurable business value with solutions focused on saving costs, increasing efficiency, and unlocking new revenue opportunities</p>
      <div className="hero-buttons">
        <button className="btn btn-primary" onClick={() => {
          const el = document.getElementById('services');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}>Explore Services</button>
        <button className="btn btn-secondary" onClick={() => onContactOpen && onContactOpen()}>Contact Us</button>
      </div>
    </section>
  );
};

export default Hero;