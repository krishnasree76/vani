import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail, Clock } from 'lucide-react';
import logo from '@/assets/vani-logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Training', href: '#training' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    'Data Science',
    'Data Analytics',
    'Cybersecurity',
    'Azure Cloud',
    'AWS',
    'SAP',
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/vanitechnologies', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com/vanitechnologies', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com/company/vanitechnologies', label: 'LinkedIn' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-vani-blue-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8 mb-12">

          {/* Company Info */}
          {/* Company Info */}
<div>
  <img
    src={logo}
    alt="Vani Technologies Limited"
    className="h-14 w-auto mb-4 drop-shadow-md"
  />

  <p className="text-vani-blue-200 text-sm leading-relaxed mb-6">
    Empowering individuals and businesses through expert IT consultancy,
    data analytics, and career-focused training programs.
  </p>

            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-16">

            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-vani-blue-200 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          {/* <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-vani-blue-200 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-vani-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-vani-blue-200 text-sm">
                  9 Alouise House, 56 Terry Road,<br />
                  Coventry, UK – CV1 2BA
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-vani-blue-400 flex-shrink-0" />
                <a href="tel:+447384055753" className="text-vani-blue-200 text-sm hover:text-white transition-colors">
                  +44 7384 055753
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-vani-blue-400 flex-shrink-0" />
                <a href="mailto:info@vanitechnologies.co.uk" className="text-vani-blue-200 text-sm hover:text-white transition-colors">
                  info@vanitechnologies.co.uk
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="w-5 h-5 text-vani-blue-400 flex-shrink-0" />
                <span className="text-vani-blue-200 text-sm">
                  Mon–Fri: 9 AM – 5 PM<br />
                  Sat–Sun: 10 AM – 4 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-vani-blue-300 text-sm">
              © {currentYear} Vani Technologies Limited. All rights reserved.
            </p>
            {/* <div className="flex gap-6">
              <a href="#" className="text-vani-blue-300 text-sm hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-vani-blue-300 text-sm hover:text-white transition-colors">
                Terms of Service
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
