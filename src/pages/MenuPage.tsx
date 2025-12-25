
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Menu from '@/components/Menu';

const MenuPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        <div className="container-custom py-12">
           <h1 className="h1-display text-center mb-8">Our Menu</h1>
           <p className="text-body text-center max-w-2xl mx-auto mb-16">
             Discover our carefully curated selection of authentic Italian dishes, 
             crafted with passion and the finest ingredients.
           </p>
           <Menu />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MenuPage;
