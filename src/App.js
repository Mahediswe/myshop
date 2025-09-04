import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Refund from "./components/Refund";
import Return from "./components/Return";
//import Products from "./pages/Products";
import Product from "./pages/Product";
import Profile from "./pages/Profile";
import ProductDetail from "./pages/ProductDetail";
import CustomerService from "./pages/CustomerService";
import About from "./pages/About";
function App() {
  return (
    <h1 className="">
      <Router>
        
        <Routes>
          {/* Example routes */}
          <Route path="/" element={<Home/>} />
          <Route path="/products" element={<Product/>} />
<Route path="/products/:id" element={<ProductDetail />} />

          <Route path="/products?category=fish&subcategory=sea" element={<Product/>} />
          <Route path="//products?category=fish&subcategory=river" element={<Product/>} />
          <Route path="/products?category=mangsho&subcategory=goru" element={<Product/>} />
          <Route path="/products?category=mangsho&subcategory=chagol" element={<Product/>} />
          <Route path="/products?category=mangsho&subcategory=murgi" element={<Product/>} />

          <Route path="/products?category=electronics&subcategory=blender" element={<Product/>} />
          <Route path="/products?category=electronics&subcategory=rice-cooker" element={<Product/>} />
          <Route path="/products?category=electronics&subcategory=fridge" element={<Product/>} />
          <Route path="/products?category=electronics&subcategory=glider" element={<Product/>} />


          <Route path="/about" element={<About/>} />
            <Route path="/return-policy" element={<Return/>} />
            <Route path="/refund-policy" element={<Refund/>} />
            <Route path="/customer-service" element={<CustomerService/>} />
            <Route path="/contact" element={<Contact/>} />
        </Routes>



         <div className="flex-grow">
          <Routes>
            <Route path="/profile" element={<Profile/>} />
            <Route path="/cart" element={<Cart/>} />
          </Routes>
        </div>
      </Router>
    </h1>
  );
}

export default App;
