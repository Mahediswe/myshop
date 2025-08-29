import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../context/CartContext";
import { FaShoppingCart, FaWhatsapp, FaFacebookMessenger } from "react-icons/fa";
import FeatureBanner from "../components/FeatureBanner";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const productId = Number(id);
  const product = products.find((p) => p.id === productId);

  const { addToCart } = useCart();

  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [qty, setQty] = useState(1);

  if (!product) {
    return (
      <div className="container mx-auto py-20 px-4">
        <p className="text-center text-lg">Product not found.</p>
      </div>
    );
  }

  const {
    name,
    price,
    oldPrice,
    images = [], // 👈 এখানে product.images আসবে
    category,
    stock,
    description,
    weight,
    sku,
  } = product;

  const discountAmount = oldPrice ? Math.round(oldPrice - price) : 0;

  const handleAddToCart = () => {
    addToCart({ ...product, qty });
  };

  const handleBuyNow = () => {
    addToCart({ ...product, qty });
    navigate("/checkout");
  };

  const handlePayOnline = () => {
    alert("Pay Online flow চালু করো — এখানে তোমার payment integration লাগবে");
  };

  return (
    <div className="max-w-7xl mx-auto container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left: thumbnails + main image */}
        <div className="md:col-span-7 flex gap-6">
          {/* thumbnails column */}
          <div className="hidden md:flex flex-col gap-3 w-20">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setMainImageIndex(i)}
                className={`border rounded overflow-hidden p-1 transition-shadow ${
                  i === mainImageIndex ? "ring-2 ring-orange-400" : "hover:shadow-md"
                }`}
              >
                <img
                  src={img}
                  alt={`${name}-${i}`}
                  className="w-full h-20 object-cover"
                />
              </button>
            ))}
          </div>

          {/* main image */}
          <div className="flex-1 bg-white flex items-center justify-center border rounded p-4">
            <img
              src={images[mainImageIndex]}
              alt={name}
              className="max-h-[520px] w-full object-contain"
            />
          </div>
        </div>

        {/* Right: product info */}
        <div className="md:col-span-5 space-y-4">
          <h1 className="text-2xl md:text-3xl font-semibold">{name}</h1>

          {/* Price & badge */}
          <div className="flex items-center gap-3">
            <div className="text-2xl font-bold">Tk {price.toLocaleString()}</div>
            {oldPrice && (
              <>
                <div className="text-sm line-through text-gray-400">
                  Tk {oldPrice.toLocaleString()}
                </div>
                <div className="ml-auto bg-orange-500 text-white text-xs px-2 py-1 rounded">
                  SAVE Tk {discountAmount}
                </div>
              </>
            )}
          </div>

          {/* Category / Stock */}
          <div className="text-sm text-gray-600">
            <span className="font-medium">Category:</span> {category} &nbsp; | &nbsp;
            <span
              className={`font-medium ${
                stock > 0 ? "text-green-600" : "text-red-600"
              }`}
            >
              {stock > 0 ? "In Stock" : "Out of stock"}
            </span>
            {weight && (
              <>
                {" "}
                &nbsp; | &nbsp; <span className="font-medium">Weight:</span>{" "}
                {weight}
              </>
            )}
          </div>

          {/* Short description */}
          {description && (
            <p className="text-sm text-gray-700 mt-2">
              {description.slice(0, 200)}
              {description.length > 200 ? "..." : ""}
            </p>
          )}

          {/* Quantity + Add to Cart / Buy Now buttons */}
          <div className="space-y-3 mt-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center border rounded">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="px-3 py-2"
                >
                  -
                </button>
                <div className="px-4 py-2 min-w-[60px] text-center">{qty}</div>
                <button onClick={() => setQty((q) => q + 1)} className="px-3 py-2">
                  +
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="flex-1 bg-black text-white py-3 rounded shadow flex items-center justify-center gap-2"
              >
                <FaShoppingCart /> Add to cart
              </button>
            </div>

            <button
              onClick={handleBuyNow}
              className="w-full bg-orange-500 text-black py-3 rounded font-medium"
            >
              Cash on Delivery - Order Now
            </button>

            <button
              onClick={handlePayOnline}
              className="w-full bg-yellow-300 text-black py-3 rounded font-medium"
            >
              Pay Online
            </button>

            {/* Chat / WhatsApp buttons */}
            <div className="space-y-2">
              <button
                onClick={() => window.open("https://m.me/yourpage", "_blank")}
                className="w-full bg-black text-white py-3 rounded flex items-center justify-center gap-3"
              >
                <FaFacebookMessenger /> Chat with us
              </button>

              <button
                onClick={() => window.open("https://wa.me/8801321208940", "_blank")}
                className="w-full bg-black text-white py-3 rounded flex items-center justify-center gap-3"
              >
                <FaWhatsapp /> WhatsApp Us
              </button>
            </div>
          </div>

          {/* Contact / Hotline */}
          <div className="pt-4 border-t">
            <h3 className="font-medium mb-1">
              আমাদের যে কোন পণ্য অর্ডার করতে কল বা WhatsApp করুন:
            </h3>
            <div className="text-sm">
              <a href="tel:+8801321208940" className="block underline">
                +8801321208940
              </a>
              <a href="tel:09642-922922" className="block underline mt-1">
                হট লাইন: 09642-922922
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs / Full description */}
      <div className="mt-8 bg-white border rounded p-6">
        <h4 className="text-lg font-semibold mb-3">Description</h4>
        <div className="prose max-w-none">
          <p>{description}</p>
          <ul className="mt-4 list-disc pl-5 text-sm text-gray-700">
            {sku && (
              <li>
                <strong>SKU:</strong> {sku}
              </li>
            )}
            {weight && (
              <li>
                <strong>Weight:</strong> {weight}
              </li>
            )}
            {category && (
              <li>
                <strong>Category:</strong> {category}
              </li>
            )}
            <li>
              <strong>Note:</strong> ডেলিভারি ও পেমেন্ট কন্ডিশন কোম্পানির নিয়ম অনুযায়ী পরিবর্তিত হতে পারে।
            </li>
          </ul>
        </div>
      </div>
      <FeatureBanner/>
    </div>
  );
};

export default ProductDetails;
