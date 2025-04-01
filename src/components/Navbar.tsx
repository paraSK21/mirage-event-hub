
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { getCartItems } from '@/lib/data';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { toast } = useToast();
  const cartItems = getCartItems();
  const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleDownloadBrochure = () => {
    toast({
      title: "Brochure Download",
      description: "The event brochure will be available for download soon.",
    });
  };

  return (
    <nav className="bg-mirage-purple sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className="font-ahsing text-white text-3xl">MIRAGE</span>
              <span className="ml-2 text-mirage-yellow font-sunborn text-sm">2023</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link
                to="/"
                className={`${isActive('/') ? 'bg-mirage-orange/80 text-white' : 'text-white hover:bg-mirage-purple/90 hover:text-mirage-yellow'} px-3 py-2 rounded-md text-sm font-medium font-sunborn transition duration-300`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`${isActive('/about') ? 'bg-mirage-orange/80 text-white' : 'text-white hover:bg-mirage-purple/90 hover:text-mirage-yellow'} px-3 py-2 rounded-md text-sm font-medium font-sunborn transition duration-300`}
              >
                About
              </Link>
              <Link
                to="/events"
                className={`${isActive('/events') ? 'bg-mirage-orange/80 text-white' : 'text-white hover:bg-mirage-purple/90 hover:text-mirage-yellow'} px-3 py-2 rounded-md text-sm font-medium font-sunborn transition duration-300`}
              >
                Events
              </Link>
              <Link
                to="/schedule"
                className={`${isActive('/schedule') ? 'bg-mirage-orange/80 text-white' : 'text-white hover:bg-mirage-purple/90 hover:text-mirage-yellow'} px-3 py-2 rounded-md text-sm font-medium font-sunborn transition duration-300`}
              >
                Schedule
              </Link>
              <button
                onClick={handleDownloadBrochure}
                className="text-white hover:bg-mirage-purple/90 hover:text-mirage-yellow px-3 py-2 rounded-md text-sm font-medium font-sunborn transition duration-300"
              >
                Download Brochure
              </button>
            </div>
          </div>
          
          <div className="flex items-center">
            <Link to="/cart" className="relative p-2 text-white hover:text-mirage-yellow mr-2">
              <ShoppingCart className="h-6 w-6" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-mirage-orange text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>
            
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-mirage-yellow focus:outline-none"
              >
                {isMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-mirage-purple/95 backdrop-blur-sm">
            <Link
              to="/"
              className={`${isActive('/') ? 'bg-mirage-orange/80 text-white' : 'text-white hover:bg-mirage-purple/90 hover:text-mirage-yellow'} block px-3 py-2 rounded-md text-base font-medium font-sunborn`}
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`${isActive('/about') ? 'bg-mirage-orange/80 text-white' : 'text-white hover:bg-mirage-purple/90 hover:text-mirage-yellow'} block px-3 py-2 rounded-md text-base font-medium font-sunborn`}
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/events"
              className={`${isActive('/events') ? 'bg-mirage-orange/80 text-white' : 'text-white hover:bg-mirage-purple/90 hover:text-mirage-yellow'} block px-3 py-2 rounded-md text-base font-medium font-sunborn`}
              onClick={toggleMenu}
            >
              Events
            </Link>
            <Link
              to="/schedule"
              className={`${isActive('/schedule') ? 'bg-mirage-orange/80 text-white' : 'text-white hover:bg-mirage-purple/90 hover:text-mirage-yellow'} block px-3 py-2 rounded-md text-base font-medium font-sunborn`}
              onClick={toggleMenu}
            >
              Schedule
            </Link>
            <button
              onClick={() => {
                handleDownloadBrochure();
                toggleMenu();
              }}
              className="text-white hover:bg-mirage-purple/90 hover:text-mirage-yellow block px-3 py-2 rounded-md text-base font-medium font-sunborn w-full text-left"
            >
              Download Brochure
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
