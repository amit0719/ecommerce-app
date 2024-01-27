import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ShippingForm from "../components/checkout/ShippingForm";
import Summary from "../components/checkout/Summary";
import CartReview from "../components/checkout/CartReview";

const CheckoutPage = () => {
  const navigateTo = useNavigate();
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

  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    addressLine1: false,
    pinCode: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    setFormErrors({
      ...formErrors,
      [name]: false,
    });
  };

  const validateForm = () => {
    const requiredFields = ["firstName", "lastName", "addressLine1", "pinCode"];
    const errors = {};

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        errors[field] = true;
      }
    });

    setFormErrors(errors as any);
    return Object.keys(errors).length === 0;
  };

  const handleContinueToBilling = async (e) => {
    e.preventDefault();

    // Validate the form
    if (!validateForm()) {
      // Display error messages and prevent navigation
      return;
    }

    navigateTo("/payment");
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
            formErrors={formErrors}
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
