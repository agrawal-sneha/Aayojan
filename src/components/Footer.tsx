import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from '../utils/Link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-400">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-red-600 mb-4">Aayojana</h2>
            <p className="mb-6">
              Discover professional events, conferences, and networking opportunities that advance your career and business goals.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/events" className="hover:text-white transition-colors duration-200">All Events</Link>
              </li>
              <li>
                <Link to="/categories" className="hover:text-white transition-colors duration-200">Categories</Link>
              </li>
              <li>
                <Link to="/colleges" className="hover:text-white transition-colors duration-200">Colleges</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors duration-200">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors duration-200">Contact</Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white transition-colors duration-200">FAQ</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">For Organizers</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/list-event" className="hover:text-white transition-colors duration-200">List Your Event</Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-white transition-colors duration-200">Pricing</Link>
              </li>
              <li>
                <Link to="/analytics" className="hover:text-white transition-colors duration-200">Analytics</Link>
              </li>
              <li>
                <Link to="/success-stories" className="hover:text-white transition-colors duration-200">Success Stories</Link>
              </li>
              <li>
                <Link to="/resources" className="hover:text-white transition-colors duration-200">Resources</Link>
              </li>
              <li>
                <Link to="/api" className="hover:text-white transition-colors duration-200">API Documentation</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5" />
                <span>123 Event Street, Bangalore, India 560001</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span>hello@aayojan.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="mb-4 md:mb-0">&copy; 2025 Aayojana. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link to="/terms" className="hover:text-white transition-colors duration-200">Terms of Service</Link>
              <Link to="/privacy" className="hover:text-white transition-colors duration-200">Privacy Policy</Link>
              <Link to="/cookies" className="hover:text-white transition-colors duration-200">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;