
import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calendar, Menu as MenuIcon, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'About', path: '/about' },
    { name: 'Reservation', path: '/reservation' },
  ];

  const isHome = location.pathname === '/';
  // Use transparent background only on home page when at top
  const headerBg = isHome && !isScrolled ? 'bg-transparent' : 'bg-white/95 backdrop-blur-md shadow-sm';
  const textColor = isHome && !isScrolled ? 'text-white' : 'text-foreground';
  const buttonVariant = isHome && !isScrolled ? 'bg-white text-primary hover:bg-white/90' : 'default';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 z-50">
            <h1 className={`text-2xl font-serif font-bold tracking-tight transition-colors duration-300 ${textColor}`}>
              Bella Vista
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-primary ${isActive ? 'text-primary' : textColor
                  } ${isActive && isHome && !isScrolled ? 'text-white font-bold' : ''}`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <Link to="/reservation">
              <Button
                variant={isHome && !isScrolled ? "secondary" : "default"}
                className="font-semibold"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Book Table
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden z-50 p-2 ${textColor}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-background z-40 flex flex-col items-center justify-center space-y-8 md:hidden"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-2xl font-serif font-medium ${isActive ? 'text-primary' : 'text-foreground'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Link to="/reservation" className="mt-8">
              <Button size="lg" className="w-full min-w-[200px]">
                Book a Table
              </Button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
