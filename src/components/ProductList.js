import { useState } from "react";
import { useEffect } from "react";

export const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
  fetch("http://localhost:8000/products")
    .then(response => response.json())
    .then(data => setProducts(data));
}, []);
  return (
    <section>
      {products.map((product) => (
        <div className="card" key={product.id}>
            <p className="id">{product.id}</p>
          <p className="name">{product.name}</p>
          <p className="info">
            <span className="price">${product.price}</span>
            <span className={product.in_stock ? "instock": "unavailable"}>{product.in_stock}</span>
          </p>
        </div>
      ))}
    </section>
  );
};
