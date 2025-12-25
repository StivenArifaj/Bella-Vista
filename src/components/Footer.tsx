
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Calendar, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-white pt-20 pb-10">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2 space-y-6">
            <h3 className="font-serif text-3xl font-bold tracking-tight">Bella Vista</h3>
            <p className="text-white/70 max-w-sm leading-relaxed">
              Experience the authentic taste of Italy. Where tradition meets culinary excellence in every dish we serve.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-primary hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-primary hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-primary hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif text-xl mb-6 text-primary">Explore</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/menu" className="text-white/70 hover:text-primary transition-colors inline-block">
                  Our Menu
                </Link>
              </li>
              <li>
                <Link to="/reservation" className="text-white/70 hover:text-primary transition-colors inline-block">
                  Book a Table
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/70 hover:text-primary transition-colors inline-block">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-primary transition-colors inline-block">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-xl mb-6 text-primary">Visit Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-primary shrink-0 mt-1" />
                <span className="text-white/70">123 Italian Way<br />Downtown District, NY 10001</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-primary shrink-0" />
                <span className="text-white/70">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Calendar className="w-5 h-5 mr-3 text-primary shrink-0" />
                <span className="text-white/70">Daily: 11AM - 10PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/50">
          <p>© 2024 Bella Vista Restaurant. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
