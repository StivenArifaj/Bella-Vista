
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Menu from '@/components/Menu';
import Events from '@/components/Events';
import Reservation from '@/components/Reservation';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Menu />
      <Events />
      <Reservation />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
