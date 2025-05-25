import React, { useState, useEffect } from 'react';
import { Search, Bell, User, Menu, X } from 'lucide-react';
import { Link } from '../utils/Link';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-black bg-opacity-90 shadow-lg' : 'bg-gradient-to-b from-black/80 to-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-red-600">Aayojan</span>
            </Link>
            <div className="hidden md:block ml-10">
              <div className="flex items-center space-x-4">
                <Link to="/events" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Explore
                </Link>
                <Link to="/categories" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Categories
                </Link>
                <Link to="/colleges" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Colleges
                </Link>
                <Link to="/refer" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Refer & Earn
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  className="bg-gray-800 text-white block w-full pl-10 pr-3 py-2 rounded-md text-sm border border-transparent focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
                  type="text"
                  placeholder="Search events..."
                />
              </div>
              <button className="text-gray-300 hover:text-white p-1">
                <Bell className="h-6 w-6" />
              </button>
              <button className="text-gray-300 hover:text-white p-1">
                <User className="h-6 w-6" />
              </button>
            </div>
          </div>
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white p-1"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black bg-opacity-95">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/events" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Explore
            </Link>
            <Link to="/categories" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Categories
            </Link>
            <Link to="/colleges" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Colleges
            </Link>
            <Link to="/refer" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Refer & Earn
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700">
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center">
                  <User className="h-6 w-6 text-gray-300" />
                </div>
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-white">User</div>
                <div className="text-sm font-medium text-gray-400">user@example.com</div>
              </div>
              <button className="ml-auto text-gray-400 hover:text-white">
                <Bell className="h-6 w-6" />
              </button>
            </div>
          </div>
          <div className="px-4 py-3">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                className="bg-gray-800 text-white block w-full pl-10 pr-3 py-2 rounded-md text-sm border border-transparent focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
                type="text"
                placeholder="Search events..."
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;