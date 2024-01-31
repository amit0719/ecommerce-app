import { Elements } from "@stripe/react-stripe-js";
import { StripeElementsOptions, loadStripe } from "@stripe/stripe-js";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { processPayment } from "../appState/actions/orderActions";
import PaymentForm from "../components/payment/PaymentForm";

const stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY); // Replace with your Stripe publishable key

const Payment = () => {
  const dispatch: any = useDispatch();
  const { payment } = useSelector((state: any) => state.order);
  const { totalAmount } = useSelector((state: any) => state.cart.cartItems);

  useEffect(() => {
    dispatch(processPayment({ totalAmount }));
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
