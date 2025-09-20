import { useEffect, useRef } from 'react';

const Services = () => {
  const serviceCardsRef = useRef<Array<HTMLDivElement | null>>([]);
  
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
    
    serviceCardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });
    
    return () => {
      serviceCardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);
  
  const services = [
    {
      title: "Dedicated AI & Tech Manpower",
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80",
      icon: "fas fa-users",
      description: "Scale Your Team Without Hiring Hassles. We provide highly trained AI engineers, developers, and analysts who work as an extension of your team.",
      features: [
        "Save hiring and training costs",
        "Quickly scale your workforce for projects",
        "Flexible engagement: short-term or long-term"
      ]
    },
    {
      title: "AI Strategy & Consulting",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      icon: "fas fa-chart-line",
      description: "Turn Confusion into Clarity. We help you identify exactly where AI fits into your business and deliver a step-by-step roadmap.",
      features: [
        "Cut wasted experimentation with targeted Proof-of-Concepts (POCs)",
        "Make confident investments by knowing the ROI before you scale"
      ]
    },
    {
      title: "AI-Powered Customer & Employee Assistants",
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80",
      icon: "fas fa-robot",
      description: "Reduce Support Costs by up to 40%. Our chatbots and virtual assistants solve 70% of repetitive queries automatically.",
      features: [
        "24x7 support, in multiple languages",
        "Internal assistants for HR, IT, and Finance to speed up employee requests"
      ]
    },
    {
      title: "Industry-Specific AI Solutions",
      image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      icon: "fas fa-industry",
      description: "Tailored to Your Sector with specialized solutions for healthcare, finance, retail, manufacturing, and defense.",
      features: [
        "Healthcare: Diagnosis support & medical data summarization",
        "Finance: Fraud detection & risk analysis",
        "Retail: Personalized recommendations & customer insights"
      ]
    },
    {
      title: "AI-Powered SaaS Tools",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      icon: "fas fa-cloud",
      description: "Ready-to-Use Products for Quick ROI. We provide plug-and-play solutions that instantly add value.",
      features: [
        "Knowledge Bot: Search any company data via Teams/Slack",
        "AI Project Planner: Break down projects, analyze risks",
        "Smart HR Assistant: Resume screening & interview assistance"
      ]
    },
    {
      title: "Infrastructure, Deployment & Integration",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      icon: "fas fa-server",
      description: "Enterprise-Ready AI. We ensure AI runs smoothly in your existing IT ecosystem.",
      features: [
        "Deploy on AWS, Azure, or GCP",
        "Build secure APIs for integration",
        "Full MLOps support with monitoring & maintenance"
      ]
    }
  ];

  return (
    <section className="services" id="services">
      <h2 className="section-title">Our Services</h2>
      <p className="section-subtitle">We deliver measurable business value. Every solution we design focuses on saving costs, increasing efficiency, and unlocking new revenue opportunities.</p>
      
      <div className="services-grid">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="service-card"
            ref={el => { serviceCardsRef.current[index] = el; }}
          >
            <div className="service-image">
              <img src={service.image} alt={service.title} />
            </div>
            <div className="service-content">
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, i) => (
                  <li key={i}><i className="fas fa-check-circle"></i>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;