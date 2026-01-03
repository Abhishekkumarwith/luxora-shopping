import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  CartDecreaseQuantity,
  CartIncreaseQuantity,
  removeCartItem,
} from "../../../store/Slices/cartItemSlice";
import "./CartPage.css";
export default function CartPage() {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cartItem);

  const totalAmount = cartItem.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  if (cartItem.length === 0) {
    return (
      <div className="empty-cart">
        <h3>Your cart is empty</h3>
        <p>Add items to get started</p>
        <Link to="/">
          <button className="empty-cart-btn">Continue Shopping</button>
        </Link>
      </div>
    );
  }
  return (
    <div className="cart-page">
      <h2 className="cart-title">Your Cart</h2>

      {cartItem.map(({ productId, image, price, rating, title, quantity }) => {
        return (
          <div className="cart-list" key={crypto.randomUUID()}>
            <div className="cart-item">
              <div className="cart-img">
                <img src={image} alt="Product" />
              </div>

              <div className="cart-info">
                <h3 className="cart-item-title">
                  <a href="#">{title}</a>
                </h3>
                <p className="cart-rating">⭐ {rating.rate}</p>
                <p className="cart-price">${price}</p>

                <button
                  className="cart-remove"
                  onClick={() => dispatch(removeCartItem(productId))}
                >
                  Remove
                </button>
              </div>

              <div className="cart-qty">
                <button
                  onClick={() => dispatch(CartDecreaseQuantity(productId))}
                >
                  -
                </button>
                <span>{quantity}</span>
                <button
                  onClick={() => dispatch(CartIncreaseQuantity(productId))}
                >
                  +
                </button>
              </div>

              <div className="cart-item-total">
                ${Math.round(price * quantity)}
              </div>
            </div>
          </div>
        );
      })}

      <div className="cart-footer">
        <div className="cart-summary">
          <span>Total</span>
          <strong>${totalAmount}7</strong>
        </div>

        <button className="checkout-btn">Checkout</button>
      </div>
    </div>
  );
}
