// import React, { useState, useEffect } from "react";
// import { useSearchParams } from "react-router-dom";
// import products from "../data/products.js";
// import ProductCard from "../components/ProductCard.jsx";

// const Products = () => {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const categoryParam = searchParams.get("category") || "";
//   const subCategoryParam = searchParams.get("subcategory") || "";

//   const [filteredProducts, setFilteredProducts] = useState([]);

//   useEffect(() => {
//     let filtered = products;

//     if (categoryParam) {
//       filtered = filtered.filter(
//         (p) => p.category.toLowerCase() === categoryParam.toLowerCase()
//       );
//     }

//     if (subCategoryParam) {
//       filtered = filtered.filter(
//         (p) =>
//           p.subcategory &&
//           p.subcategory.toLowerCase() === subCategoryParam.toLowerCase()
//       );
//     }

//     setFilteredProducts(filtered);
//   }, [categoryParam, subCategoryParam]);

//   const handleCategoryClick = (cat, subcat = "") => {
//     if (subcat) {
//       setSearchParams({ category: cat, subcategory: subcat });
//     } else {
//       setSearchParams({ category: cat });
//     }
//   };

//   return (
//     <div className="flex max-w-7xl mx-auto px-6 py-10 gap-6">
//       {/* Sidebar */}
//       <aside className="w-64 bg-white border rounded-lg p-4">
//         <h3 className="font-bold mb-4">Categories</h3>
//         <ul className="space-y-2">
//           <li>
//             <button
//               onClick={() => handleCategoryClick("fish")}
//               className="hover:text-orange-600"
//             >
//               মাছ
//             </button>
//             <ul className="ml-4 text-sm text-gray-600">
//               <li>
//                 <button
//                   onClick={() => handleCategoryClick("fish", "sea")}
//                   className="hover:text-orange-600"
//                 >
//                   সামুদ্রিক মাছ
//                 </button>
//               </li>
//               <li>
//                 <button
//                   onClick={() => handleCategoryClick("fish", "river")}
//                   className="hover:text-orange-600"
//                 >
//                   নদীর মাছ
//                 </button>
//               </li>
//             </ul>
//           </li>

//           <li>
//             <button
//               onClick={() => handleCategoryClick("mangsho")}
//               className="hover:text-orange-600"
//             >
//               মাংস
//             </button>
//             <ul className="ml-4 text-sm text-gray-600">
//               <li>
//                 <button
//                   onClick={() => handleCategoryClick("mangsho", "goru")}
//                   className="hover:text-orange-600"
//                 >
//                   গরু
//                 </button>
//               </li>
//                <li>
//                 <button
//                   onClick={() => handleCategoryClick("mangsho", "chagol")}
//                   className="hover:text-orange-600"
//                 >
//                   খাসির মাংস
//                 </button>
//               </li>
//               <li>
//                 <button
//                   onClick={() => handleCategoryClick("mangsho", "murgi")}
//                   className="hover:text-orange-600"
//                 >
//                   মুরগি
//                 </button>
//               </li>
//             </ul>
//           </li>

//           <li>
//             <button
//               onClick={() => handleCategoryClick("medicine")}
//               className="hover:text-orange-600"
//             >
//               ওষুধ
//             </button>
//           </li>
//           {/* <li>
//             <button
//               onClick={() => handleCategoryClick("electronics")}
//               className="hover:text-orange-600"
//             >
//               ইলেকট্রনিক্স
//             </button>
//             <ul className="ml-4 text-sm text-gray-600">
//               <li>
//                 <button
//                   onClick={() => handleCategoryClick("electronics", "blender")}
//                   className="hover:text-orange-600"
//                 >
//                    <li>
//                 <button
//                   onClick={() => handleCategoryClick("electronics", "blender")}
//                   className="hover:text-orange-600"
//                 >
//                    ব্লেন্ডার
//                 </button>
//               </li>
//                 </button>
//               </li>
//               <li>
//                 <button
//                   onClick={() => handleCategoryClick("electronics", "glider")}
//                   className="hover:text-orange-600"
//                 >
//                    গ্লাইডার
//                 </button>
//               </li>
//               <li>
//                 <button
//                   onClick={() => handleCategoryClick("electronics", "rice-cooker")}
//                   className="hover:text-orange-600"
//                 >
//                   রাইস কুকার
//                 </button>
//               </li>
//                <li>
//                 <button
//                   onClick={() => handleCategoryClick("electronics", "fridge")}
//                   className="hover:text-orange-600"
//                 >
//                    ফ্রিজ
//                 </button>
//               </li>
//             </ul>
//           </li> */}
//           <li>
//   <button
//     onClick={() => handleCategoryClick("electronics")}
//     className="hover:text-orange-600"
//   >
//     ইলেকট্রনিক্স
//   </button>
//   <ul className="ml-4 text-sm text-gray-600">
//     <li>
//       <button
//         onClick={() => handleCategoryClick("electronics", "blender")}
//         className="hover:text-orange-600"
//       >
//         ব্লেন্ডার
//       </button>
//     </li>
//     <li>
//       <button
//         onClick={() => handleCategoryClick("electronics", "glider")}
//         className="hover:text-orange-600"
//       >
//         গ্লাইডার
//       </button>
//     </li>
//     <li>
//       <button
//         onClick={() => handleCategoryClick("electronics", "rice-cooker")}
//         className="hover:text-orange-600"
//       >
//         রাইস কুকার
//       </button>
//     </li>
//     <li>
//       <button
//         onClick={() => handleCategoryClick("electronics", "fridge")}
//         className="hover:text-orange-600"
//       >
//         ফ্রিজ
//       </button>
//     </li>
//   </ul>
// </li>

