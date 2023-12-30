import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const navigate = useNavigate();
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

  const indianStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    // Add other Indian states here
  ];

  // Dummy products in the cart (replace with actual data)
  const cartProducts = [
    {
      id: 1,
      title: "Product 1",
      price: 50,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Product 2",
      price: 70,
      image: "https://via.placeholder.com/150",
    },
    // Add more products as needed
  ];

  // Dummy summary details (replace with actual data)
  const subtotal = 350; // Example subtotal amount
  const shippingCharge = 0; // Example shipping charge
  const tax = 50; // Example tax
  const total = subtotal + shippingCharge + tax;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleContinueToBilling = (e) => {
    e.preventDefault();
    // Perform any validations or necessary actions before moving to the billing section
    navigate("/billing");
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <div className="bg-dark text-light p-3 mb-4">
            <h2>Shipping</h2>
          </div>
          <form onSubmit={handleContinueToBilling}>
            {/* Form fields for shipping details */}
            {/* Example: */}
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">
                First Name *
              </label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">
                Last Name *
              </label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="addressLine1" className="form-label">
                Address Line 1 *
              </label>
              <input
                type="text"
                className="form-control"
                id="addressLine1"
                name="addressLine1"
                value={formData.addressLine1}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="addressLine2" className="form-label">
                Address Line 2
              </label>
              <input
                type="text"
                className="form-control"
                id="addressLine2"
                name="addressLine2"
                value={formData.addressLine2}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="pinCode" className="form-label">
                Pin Code *
              </label>
              <input
                type="text"
                className="form-control"
                id="pinCode"
                name="pinCode"
                value={formData.pinCode}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="city" className="form-label">
                City
              </label>
              <input
                type="text"
                className="form-control"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="state" className="form-label">
                State
              </label>
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
              <label htmlFor="country" className="form-label">
                Country
              </label>
              <input
                type="text"
                className="form-control"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                disabled // Country defaulted to India
              />
            </div>
            {/* Other form fields for shipping details */}
            {/* Remember to add required attributes and appropriate input fields */}

            {/* Shipping Method */}
            <div className="mb-3">
              <label className="form-label">Shipping Method</label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="shippingMethod"
                  id="standardShipping"
                  value="standard"
                  checked={formData.shippingMethod === "standard"}
                  onChange={handleInputChange}
                />
                <label className="form-check-label" htmlFor="standardShipping">
                  Standard (Free)
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="shippingMethod"
                  id="expressShipping"
                  value="express"
                  checked={formData.shippingMethod === "express"}
                  onChange={handleInputChange}
                />
                <label className="form-check-label" htmlFor="expressShipping">
                  Express ($50)
                </label>
              </div>
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
            {cartProducts.map((product) => (
              <div key={product.id} className="mb-3">
                <div className="d-flex align-items-center">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="me-3"
                    style={{ maxWidth: "50px" }}
                  />
                  <div>
                    <h5>{product.title}</h5>
                    <p>${product.price}</p>
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
