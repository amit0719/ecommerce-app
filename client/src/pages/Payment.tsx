import { Elements } from "@stripe/react-stripe-js";
import { StripeElementsOptions, loadStripe } from "@stripe/stripe-js";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { processPayment } from "../appState/actions/orderActions";
import PaymentForm from "../components/payment/PaymentForm";

// Load stripe outside the component
//process.env.STRIPE_PUBLISHABLE_KEY;
const stripePromise = loadStripe(
  "pk_test_51OdBm3SAISpOZ71vyUcpPJcRziTgZo5eautuK97IC3yZNUBaBivwDPg8EKGhOH4QgNLz319HPrLFyxmEqIWfL4hY00B2BvMgQc"
); // Replace with your Stripe publishable key

const Payment = () => {
  const dispatch: any = useDispatch();
  const { payment } = useSelector((state: any) => state.order);

  useEffect(() => {
    dispatch(processPayment(123));
  }, []);

  const appearance: any = {
    theme: "stripe",
  };
  const options: StripeElementsOptions = {
    clientSecret: payment?.clientSecret,
    appearance,
  };

  return (
    <>
      {payment?.clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <PaymentForm />
        </Elements>
      )}
    </>
  );
};

export default Payment;
