import React, { useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FiEye } from "react-icons/fi";
import { ProductCardPropsTypes } from "../../types/types";
import { images } from "../../constants/images.ts";

const ProductCard: React.FC<ProductCardPropsTypes> = ({
  id,
  src,
  title,
  price,
  category,
  description,
}) => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleAddToCart = () => {
    setLoading(true);

    setTimeout(() => {
      const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");

      const newProduct = { id, src, title, price, category, description };

      const isProductInCart = existingCart.some((item: any) => item.id === id);

      if (!isProductInCart) {
        existingCart.push(newProduct);
        localStorage.setItem("cart", JSON.stringify(existingCart));

        alert("Cart Updated Successfully!");
      } else {
        alert("This product is already in the cart.");
      }

      setLoading(false);
    }, 500);
  };

  return (
    <div className="group relative border border-[#B6B6B6] w-[300px] h-[313px] cursor-pointer rounded-[20px] hover:shadow-md p-4">
      <div className="flex items-center justify-center py-2">
        <img
          className="w-[160px] h-[160px] aspect-[3/2] object-contain transition-transform duration-300 group-hover:scale-110"
          src={src}
          alt="Camera"
        />
      </div>

      <div>
        <div className="absolute flex flex-col space-y-3 opacity-100 group-hover:hidden transition-opacity duration-300">
          <h3 className="text-[#003F62] text-[17px] font-[500] mt-2">
            {title.slice(0, 20)}...
          </h3>
          <p className="text-[#4A4A4A] font-[600] text-[17px]">$ {price}</p>

          <div className="flex justify-between items-center mt-2">
            <img src={images.StarsImg} alt="Rating Stars" />
          </div>
        </div>

        <div className="absolute bottom-5 left-[6px] flex gap-3 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-5 transition-all duration-300">
          <div className="border flex items-center justify-around rounded-[19px] bg-[#87BCD9] w-[204px] h-[60px] cursor-pointer">
            <button
              className="font-[600] text-[15px] px-4 py-2 bg-[#EDA415] text-white rounded-lg transition-all duration-300 disabled:bg-gray-400"
              onClick={handleAddToCart}
              disabled={loading}
              aria-label="Add product to cart"
            >
              {loading ? "Adding..." : "Add to Cart"}
            </button>
            <div className="bg-[#EDA415] rounded-[490px] w-[30px] h-[30px] flex items-center justify-center">
              <MdOutlineShoppingCart color="white" />
            </div>
          </div>

          <div className="bg-[#87BCD9] w-[70px] h-[60px] rounded-[19px] flex items-center justify-center cursor-pointer">
            <FiEye size={23} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
