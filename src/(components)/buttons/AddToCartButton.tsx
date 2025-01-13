import { useState } from "react";

const AddToCartButton = ({ product }: { product: any }) => {
  const [loading, setLoading] = useState(false);

  const handleAddToCart = () => {
    setLoading(true);

    setTimeout(() => {
      const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");

      // Check if product already exists
      const isProductInCart = existingCart.some(
        (item: any) => item.id === product.id
      );

      if (!isProductInCart) {
        existingCart.push(product);
        localStorage.setItem("cart", JSON.stringify(existingCart));
        console.log(`✅ ${product.title} added to cart!`);
      } else {
        console.log(`⚠️ ${product.title} is already in cart.`);
      }

      setLoading(false);
    }, 500); // Simulate API delay
  };

  return (
    <div>
      <button
        className="font-[600] text-[15px] px-4 py-2 bg-[#EDA415] text-white rounded-lg transition-all duration-300 disabled:bg-gray-400"
        onClick={handleAddToCart}
        disabled={loading}
        aria-label="Add product to cart"
      >
        {loading ? "Adding..." : "Add to Cart"}
      </button>

    </div>
  );
};

export default AddToCartButton;
