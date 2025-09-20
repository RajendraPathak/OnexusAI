const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-content">
        <div className="footer-column">
          <h3>Products</h3>
          <ul>
            <li><a href="#">AI Solutions</a></li>
            <li><a href="#">IT Services</a></li>
            <li><a href="#">Custom Tools</a></li>
            <li><a href="#">Consulting</a></li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h3>Company</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h3>Resources</h3>
          <ul>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Case Studies</a></li>
            <li><a href="#">White Papers</a></li>
            <li><a href="#">Webinars</a></li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h3>Connect</h3>
          <ul>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2023 NexusAI. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;