import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripCheckoutButton = ({ price }) => {
  const totalPrice = price * 100;
  const publicKey =
    "pk_test_51GuslRIBNethBXyvGHJxL6cxvcl2Zbpg8k2TvPdumlaYterjS5YdmvSypMZMsihIno9KmSqKxOV4dMl8qtVa4w5C00QK8Dyuom";

  const onToken = (_token) => {
    alert("Purchase completed successfully!");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="The Drip LTD."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/M8B.svg"
      description={`Your total is £${price}`}
      amount={totalPrice}
      panelLabel="Purchase Now"
      token={onToken}
      stripeKey={publicKey}
    />
  );
};

export default StripCheckoutButton;
