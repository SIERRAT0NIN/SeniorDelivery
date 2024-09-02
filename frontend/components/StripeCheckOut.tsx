import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe("your_publishable_key_here"); // Replace with your Stripe publishable key

const CheckoutButton = () => {
  const handleClick = async () => {
    const response = await fetch("/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ price_id: "price_1JnuhFGGnWz3DFOQ" }), // Replace with your Price ID from Stripe
    });

    const session = await response.json();
    const result = await stripePromise.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.error(result.error.message);
    }
  };

  return <button onClick={handleClick}>Subscribe</button>;
};

export default function StripeCheckOut() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutButton />
    </Elements>
  );
}
