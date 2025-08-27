import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg shadow-sm hover:shadow-lg transition p-4 flex flex-col">
      {/* Sale Badge */}
      {product.isOnSale && (
        <span className="absolute bg-orange-500 text-white text-xs px-2 py-1 rounded-tr-lg rounded-bl-lg">
          ON SALE
        </span>
      )}

      {/* Image */}
      <img
        src={product.image}
        alt={product.name}
        className="h-40 object-contain mx-auto"
      />

      {/* Name */}
      <h3 className="mt-3 text-sm font-medium text-gray-800 truncate">
        {product.name}
      </h3>

      {/* Price */}
      <div className="mt-2">
        <span className="text-lg font-bold text-gray-900">
          Tk {product.price.toLocaleString()}
        </span>
        {product.oldPrice && (
          <span className="ml-2 text-sm line-through text-gray-500">
            Tk {product.oldPrice.toLocaleString()}
          </span>
        )}
      </div>

      {/* Quick Add Button */}
      <button className="mt-3 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition">
        Quick Add
      </button>
    </div>
  );
};

export default ProductCard;
