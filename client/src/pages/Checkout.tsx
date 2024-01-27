import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createOrder } from "../appState/actions/orderActions";
import ShippingForm from "../components/checkout/ShippingForm";
import Summary from "../components/checkout/Summary";
import CartReview from "../components/checkout/CartReview";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const dispatch: any = useDispatch();
  const { isAuthenticated, userId } = useSelector((state: any) => state.auth);
  const { cartItems = [], totalAmount } = useSelector(
    (state: any) => state.cart.cartItems
  );

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    addressLine1: "",
    addressLine2: "",
    pinCode: "",
    city: "",
    state: "",
    country: "India",
    shippingMethod: "standard",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleContinueToBilling = async (e) => {
    e.preventDefault();

    // const orderData = {
    //   customer,
    //   items,
    //   totalAmount,
    // };
    await dispatch(createOrder({ orderId: 12345, status: "pending" }));
    // navigate("/payment");
  };

  if (cartItems.length === 0) {
    return null;
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <ShippingForm
            formData={formData}
            handleInputChange={handleInputChange}
            handleContinueToBilling={handleContinueToBilling}
          />
        </div>

        <div className="col-md-6">
          <Summary totalAmount={totalAmount} />
          <CartReview cartItems={cartItems} />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
