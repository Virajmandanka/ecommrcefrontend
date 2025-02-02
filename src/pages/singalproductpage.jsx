import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function Singalproductpage() {
  const { id } = useParams(); // Get the product ID from the route
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token") || "";

  useEffect(() => {
    fetch(`https://ecommrcebakend-1.onrender.com/product/singal/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch product");
        }
        return res.json();
      })
      .then((data) => {
        setProduct(data.data || null); // Assuming `data.data` contains the product details
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id, token]);

  const addToCart = () => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProduct = savedCart.find((item) => item._id === product._id);

    if (existingProduct) {
      const updatedCart = savedCart.map((item) =>
        item._id === product._id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      const newCart = [...savedCart, { ...product, quantity: 1 }];
      localStorage.setItem("cart", JSON.stringify(newCart));
    }

    alert("Product added to cart!");
  };

  if (loading) return <p className="loading-text">Loading product...</p>;
  if (error) return <p className="error-text">Error: {error}</p>;
  if (!product) return <p className="no-product-text">Product not found</p>;

  return (
    <div className="single-product-page">
      <div className="product-detail-card">
        <img
          src={product.image}
          alt={product.title}
          className="product-detail-image"
        />
        <div className="product-detail-info">
          <h2 className="product-detail-title">{product.title}</h2>
          <p className="product-detail-description">description:{product.description}</p>
          <p className="product-detail-price">Price: ${product.price}</p>
          <p className="product-detail-category">
            Category: {product.category?.name || "N/A"}
          </p>
          <p className="product-detail-subcategory">
            Subcategory: {product.subCategory?.name || "N/A"}
          </p>
          <button onClick={addToCart} className="add-to-cart-button">
            Add to Cart
          </button>
          <Link to="/cart" className="view-cart-link">
            Go to Cart
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Singalproductpage;
