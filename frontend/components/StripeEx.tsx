import { Button, Image, Link } from "@nextui-org/react";
import React, { useState, useEffect } from "react";

const ProductDisplay = () => (
  <section>
    <div className="gradient-card1 rounded-lg mt-10 text-white justify-center w-full flex">
      {/* <Image
        width={200}
        src="https://i.imgur.com/hpr6CFh.png"
        alt="The cover of Stubborn Attachments"
        className="justify-center w-full flex-1"
      /> */}
      <div className="description">
        <h3>Senior Delivery Subscription</h3>
        <h5>$25.00</h5>
      </div>
    </div>
    <form
      action="http://127.0.0.1:5000/api/create-checkout-session"
      method="POST"
      className="flex justify-center w-full"
    >
      <Button
        variant="shadow"
        color="success"
        className="text-white"
        type="submit"
      >
        Checkout
      </Button>
      <Link href="/">
        <Button color="primary">Cancel</Button>
      </Link>
    </form>
  </section>
);

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export default function StripeEx() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  return message ? <Message message={message} /> : <ProductDisplay />;
}
