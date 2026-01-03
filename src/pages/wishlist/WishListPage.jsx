import React from "react";
import "./WishListPage.css";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { addCartItem } from "../../store/Slices/cartItemSlice";
import { removeWishList } from "../../store/Slices/wishListSlice";

export default function WishlistPage() {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishList);

  if (wishlistItems.length === 0) {
    return (
      <div className="wishlist-empty">
        <h3>Your wishlist is empty</h3>
        <p>Save items you like and review them later</p>
        <Link to="/">
          <button className="wishlist-empty-btn">Browse Products</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="wishlist-page">
      <h2 className="wishlist-title">Your Wishlist</h2>

      <div className="wishlist-list">
        {wishlistItems.map(({ productId, image, price, rating, title }) => (
          <div key={productId} className="wishlist-item">
            <div className="wishlist-img">
              <img src={image} alt={title} />
            </div>

            <div className="wishlist-info">
              <h4 className="wishlist-item-title">{title}</h4>
              <p className="wishlist-rating">⭐ {rating.rate}</p>
              <p className="wishlist-price">${price}</p>

              <div className="wishlist-actions">
                <button
                  className="wishlist-add-cart"
                  onClick={() =>
                    dispatch(
                      addCartItem({
                        productId,
                        image,
                        price,
                        rating,
                        title,
                      })
                    )
                  }
                >
                  Add to Cart
                </button>
                <button
                  className="wishlist-remove"
                  onClick={() => dispatch(removeWishList(productId))}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
