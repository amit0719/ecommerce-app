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
import PageNotFound from "./pages/PageNotFound";
import PaymentForm from "./pages/PaymentForm";
import OrderNotification from "./pages/OrderNotification";
import ForgetPassword from "./pages/ForgetPassword";

function App() {
  const dispatch: any = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
    dispatch(fetchAllCategories());
  }, []);

  return (
    <div className="App d-flex flex-column" style={{ minHeight: "100vh" }}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="category/:id" element={<CategoryProductCatalog />} />
            <Route path="product/:id" element={<ProductDetailView />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="payment" element={<PaymentForm />} />
            <Route path="orderNotification" element={<OrderNotification />} />
            <Route path="profile" element={<UserProfile />} />
            <Route path="login" element={<Authentication />} />
            <Route path="signup" element={<UserRegistration />} />
            <Route path="forgot-password" element={<ForgetPassword />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
