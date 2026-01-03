import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../Components/Product/ProductCard.jsx";
// import ProductCard from './Components/ProductCard.jsx'

export default function Home() {
  const product = useSelector((state) => state.products);

  return (
    <div className="product-container">
      <div className="product-grid">
        {product.map((product) => (
          <ProductCard key={product.id} {...product} productId={product.id} />
        ))}
      </div>
    </div>
  );
}
