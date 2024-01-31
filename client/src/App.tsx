import { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetailView from "./pages/ProductDetailView";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Authentication from "./pages/Authentication";
import Layout from "./components/common/Layout";
import CategoryProductCatalog from "./pages/CategoryProductCatalog";
import UserRegistration from "./pages/UserRegistration";
import { useDispatch } from "react-redux";
import { fetchAllProducts } from "./appState/actions/productActions";
import { fetchAllCategories } from "./appState/actions/categoryActions";
import PageNotFound from "./pages/PageNotFound";
import Payment from "./pages/Payment";
import OrderNotification from "./pages/OrderNotification";
import ForgetPassword from "./pages/ForgetPassword";
import { ProtectedRoute } from "./components/Routes/ProtectedRoute";

function App() {
  const dispatch: any = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
    dispatch(fetchAllCategories());
  }, []);

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="category/:id" element={<CategoryProductCatalog />} />
          <Route path="product/:id" element={<ProductDetailView />} />
          <Route
            path="cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />
          <Route
            path="checkout"
            element={
              <ProtectedRoute>
                <Checkout />
              </ProtectedRoute>
            }
          />
          <Route
            path="payment"
            element={
              <ProtectedRoute>
                <Payment />
              </ProtectedRoute>
            }
          />
          <Route
            path="order-notification"
            element={
              <ProtectedRoute>
                <OrderNotification />
              </ProtectedRoute>
            }
          />
          <Route path="login" element={<Authentication />} />
          <Route path="signup" element={<UserRegistration />} />
          <Route path="forgot-password" element={<ForgetPassword />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
