import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <h1 className="">
      <Router>
        
        <Routes>
          {/* Example routes */}
          <Route path="/" element={<Home/>} />
          <Route path="/fish/hilsha" element={<h1>Hilsha Page</h1>} />
          <Route path="/fish/rui" element={<h1>Rui Page</h1>} />
          <Route path="/mangsho/goru" element={<h1>Goru Page</h1>} />
          <Route path="/electronics/fridge" element={<h1>Fridge Page</h1>} />



          <Route path="/about" element={<div>About Page</div>} />
            <Route path="/return-policy" element={<div>Return Policy</div>} />
            <Route path="/refund-policy" element={<div>Refund Policy</div>} />
            <Route path="/customer-service" element={<div>Customer Service</div>} />
            <Route path="/contact" element={<div>Contact Page</div>} />
        </Routes>



         <div className="flex-grow">
          <Routes>
            <Route path="/" element={<div>Home Page</div>} />
            <Route path="/profile" element={<div>Profile Page</div>} />
            <Route path="/cart" element={<div>cart Page</div>} />
          </Routes>
        </div>
      </Router>
    </h1>
  );
}

export default App;
