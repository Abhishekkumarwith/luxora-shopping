import { useDispatch } from "react-redux";

import "./ProductCard.css";

import { addCartItem } from "../../store/Slices/cartItemSlice";
import { addWishList } from "../../store/Slices/wishListSlice";

export default function ProductCard({
  productId,
  image,
  price,
  rating,
  title,
}) {
  const dispatch = useDispatch();
  return (
    <div className="product-card">
      <div className="product-media">
        <img
          className="wishlist-icon"
          src={""}
          alt="Add to wishlist"
          onClick={() =>
            dispatch(addWishList({ productId, image, price, rating, title }))
          }
        />

        <div className="product-image-wrapper">
          <img className="product-image" src={image} alt={title} />
        </div>
      </div>

      <div className="product-details">
        <h3 className="product-title">
          <a href="#">{title}</a>
        </h3>

        <div className="product-meta">
          <span className="product-rating">{rating.rate} ★ ★ ★ ★</span>
          <span className="product-price">${price}</span>
        </div>

        <div className="product-actions">
          <button
            onClick={() =>
              dispatch(addCartItem({ productId, image, price, rating, title }))
            }
          >
            Add to cart
          </button>
          <button>Buy at ${Math.floor(price)}</button>
        </div>
      </div>
    </div>
  );
}
