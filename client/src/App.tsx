import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductListing from "./pages/ProductListing";
//import ProductDetail from './pages/ProductDetail';
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import UserProfile from "./pages/UserProfile";
import Authentication from "./pages/Authentication";
import Layout from "./components/common/Layout";

//import Error404 from './pages/Error404';

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes> 
            <Route path="/" element={<Home />} />
            <Route path="products" element={<ProductListing />} />
            {/* <Route   path="products/:id" element={<ProductDetail/>} /> */}
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="profile" element={<UserProfile />} />
            <Route path="login" element={<Authentication />} />
            <Route path="signup" element={<Authentication />} />
            {/* <Route path = '*' element={Error404} /> */}
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
