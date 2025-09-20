import React from 'react';

type Props = {
  onContactOpen?: () => void;
};

const Header: React.FC<Props> = ({ onContactOpen }) => {
  return (
    <header className="header">
      <div className="logo">OneXus<span>Global</span></div>
      <nav className="nav">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#showcase">Projects</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#" onClick={(e) => { e.preventDefault(); onContactOpen && onContactOpen(); }}>Contact</a></li>
        </ul>
      </nav>
      <div className="nav-buttons">
        <button className="nav-btn"><i className="fas fa-search"></i></button>
        <button className="nav-btn"><i className="fas fa-user"></i></button>
        <button className="nav-btn"><i className="fas fa-bars"></i></button>
      </div>
    </header>
  );
};

export default Header;