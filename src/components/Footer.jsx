import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h2 className="text-xl sm:text-2xl font-bold text-orange-600">MYSHOP</h2>
          <p className="mt-2 sm:mt-3 text-md sm:text-md text-gray-700">
            MyShop is your trusted destination for quality and affordable
            products. We provide fresh groceries, electronics, household items
            and more with a focus on customer satisfaction and convenience.
          </p>
        </div>

        {/* Company Links */}
        <div className="text-center md:text-left">
          <h3 className="text-base sm:text-lg font-semibold text-orange-600 mb-2 sm:mb-3">COMPANY</h3>
          <ul className="space-y-1 sm:space-y-2 text-gray-700">
            <li>
              <Link to="/about" className="hover:text-orange-500 text-xs sm:text-sm">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/return-policy" className="hover:text-orange-500 text-xs sm:text-sm">
                রিটার্ন পলিসি
              </Link>
            </li>
            <li>
              <Link to="/refund-policy" className="hover:text-orange-500 text-xs sm:text-sm">
                রিফান্ড পলিসি
              </Link>
            </li>
          </ul>
        </div>

        {/* Quick Help Links */}
        <div className="text-center md:text-left">
          <h3 className="text-base sm:text-lg font-semibold text-orange-600 mb-2 sm:mb-3">QUICK HELP</h3>
          <ul className="space-y-1 sm:space-y-2 text-gray-700">
            <li>
              <Link to="/customer-service" className="hover:text-orange-500 text-xs sm:text-sm">
                গ্রাহক সেবা
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-orange-500 text-xs sm:text-sm">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto bg-orange-500 text-white text-center py-2 sm:py-3 text-xs sm:text-sm">
        © MyShop 2024
      </div>
    </footer>
  );
};

export default Footer;