//         </ul>
//       </aside>

//       {/* Products grid */}
//       <main className="flex-1">
//         <h2 className="text-2xl font-bold mb-6">
//           {categoryParam
//             ? `Showing products for "${categoryParam}"`
//             : "All Products"}
//         </h2>

//         {filteredProducts.length === 0 ? (
//           <p className="text-gray-500">No products found.</p>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {filteredProducts.map((product) => (
//               <ProductCard key={product.id} product={product} />
//             ))}
//           </div>
//         )}
//       </main>
//     </div>
//   );
// };

// export default Products;



import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import products from "../data/products.js";
import ProductCard from "../components/ProductCard.jsx";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category") || "";
  const subCategoryParam = searchParams.get("subcategory") || "";
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    let filtered = products;

    if (categoryParam) {
      filtered = filtered.filter(
        (p) => p.category.toLowerCase() === categoryParam.toLowerCase()
      );
    }

    if (subCategoryParam) {
      filtered = filtered.filter(
        (p) =>
          p.subcategory &&
          p.subcategory.toLowerCase() === subCategoryParam.toLowerCase()
      );
    }

    setFilteredProducts(filtered);
  }, [categoryParam, subCategoryParam]);

  const handleCategoryClick = (cat, subcat = "") => {
    if (subcat) {
      setSearchParams({ category: cat, subcategory: subcat });
    } else {
      setSearchParams({ category: cat });
    }
    // Close sidebar on mobile after selection
    if (window.innerWidth < 768) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row max-w-7xl mx-auto px-4 sm:px-6 py-6 gap-6">
      {/* Mobile sidebar toggle */}
      <div className="md:hidden flex justify-between items-center bg-white border rounded-lg p-4">
        <h3 className="font-bold">Categories</h3>
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
        >
          {isSidebarOpen ? 'Close' : 'Browse Categories'}
        </button>
      </div>

      {/* Sidebar */}
      <aside className={`${isSidebarOpen ? 'block' : 'hidden'} md:block w-full md:w-64 bg-white border rounded-lg p-4`}>
        <h3 className="font-bold mb-4 hidden md:block">Categories</h3>
        <ul className="space-y-2">
          <li>
            <button
              onClick={() => handleCategoryClick("fish")}
              className="hover:text-orange-600 text-left w-full"
            >
              মাছ
            </button>
            <ul className="ml-4 text-sm text-gray-600">
              <li>
                <button
                  onClick={() => handleCategoryClick("fish", "sea")}
                  className="hover:text-orange-600 text-left w-full"
                >
                  সামুদ্রিক মাছ
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryClick("fish", "river")}
                  className="hover:text-orange-600 text-left w-full"
                >
                  নদীর মাছ
                </button>
              </li>
            </ul>
          </li>

          <li>
            <button
              onClick={() => handleCategoryClick("mangsho")}
              className="hover:text-orange-600 text-left w-full"
            >
              মাংস
            </button>
            <ul className="ml-4 text-sm text-gray-600">
              <li>
                <button
                  onClick={() => handleCategoryClick("mangsho", "goru")}
                  className="hover:text-orange-600 text-left w-full"
                >
                  গরু
                </button>
              </li>
               <li>
                <button
                  onClick={() => handleCategoryClick("mangsho", "chagol")}
                  className="hover:text-orange-600 text-left w-full"
                >
                  খাসির মাংস
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryClick("mangsho", "murgi")}
                  className="hover:text-orange-600 text-left w-full"
                >
                  মুরগি
                </button>
              </li>
            </ul>
          </li>

          <li>
            <button
              onClick={() => handleCategoryClick("medicine")}
              className="hover:text-orange-600 text-left w-full"
            >
              ওষুধ
            </button>
          </li>
          
          <li>
            <button
              onClick={() => handleCategoryClick("electronics")}
              className="hover:text-orange-600 text-left w-full"
            >
              ইলেকট্রনিক্স
            </button>
            <ul className="ml-4 text-sm text-gray-600">
              <li>
                <button
                  onClick={() => handleCategoryClick("electronics", "blender")}
                  className="hover:text-orange-600 text-left w-full"
                >
                  ব্লেন্ডার
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryClick("electronics", "glider")}
                  className="hover:text-orange-600 text-left w-full"
                >
                  গ্লাইডার
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryClick("electronics", "rice-cooker")}
                  className="hover:text-orange-600 text-left w-full"
                >
                  রাইস কুকার
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryClick("electronics", "fridge")}
                  className="hover:text-orange-600 text-left w-full"
                >
                  ফ্রিজ
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </aside>

      {/* Products grid */}
      <main className="flex-1">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
          {categoryParam
            ? `Showing products for "${categoryParam}"`
            : "All Products"}
        </h2>

        {filteredProducts.length === 0 ? (
          <p className="text-gray-500">No products found.</p>
        ) : (
          <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Products;