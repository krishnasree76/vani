import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import logo from '@/assets/logo.png';

const navLinks = [
  { name: 'Home', href: 'home' },
  { name: 'About', href: 'about' },
  { name: 'Services', href: 'services' },
  { name: 'Partners', href: 'partners' },
  { name: 'Training', href: 'training' },
  { name: 'Contact', href: 'contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    // 1. Close mobile menu first
    setIsMobileMenuOpen(false);

    // 2. Give the browser a moment to register the menu closing
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const navHeight = navRef.current?.offsetHeight || 80;
        
        // Calculate absolute position manually
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - navHeight;

        window.scrollTo({
          top: id === 'home' ? 0 : offsetPosition,
          behavior: 'smooth',
        });
      }
    }, 100); // 100ms delay ensures the menu is out of the way
  };

  return (
    <motion.nav
      ref={navRef}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        isScrolled ? 'shadow-md py-2' : 'py-4'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-2 outline-none"
          >
            <img
              src={logo}
              alt="Vani Technologies Limited"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="font-medium text-sm text-primary hover:text-secondary transition-colors"
              >
                {link.name}
              </button>
            ))}

            <motion.a
              href="https://wa.me/447384055753"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg font-medium text-sm hover:bg-primary/90"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-4 h-4" />
              Talk to Us
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-primary outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-t border-border shadow-xl lg:hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="py-4 px-4 text-primary font-semibold text-lg hover:bg-muted rounded-xl text-left transition-colors active:bg-muted"
                >
                  {link.name}
                </button>
              ))}

              <a
                href="https://wa.me/447384055753"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-primary text-white px-5 py-4 rounded-xl font-bold mt-4 shadow-lg"
              >
                <Phone className="w-5 h-5" />
                Talk to Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;