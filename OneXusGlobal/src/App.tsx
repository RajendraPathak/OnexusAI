import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Promise from './components/Promise';
import Showcase from './components/Showcase';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import './styles/style.css';

function App() {
  const [contactOpen, setContactOpen] = useState(false);

  const openContact = () => setContactOpen(true);
  const closeContact = () => setContactOpen(false);

  return (
    <div className="App">
      <Header onContactOpen={openContact} />
      <Hero onContactOpen={openContact} />
      <Services />
      <Promise />
      <Showcase />
      <Testimonials />
      <Footer />
      <ContactForm open={contactOpen} onClose={closeContact} />
    </div>
  );
}

export default App;