import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, User, ShoppingBag, X } from "lucide-react";
import Cart from "../pages/Cart"; 
import logo from "../assetes/logo.jpg";

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="bg-gray-100 max-w-7xl mx-auto ">
      <div className="px-4 sm:px-6 py-3 flex items-center justify-between">
        
        {/* Left: Search */}
        <div className="flex items-center space-x-2">
          {/* Desktop Search */}
          <div className="hidden md:flex items-center space-x-2">
            <Search className="text-orange-500 w-5 h-5" />
            <input
              type="text"
              placeholder="Search products..."
              className="border rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Mobile Search Icon */}
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="md:hidden"
          >
            <Search className="text-orange-500 w-6 h-6" />
          </button>
        </div>

        {/* Middle: Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img
              src={logo}
              alt="MyShop Logo"
              className="h-14 w-auto sm:h-16 md:h-20"
            />
          </Link>
        </div>

        {/* Right: Profile & Cart */}
        <div className="flex items-center space-x-6">
          <Link to="/profile" className="flex flex-col items-center group">
            <User className="text-orange-500 w-8 h-8 md:w-10 md:h-10" />
            <span className="hidden md:block text-xs text-orange-500 opacity-0 group-hover:opacity-100 transition">
              Account
            </span>
          </Link>

          <button
            onClick={() => setIsCartOpen(true)}
            className="flex flex-col items-center group relative"
          >
            <ShoppingBag className="text-orange-500 w-8 h-8 md:w-10 md:h-10" />
            <span className="hidden md:block text-xs text-orange-500 opacity-0 group-hover:opacity-100 transition">
              Cart
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Search Bar */}
      {isSearchOpen && (
        <div className="md:hidden px-4 pb-3 flex items-center space-x-2 animate-slideDown">
          <input
            type="text"
            placeholder="Search products..."
            className="border flex-1 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <button
            onClick={() => setIsSearchOpen(false)}
            className="text-orange-500"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      )}

      {/* Cart Sidebar */}
      <Cart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
    </header>
  );
};

export default Header;
