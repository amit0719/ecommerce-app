import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createOrder } from "../appState/actions/orderActions";
import { indianStates } from "../utils/indianStates";
import { SHIPPING_METHODS } from "../utils/constants";

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

  const subtotal = totalAmount;
  const shippingCharge = 0;
  const tax = 50;
  const total = subtotal + shippingCharge + tax;

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
          <div className="bg-dark text-light p-3 mb-4">
            <h2>Shipping</h2>
          </div>
          <form onSubmit={handleContinueToBilling}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                placeholder="First Name *"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                placeholder="Last Name *"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="addressLine1"
                name="addressLine1"
                placeholder="Address Line 1 *"
                value={formData.addressLine1}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="addressLine2"
                name="addressLine2"
                placeholder="Address Line 2"
                value={formData.addressLine2}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="pinCode"
                name="pinCode"
                placeholder="Pin Code *"
                value={formData.pinCode}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="city"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <select
                className="form-select"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
              >
                <option value="">Select State</option>
                {indianStates.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="country"
                name="country"
                value={formData.country}
                placeholder="Country"
                onChange={handleInputChange}
                disabled // Country defaulted to India
              />
            </div>

            {/* Shipping Method */}
            <div className="mb-3">
              {Object.entries(SHIPPING_METHODS).map(
                ([key, { label, charge }]) => (
                  <div key={key} className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="shippingMethod"
                      id={`${key}Shipping`}
                      value={key}
                      checked={formData.shippingMethod === key}
                      onChange={handleInputChange}
                    />
                    <label
                      className="form-check-label"
                      htmlFor={`${key}Shipping`}
                    >
                      {label}
                    </label>
                  </div>
                )
              )}
            </div>

            <button type="submit" className="btn btn-primary">
              Continue to Billing
            </button>
          </form>
        </div>

        <div className="col-md-6">
          <div className="bg-dark text-light p-3 mb-4">
            <h2>Summary</h2>
            <p>Subtotal: ${subtotal}</p>
            <p>Shipping Charge: ${shippingCharge}</p>
            <p>Tax: ${tax}</p>
            <hr />
            <p>Total: ${total}</p>
          </div>

          <div className="bg-dark text-light p-3 mb-4">
            <h2>In Your Cart</h2>
            {cartItems.map(({ id, name, price, image, quantity }) => (
              <div key={id} className="mb-3">
                <div className="d-flex align-items-center">
                  <img
                    src={image}
                    alt={name}
                    className="me-3"
                    style={{ maxWidth: "50px" }}
                  />
                  <div>
                    <h5>{name}</h5>
                    <p>${price}</p>
                    <p>Quantity: ${quantity}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <a href="/cart" className="btn btn-link">
            Edit Cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
