import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";

// Load stripe outside the component
const stripePromise = loadStripe("YOUR_PUBLISHABLE_KEY"); // Replace with your Stripe publishable key

const PaymentForm = () => {
  return (
    <Elements stripe={stripePromise}>
      <BillingForm />
    </Elements>
  );
};

const BillingForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement),
      });

      if (error) {
        setError(error.message);
        // Handle payment method creation error
      } else {
        setError(null);
        // Payment method successfully created
        // Send paymentMethod.id to your server for processing
        //handleSubmit(paymentMethod.id);
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
      // Handle other errors
    }
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card p-4">
            <h2 className="card-title">Billing Information</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="cardElement">Card Details</label>
                <div
                  id="cardElement"
                  className="form-control"
                  style={{
                    borderRadius: "0.25rem",
                    border: "1px solid #ced4da",
                    padding: "1rem",
                  }}
                >
                  <CardElement
                    options={{
                      style: {
                        base: {
                          fontSize: "16px",
                          color: "#424770",
                          "::placeholder": {
                            color: "#aab7c4",
                          },
                        },
                        invalid: {
                          color: "#9e2146",
                        },
                      },
                    }}
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-primary mt-3">
                Pay Now
              </button>
              {error && <p style={{ color: "red" }}>{error}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
