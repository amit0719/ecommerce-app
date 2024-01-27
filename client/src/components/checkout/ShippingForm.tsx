import { indianStates } from "../../utils/indianStates";
import { SHIPPING_METHODS } from "../../utils/constants";

const ShippingForm = ({
  handleContinueToBilling,
  handleInputChange,
  formData,
}) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "3px",
        padding: "8px",
      }}
    >
      <div className="bg-dark text-light p-2 mb-4">
        <h5>Shipping</h5>
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
          {Object.entries(SHIPPING_METHODS).map(([key, { label, charge }]) => (
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
              <label className="form-check-label" htmlFor={`${key}Shipping`}>
                {label}
              </label>
            </div>
          ))}
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          style={{ width: "100%" }}
        >
          Continue to Billing
        </button>
      </form>
    </div>
  );
};

export default ShippingForm;
