import { useState, useEffect, useRef } from 'react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonialRef = useRef(null);
  
  const testimonials = [
    {
      text: "\"NexusAI transformed our business operations with their custom AI solution. Our efficiency has increased by 40% since implementation.\"",
      author: "Jitendra Rajput",
    },
    {
      text: "\"The project planning and execution were flawless. They delivered ahead of schedule and within budget. Highly recommended!\"",
      author: "Parikshit Sharma",
    },
  ];
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (testimonialRef.current) observer.observe(testimonialRef.current);
    
    return () => {
      if (testimonialRef.current) observer.unobserve(testimonialRef.current);
    };
  }, []);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="testimonials" id="testimonials">
      <h2 className="section-title">Client Testimonials</h2>
      <p className="section-subtitle">Hear what our clients have to say about our services</p>
      
      <div className="testimonial-container">
        <div className="testimonial" ref={testimonialRef}>
          <p className="testimonial-text">{testimonials[currentTestimonial].text}</p>
          <div className="testimonial-author">{testimonials[currentTestimonial].author}</div>
          {/* <div className="testimonial-role">{testimonials[currentTestimonial].role}</div> */}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;