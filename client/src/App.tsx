import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetailView from "./pages/ProductDetailView";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import UserProfile from "./pages/UserProfile";
import Authentication from "./pages/Authentication";
import Layout from "./components/common/Layout";
import CategoryProductCatalog from "./pages/CategoryProductCatalog";
import UserRegistration from "./pages/UserRegistration";
import { useDispatch } from "react-redux";
import { fetchAllProducts } from "./appState/actions/productActions";
import { fetchAllCategories } from "./appState/actions/categoryActions";

//import Error404 from './pages/Error404';

function App() {
  const dispatch: any = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
    dispatch(fetchAllCategories());
  }, []);

  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="category/:id" element={<CategoryProductCatalog />} />
            <Route path="product/:id" element={<ProductDetailView />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="profile" element={<UserProfile />} />
            <Route path="login" element={<Authentication />} />
            <Route path="signup" element={<UserRegistration />} />
            {/* <Route path = '*' element={Error404} /> */}
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
