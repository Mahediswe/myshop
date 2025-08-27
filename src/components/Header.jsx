import React from "react";
import { Link } from "react-router-dom";
import { Search, User, ShoppingBag } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b border-orange-500">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Left: Search */}
        <div className="flex items-center space-x-2">
          <Search className="text-orange-500 w-5 h-5" />
          <input
            type="text"
            placeholder="Search products..."
            className="border rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Middle: Logo */}
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/logo192.png" // তোমার logo image path এখানে দাও
              alt="MyShop Logo"
              className="w-8 h-8"
            />
            <span className="text-xl font-bold text-orange-600">MyShop</span>
          </Link>
        </div>

        {/* Right: Profile & Cart */}
        <div className="flex items-center space-x-6">
          <Link to="/profile" className="flex flex-col items-center group">
            <User className="text-orange-500 w-5 h-5" />
            <span className="text-xs text-orange-500 opacity-0 group-hover:opacity-100 transition">
              Account
            </span>
          </Link>

          <Link to="/cart" className="flex flex-col items-center group">
            <ShoppingBag className="text-orange-500 w-5 h-5" />
            <span className="text-xs text-orange-500 opacity-0 group-hover:opacity-100 transition">
              Cart
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
