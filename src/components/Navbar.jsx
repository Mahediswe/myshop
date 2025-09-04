import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuHover = (menu) => {
    if (window.innerWidth >= 768) { // Only work on desktop
      setActiveMenu(menu);
    }
  };

  const handleMenuLeave = () => {
    if (window.innerWidth >= 768) {
      setActiveMenu(null);
    }
  };

  const handleSubmenuClick = (menu) => {
    // On mobile, toggle submenu on click
    if (window.innerWidth < 768) {
      setActiveMenu(activeMenu === menu ? null : menu);
    }
  };

  // Close mobile menu when a link is clicked
  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setActiveMenu(null);
  };

  return (
    <nav className="max-w-7xl mx-auto sticky top-0 left-0 w-full bg-orange-400 shadow-xl z-40 font-sans">
      <div className="">
        <div className="px-4 py-3 flex justify-between items-center">
          
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
          <div className={`absolute md:static top-full left-0 w-full md:w-auto bg-orange-600 md:bg-transparent shadow-lg md:shadow-none ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
            <ul className="flex flex-col md:flex-row md:justify-center md:space-x-8 font-medium py-4 md:py-0">
              
              {/* Fish */}
              <li
                className="relative group"
                onMouseEnter={() => handleMenuHover("fish")}
                onMouseLeave={handleMenuLeave}
              >
                <button
                  onClick={() => handleSubmenuClick("fish")}
                  className="w-full text-left px-6 md:px-0 py-3 md:py-4 text-white hover:text-blue-200 font-semibold text-lg md:w-auto flex items-center justify-between md:justify-center"
                >
                  মাছ
                  <svg 
                    className={`ml-2 h-4 w-4 transform transition-transform md:hidden ${activeMenu === "fish" ? "rotate-180" : ""}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <ul
                  className={`md:absolute left-0 bg-white shadow-2xl rounded-lg mt-0 md:mt-1 w-full md:w-48 z-10 transition-all duration-300 
                    ${activeMenu === "fish" ? "block" : "hidden"} md:group-hover:block`}
                >
                  <li>
                    <Link
                      to="/products?category=fish&subcategory=sea"
                      className="block px-6 py-3 hover:bg-orange-50 text-gray-800 border-b border-gray-100"
                      onClick={handleLinkClick}
                    >
                      সামুদ্রিক মাছ
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/products?category=fish&subcategory=river"
                      className="block px-6 py-3 hover:bg-orange-50 text-gray-800"
                      onClick={handleLinkClick}
                    >
                      নদীর মাছ
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Mangsho */}
              <li
                className="relative group"
                onMouseEnter={() => handleMenuHover("mangsho")}
                onMouseLeave={handleMenuLeave}
              >
                <button
                  onClick={() => handleSubmenuClick("mangsho")}
                  className="w-full text-left px-6 md:px-0 py-3 md:py-4 text-white hover:text-blue-200 font-semibold text-lg md:w-auto flex items-center justify-between md:justify-center"
                >
                  মাংস
                  <svg 
                    className={`ml-2 h-4 w-4 transform transition-transform md:hidden ${activeMenu === "mangsho" ? "rotate-180" : ""}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <ul
                  className={`md:absolute left-0 bg-white shadow-2xl rounded-lg mt-0 md:mt-1 w-full md:w-48 z-10 transition-all duration-300 
                    ${activeMenu === "mangsho" ? "block" : "hidden"} md:group-hover:block`}
                >
                  <li>
                    <Link
                      to="/products?category=mangsho&subcategory=goru"
                      className="block px-6 py-3 hover:bg-orange-50 text-gray-800 border-b border-gray-100"
                      onClick={handleLinkClick}
                    >
                      গরু
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/products?category=mangsho&subcategory=chagol"
                      className="block px-6 py-3 hover:bg-orange-50 text-gray-800 border-b border-gray-100"
                      onClick={handleLinkClick}
                    >
                      খাসি
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/products?category=mangsho&subcategory=murgi"
                      className="block px-6 py-3 hover:bg-orange-50 text-gray-800"
                      onClick={handleLinkClick}
                    >
                      মুরগি
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Medicine */}
              <li>
                <Link
                  to="/medicine"
                  onClick={handleLinkClick}
                  className="block px-6 md:px-0 py-3 md:py-4 text-white hover:text-blue-200 font-semibold text-lg text-center md:text-left"
                >
                  ওষুধ
                </Link>
              </li>

              {/* Electronics */}
              <li
                className="relative group"
                onMouseEnter={() => handleMenuHover("electronics")}
                onMouseLeave={handleMenuLeave}
              >
                <button
                  onClick={() => handleSubmenuClick("electronics")}
                  className="w-full text-left px-6 md:px-0 py-3 md:py-4 text-white hover:text-blue-200 font-semibold text-lg md:w-auto flex items-center justify-between md:justify-center"
                >
                  ইলেকট্রনিক্স
                  <svg 
                    className={`ml-2 h-4 w-4 transform transition-transform md:hidden ${activeMenu === "electronics" ? "rotate-180" : ""}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <ul
                  className={`md:absolute left-0 bg-white shadow-2xl rounded-lg mt-0 md:mt-1 w-full md:w-52 z-10 transition-all duration-300 
                    ${activeMenu === "electronics" ? "block" : "hidden"} md:group-hover:block`}
                >
                  <li>
                    <Link
                      to="/products?category=electronics&subcategory=blender"
                      className="block px-6 py-3 hover:bg-orange-50 text-gray-800 border-b border-gray-100"
                      onClick={handleLinkClick}
                    >
                      ব্লেন্ডার
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/products?category=electronics&subcategory=rice-cooker"
                      className="block px-6 py-3 hover:bg-orange-50 text-gray-800 border-b border-gray-100"
                      onClick={handleLinkClick}
                    >
                      রাইস কুকার
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/products?category=electronics&subcategory=fridge"
                      className="block px-6 py-3 hover:bg-orange-50 text-gray-800 border-b border-gray-100"
                      onClick={handleLinkClick}
                    >
                      ফ্রিজ
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/products?category=electronics&subcategory=glider"
                      className="block px-6 py-3 hover:bg-orange-50 text-gray-800"
                      onClick={handleLinkClick}
                    >
                      গ্লাইডার
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;




// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeMenu, setActiveMenu] = useState(null);

//   const handleMenuHover = (menu) => {
//     if (window.innerWidth >= 768) { // Only work on desktop
//       setActiveMenu(menu);
//     }
//   };

//   const handleMenuLeave = () => {
//     if (window.innerWidth >= 768) {
//       setActiveMenu(null);
//     }
//   };

//   const handleSubmenuClick = (menu) => {
//     // On mobile, toggle submenu on click
//     if (window.innerWidth < 768) {
//       setActiveMenu(activeMenu === menu ? null : menu);
//     }
//   };

//   return (
//     <nav className="flex justify-between  max-w-7xl mx-auto w-full bg-orange-400 shadow-xl z-50 font-sans">
//       <div className="px-4 py-3 flex justify-between items-center">
        
//         {/* Mobile menu button */}
//         <button
//           className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           aria-label="Toggle menu"
//         >
//           <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'transform rotate-45 translate-y-2' : ''}`}></span>
//           <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
//           <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></span>
//         </button>

//         {/* Menu */}
//         <div className={`absolute md:static top-full left-0 w-full md:w-auto bg-orange-700 md:bg-transparent shadow-lg md:shadow-none ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
//           <ul className="flex flex-col md:flex-row md:justify-center md:space-x-8 font-medium py-4 md:py-0">
            
//             {/* Fish */}
//             <li
//               className="relative group"
//               onMouseEnter={() => handleMenuHover("fish")}
//               onMouseLeave={handleMenuLeave}
//             >
//               <button
//                 onClick={() => handleSubmenuClick("fish")}
//                 className="w-full text-left px-6 md:px-0 py-3 md:py-4 text-white hover:text-blue-200 font-semibold text-lg md:w-auto flex items-center justify-between md:justify-center"
//               >
//                 মাছ
//                 <svg 
//                   className={`ml-2 h-4 w-4 transform transition-transform md:hidden ${activeMenu === "fish" ? "rotate-180" : ""}`} 
//                   fill="none" 
//                   viewBox="0 0 24 24" 
//                   stroke="currentColor"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                 </svg>
//               </button>
//               <ul
//                 className={`md:absolute left-0 bg-white shadow-2xl rounded-lg mt-0 md:mt-1 w-full md:w-48 z-10 transition-all duration-300 
//                   ${activeMenu === "fish" ? "block" : "hidden"} md:group-hover:block`}
//               >
//                 <li>
//                   <Link
//                     to="/products?category=fish&subcategory=sea"
//                     className="block px-6 py-3 hover:bg-orange-50 text-gray-800 border-b border-gray-100"
//                     onClick={() => setIsMenuOpen(false)}
//                   >
//                     সামুদ্রিক মাছ
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/products?category=fish&subcategory=river"
//                     className="block px-6 py-3 hover:bg-orange-50 text-gray-800"
//                     onClick={() => setIsMenuOpen(false)}
//                   >
//                     নদীর মাছ
//                   </Link>
//                 </li>
//               </ul>
//             </li>

//             {/* Mangsho */}
//             <li
//               className="relative group"
//               onMouseEnter={() => handleMenuHover("mangsho")}
//               onMouseLeave={handleMenuLeave}
//             >
//               <button
//                 onClick={() => handleSubmenuClick("mangsho")}
//                 className="w-full text-left px-6 md:px-0 py-3 md:py-4 text-white hover:text-blue-200 font-semibold text-lg md:w-auto flex items-center justify-between md:justify-center"
//               >
//                 মাংস
//                 <svg 
//                   className={`ml-2 h-4 w-4 transform transition-transform md:hidden ${activeMenu === "mangsho" ? "rotate-180" : ""}`} 
//                   fill="none" 
//                   viewBox="0 0 24 24" 
//                   stroke="currentColor"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                 </svg>
//               </button>
//               <ul
//                 className={`md:absolute left-0 bg-white shadow-2xl rounded-lg mt-0 md:mt-1 w-full md:w-48 z-10 transition-all duration-300 
//                   ${activeMenu === "mangsho" ? "block" : "hidden"} md:group-hover:block`}
//               >
//                 <li>
//                   <Link
//                     to="/products?category=mangsho&subcategory=goru"
//                     className="block px-6 py-3 hover:bg-orange-50 text-gray-800 border-b border-gray-100"
//                     onClick={() => setIsMenuOpen(false)}
//                   >
//                     গরু
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/products?category=mangsho&subcategory=chagol"
//                     className="block px-6 py-3 hover:bg-orange-50 text-gray-800 border-b border-gray-100"
//                     onClick={() => setIsMenuOpen(false)}
//                   >
//                     খাসি
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/products?category=mangsho&subcategory=murgi"
//                     className="block px-6 py-3 hover:bg-orange-50 text-gray-800"
//                     onClick={() => setIsMenuOpen(false)}
//                   >
//                     মুরগি
//                   </Link>
//                 </li>
//               </ul>
//             </li>

//             {/* Medicine */}
//             <li>
//               <Link
//                 to="/medicine"
//                 onClick={() => setIsMenuOpen(false)}
//                 className="block px-6 md:px-0 py-3 md:py-4 text-white hover:text-blue-200 font-semibold text-lg text-center md:text-left"
//               >
//                 ওষুধ
//               </Link>
//             </li>

//             {/* Electronics */}
//             <li
//               className="relative group"
//               onMouseEnter={() => handleMenuHover("electronics")}
//               onMouseLeave={handleMenuLeave}
//             >
//               <button
//                 onClick={() => handleSubmenuClick("electronics")}
//                 className="w-full text-left px-6 md:px-0 py-3 md:py-4 text-white hover:text-blue-200 font-semibold text-lg md:w-auto flex items-center justify-between md:justify-center"
//               >
//                 ইলেকট্রনিক্স
//                 <svg 
//                   className={`ml-2 h-4 w-4 transform transition-transform md:hidden ${activeMenu === "electronics" ? "rotate-180" : ""}`} 
//                   fill="none" 
//                   viewBox="0 0 24 24" 
//                   stroke="currentColor"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                 </svg>
//               </button>
//               <ul
//                 className={`md:absolute left-0 bg-white shadow-2xl rounded-lg mt-0 md:mt-1 w-full md:w-52 z-10 transition-all duration-300 
//                   ${activeMenu === "electronics" ? "block" : "hidden"} md:group-hover:block`}
//               >
//                 <li>
//                   <Link
//                     to="/products?category=electronics&subcategory=blender"
//                     className="block px-6 py-3 hover:bg-orange-50 text-gray-800 border-b border-gray-100"
//                     onClick={() => setIsMenuOpen(false)}
//                   >
//                     ব্লেন্ডার
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/products?category=electronics&subcategory=rice-cooker"
//                     className="block px-6 py-3 hover:bg-orange-50 text-gray-800 border-b border-gray-100"
//                     onClick={() => setIsMenuOpen(false)}
//                   >
//                     রাইস কুকার
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/products?category=electronics&subcategory=fridge"
//                     className="block px-6 py-3 hover:bg-orange-50 text-gray-800 border-b border-gray-100"
//                     onClick={() => setIsMenuOpen(false)}
//                   >
//                     ফ্রিজ
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/products?category=electronics&subcategory=glider"
//                     className="block px-6 py-3 hover:bg-orange-50 text-gray-800"
//                     onClick={() => setIsMenuOpen(false)}
//                   >
//                     গ্লাইডার
//                   </Link>
//                 </li>
//               </ul>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;