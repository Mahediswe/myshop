import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuHover = (menu) => {
    setActiveMenu(menu);
  };

  const handleMenuLeave = () => {
    setActiveMenu(null);
  };

  return (
    <nav className="bg-gradient-to-r from-orange-300 to-orange-700 shadow-xl relative z-50 font-sans">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'transform rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* Menu */}
        <div className={`absolute md:static top-full left-0 max-w-7xl mx-auto md:w-auto bg-indigo-700 md:bg-transparent shadow-lg md:shadow-none ${isMenuOpen ? 'block' : 'hidden'} md:block transition-all duration-300`}>
          <ul className="flex flex-col md:flex-row md:space-x-8 font-medium py-4 md:py-0 justify-items-center">
            {/* Fish */}
            <li 
              className="relative group"
              onMouseEnter={() => handleMenuHover('fish')}
              onMouseLeave={handleMenuLeave}
              onClick={() => setIsMenuOpen(false)}
            >
              <Link 
                to="/fish" 
                className="block px-6 md:px-0 py-3 md:py-4 text-white hover:text-blue-200 transition-colors duration-200 font-semibold text-lg"
              >
                মাছ
              </Link>
              <ul className={`md:absolute left-0 bg-white shadow-2xl rounded-lg mt-0 md:mt-1 w-full md:w-48 z-10 transition-all duration-300 transform origin-top ${activeMenu === 'fish' ? 'md:scale-100 opacity-100' : 'md:scale-95 opacity-0 md:opacity-0'} ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
                <li>
                  <Link
                    to="/fish/hilsha"
                    className="block px-6 py-3 hover:bg-blue-50 text-gray-800 transition-colors duration-200 border-b border-gray-100 last:border-b-0"
                  >
                    সামুদ্রিক মাছ
                  </Link>
                </li>
                <li>
                  <Link
                    to="/fish/rui"
                    className="block px-6 py-3 hover:bg-blue-50 text-gray-800 transition-colors duration-200 border-b border-gray-100 last:border-b-0"
                  >
                    মাছ
                  </Link>
                </li>
              </ul>
            </li>

            {/* Mangsho */}
            <li 
              className="relative group"
              onMouseEnter={() => handleMenuHover('mangsho')}
              onMouseLeave={handleMenuLeave}
              onClick={() => setIsMenuOpen(false)}
            >
              <Link 
                to="/mangsho" 
                className="block px-6 md:px-0 py-3 md:py-4 text-white hover:text-blue-200 transition-colors duration-200 font-semibold text-lg"
              >
                মাংস
              </Link>
              <ul className={`md:absolute left-0 bg-white shadow-2xl rounded-lg mt-0 md:mt-1 w-full md:w-48 z-10 transition-all duration-300 transform origin-top ${activeMenu === 'mangsho' ? 'md:scale-100 opacity-100' : 'md:scale-95 opacity-0 md:opacity-0'} ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
                <li>
                  <Link
                    to="/mangsho/goru"
                    className="block px-6 py-3 hover:bg-blue-50 text-gray-800 transition-colors duration-200 border-b border-gray-100"
                  >
                    গরু
                  </Link>
                </li>
                <li>
                  <Link
                    to="/mangsho/chagol"
                    className="block px-6 py-3 hover:bg-blue-50 text-gray-800 transition-colors duration-200 border-b border-gray-100"
                  >
                    খাসির মাংস
                  </Link>
                </li>
                <li>
                  <Link
                    to="/mangsho/murgi"
                    className="block px-6 py-3 hover:bg-blue-50 text-gray-800 transition-colors duration-200"
                  >
                    মুরগি
                  </Link>
                </li>
              </ul>
            </li>

            {/* Medicine */}
            <li onClick={() => setIsMenuOpen(false)}>
              <Link 
                to="/medicine" 
                className="block px-6 md:px-0 py-3 md:py-4 text-white hover:text-blue-200 transition-colors duration-200 font-semibold text-lg"
              >
                 ওষুধ
              </Link>
            </li>

            {/* Electronics */}
            <li 
              className="relative group"
              onMouseEnter={() => handleMenuHover('electronics')}
              onMouseLeave={handleMenuLeave}
              onClick={() => setIsMenuOpen(false)}
            >
              <Link 
                to="/electronics" 
                className="block px-6 md:px-0 py-3 md:py-4 text-white hover:text-blue-200 transition-colors duration-200 font-semibold text-lg"
              >
                ইলেকট্রনিক্স
              </Link>
              <ul className={`md:absolute left-0 bg-white shadow-2xl rounded-lg mt-0 md:mt-1 w-full md:w-52 z-10 transition-all duration-300 transform origin-top ${activeMenu === 'electronics' ? 'md:scale-100 opacity-100' : 'md:scale-95 opacity-0 md:opacity-0'} ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
                <li>
                  <Link
                    to="/electronics/blender"
                    className="block px-6 py-3 hover:bg-blue-50 text-gray-800 transition-colors duration-200 border-b border-gray-100"
                  >
                    ব্লেন্ডার
                  </Link>
                </li>
                <li>
                  <Link
                    to="/electronics/rice-cooker"
                    className="block px-6 py-3 hover:bg-blue-50 text-gray-800 transition-colors duration-200 border-b border-gray-100"
                  >
                     রাইস কুকার
                  </Link>
                </li>
                <li>
                  <Link
                    to="/electronics/fridge"
                    className="block px-6 py-3 hover:bg-blue-50 text-gray-800 transition-colors duration-200 border-b border-gray-100"
                  >
                    ফ্রিজ
                  </Link>
                </li>
                <li>
                  <Link
                    to="/electronics/glider"
                    className="block px-6 py-3 hover:bg-blue-50 text-gray-800 transition-colors duration-200"
                  >
                    গ্লাইডার
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;