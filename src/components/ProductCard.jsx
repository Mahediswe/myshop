import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  return (
    <div className="border rounded-2xl shadow-sm hover:shadow-xl transition duration-300 p-4 flex flex-col relative bg-white h-full">
      {/* Sale Badge */}
      {product.isOnSale && (
        <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs sm:text-sm px-2 py-1 rounded-tr-lg rounded-bl-lg shadow-md z-10">
          SALE
        </span>
      )}

      {/* Product Image - Larger on mobile */}
      <div
        className="flex items-center justify-center cursor-pointer mb-3"
        onClick={() => navigate(`/products/${product.id}`)}
      >
        <img
          src={product.images[0]}
          alt={product.name}
          className="h-52 sm:h-48 md:h-56 lg:h-60 w-full object-contain transition-transform duration-300 hover:scale-105"
          // Mobile: h-52 (larger), Desktop: responsive sizes
        />
      </div>

      {/* Product Name */}
      <h3
        onClick={() => navigate(`/products/${product.id}`)}
        className="text-sm sm:text-base font-medium text-gray-800 text-center line-clamp-2 cursor-pointer hover:text-orange-500 min-h-[40px] flex items-center justify-center"
      >
        {product.name}
      </h3>

      {/* Price Section */}
      <div className="mt-2 flex flex-col items-center">
        <div className="flex items-center justify-center gap-2">
          <span className="text-lg sm:text-xl font-bold text-gray-900">
            Tk {product.price.toLocaleString()}
          </span>
          {product.oldPrice && (
            <span className="text-sm line-through text-gray-500">
              Tk {product.oldPrice.toLocaleString()}
            </span>
          )}
        </div>
      </div>

      {/* Quick Add Button */}
      <button
        onClick={() => addToCart(product)}
        className="mt-4 w-full bg-orange-500 text-white text-sm sm:text-base px-4 py-3 rounded-xl hover:bg-orange-600 transition duration-300 shadow-md font-medium"
      >
        Quick Add
      </button>
    </div>
  );
};

export default ProductCard;