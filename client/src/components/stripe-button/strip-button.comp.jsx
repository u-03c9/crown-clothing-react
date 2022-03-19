import React from "react";
import StripCheckout from "react-stripe-checkout";
import axios from "axios";

const StripCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;

  const publishableKey =
    "pk_test_51Ke1AzFLY5oWxGfunqzqrPSr9BotGEDYgU6lDspldPsU7JlY6yH6Spp5GDYn6q3ymgLFjq20saiA5PwZCfkrPEAx004uWL7LlV";

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "POST",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((res) => {
        alert("Payment successful!");
      })
      .catch((err) => {
        console.error("Payment error: ", err);
        alert(
          `There was an issue with your payment.
          Please make sure to use the provided credit card`
        );
      });
  };

  return (
    <StripCheckout
      label="Pay Now"
      name="CROWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripCheckoutButton;
