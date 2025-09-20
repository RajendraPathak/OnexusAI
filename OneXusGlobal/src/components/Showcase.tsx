import { useEffect, useRef } from 'react';

const Showcase = () => {
  const showcaseItemsRef = useRef<Array<HTMLDivElement | null>>([]);
  
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
    
    showcaseItemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });
    
    return () => {
      showcaseItemsRef.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);
  
  const projects = [
    {
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      title: "Enterprise AI Implementation",
      description: "Custom AI solution for a Fortune 500 company"
    },
    {
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      title: "Cloud Infrastructure Migration",
      description: "Seamless transition to cloud for a financial institution"
    },
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1715&q=80",
      title: "Predictive Analytics System",
      description: "Advanced data analytics for e-commerce business"
    }
  ];

  return (
    <section className="showcase" id="showcase">
      <h2 className="section-title">Featured Projects</h2>
      <p className="section-subtitle">Discover how we've helped businesses transform with our technology solutions</p>
      
      <div className="showcase-container">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="showcase-item"
            ref={el => { showcaseItemsRef.current[index] = el; }}
          >
            <img src={project.image} alt={project.title} className="showcase-img" />
            <div className="showcase-overlay">
              <h3 className="showcase-title">{project.title}</h3>
              <p className="showcase-desc">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Showcase;