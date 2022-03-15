import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import CustomButton from "./custom-button";
import CartItem from "./cart-item";
import { toggleCartHidden } from "../store/cart/actions.js";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message">Cart is empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
    >
      CHECKOUT NOW
    </CustomButton>
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
