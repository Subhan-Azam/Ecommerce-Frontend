// import React, { useEffect } from "react";
// import ProductLinks from "../productLinks/ProductLinks.tsx";
// import ProductCard from "../productCard/ProductCard.tsx";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchProducts } from "../../store/slices/allProductsSlice.ts";
// import { AppDispatch, RootState } from "../../store/store.ts";

// const AllProductsInHome = () => {
//   const getAllProducts = useSelector((store:RootState) => store.storeProducts.products);
//   console.log("getAllProducts in component", getAllProducts);

//   //   const status = useSelector((store) => store.storeProducts.status);
//   const dispatchProduct = useDispatch<AppDispatch>();

//   useEffect(() => {
//     dispatchProduct(fetchProducts());
//   }, [dispatchProduct]);

//     const onClickHandler = (id) => {
//       console.log("All products id", id);
//     };

//   //   if (status === "loading") {
//   //     <p>Loading...</p>;
//   //   }
//   //   if (status === "failed") {
//   //     <p>Data not found</p>;
//   //   }

//   return (
//     <>
//       <div className="container mx-auto my-10">
//         <div className="flex justify-center -mb-3">
//           <ProductLinks />
//         </div>
//         <div>
//           <div className="mt-14 flex flex-wrap justify-center mx-auto gap-6">
//             {getAllProducts?.map((product, index) => {
//               return (
//                 <div key={index} onClick={() => onClickHandler(product.id)}>
//                   <h2>{product.category}</h2>
//                   <ProductCard
//                     src={product?.image}
//                     title={product.title.slice(0, 20) + "..."}
//                     price={product.price}
//                   />
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AllProductsInHome;

// import React, { useEffect, useState } from "react";
// import ProductCard from "../productCard/ProductCard.tsx";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchProducts } from "../../store/slices/allProductsSlice.ts";
// import { fetchAllCategories } from "../../store/slices/allCategoriesSlice.ts";
// import { AppDispatch, RootState } from "../../store/store.ts";

// const AllProductsInHome = () => {
//   const getAllProducts = useSelector(
//     (store: RootState) => store.storeProducts.products
//   );
//   const getAllCategories = useSelector(
//     (store: RootState) => store.storeCategories.allCategories
//   );

//   const dispatchProduct = useDispatch<AppDispatch>();
//   const dispatchCategories = useDispatch<AppDispatch>();

//   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

//   useEffect(() => {
//     dispatchProduct(fetchProducts());
//     dispatchCategories(fetchAllCategories());
//   }, [dispatchProduct, dispatchCategories]);

//   // Filter products based on selected category
//   const filteredProducts = selectedCategory
//     ? getAllProducts.filter((product) => product.category === selectedCategory)
//     : getAllProducts;
//   console.log("filteredProducts", filteredProducts);

//   return (
//     <>
//       {/* <div className="container mx-auto my-10"> */}
//       <div
//         className="flex flex-wrap justify-center gap-5 md:mx-auto lg:justify-between md:items-center
//      max-w-[340px] md:max-w-[600px] lg:max-w-[1310px] lg:w-full"
//       >
//         {/* Dynamic Category Buttons from API */}
//         <h2 className="text-[27px] leading-[41px] font-[600] text-[#1B5A7D] ">
//           Popular Products
//         </h2>
//         <div className="flex flex-wrap justify-center gap-4 mb-6">
//           <button
//             onClick={() => setSelectedCategory(null)}
//             className={`w-[139px] h-[45px] rounded-[20px] ${
//               selectedCategory === null
//                 ? "bg-[#003F62] text-white"
//                 : "border border-[#003F62] text-[#003F62]"
//             }`}
//           >
//             All Products
//           </button>
//           {getAllCategories.map((category) => (
//             <button
//               key={category}
//               onClick={() => setSelectedCategory(category)}
//               className={`w-[139px] h-[45px] rounded-[20px] ${
//                 selectedCategory === category
//                   ? "bg-[#003F62] text-white"
//                   : "border border-[#003F62] text-[#003F62]"
//               }`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         {/* Product List */}
//         <div className="mt-14 flex flex-wrap justify-center mx-auto gap-6">
//           {filteredProducts.length > 0 ? (
//             filteredProducts.map((product, index) => (
//               <div key={index}>
//                 <h2>{product.category}</h2>
//                 <ProductCard
//                   src={product.image}
//                   title={product.title.slice(0, 20) + "..."}
//                   price={product.price}
//                 />
//               </div>
//             ))
//           ) : (
//             <p>No products found for this category.</p>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default AllProductsInHome;


import React, { useEffect, useState } from "react";
import ProductCard from "../productCard/ProductCard.tsx";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../store/slices/allProductsSlice.ts";
import { fetchAllCategories } from "../../store/slices/allCategoriesSlice.ts";
import { AppDispatch, RootState } from "../../store/store.ts";
import { Link } from "react-router-dom";

const AllProductsInHome = () => {
  const getAllProducts = useSelector(
    (store: RootState) => store.storeProducts.products
  );
  const getAllCategories = useSelector(
    (store: RootState) => store.storeCategories.allCategories
  );

  const dispatchProduct = useDispatch<AppDispatch>();
  const dispatchCategories = useDispatch<AppDispatch>();

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [productDetail, setProductDetail] = useState<string | null>(null);

  useEffect(() => {
    dispatchProduct(fetchProducts());
    dispatchCategories(fetchAllCategories());
  }, [dispatchProduct, dispatchCategories]);

  // Filter products based on selected category
  const filteredProducts = selectedCategory
    ? getAllProducts.filter((product) => product.category === selectedCategory)
    : getAllProducts;

  // Function to handle product click
  const handleProductClick = (product: any) => {
    setProductDetail(product);
    // console.log("Clicked Product Details:", product);
  };

  console.log("single-product", productDetail);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Categories Section */}
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1B5A7D] mb-4">
          Popular Products
        </h2>
      </div>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`w-[139px] h-[45px] rounded-[20px] ${
            selectedCategory === null
              ? "bg-[#003F62] text-white"
              : "border border-[#003F62] text-[#003F62]"
          }`}
        >
          All Products
        </button>
        {getAllCategories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`w-[139px] h-[45px] rounded-[20px] ${
              selectedCategory === category
                ? "bg-[#003F62] text-white"
                : "border border-[#003F62] text-[#003F62]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Products Section */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => handleProductClick(product)}
              className="cursor-pointer"
            >
              <Link to={`/single-product/${product.id}`}>
                <ProductCard
                  src={product.image}
                  title={product.title.slice(0, 20) + "..."}
                  price={product.price}
                />
              </Link>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-600">
            No products found for this category.
          </p>
        )}
      </div>
    </div>
  );
};

export default AllProductsInHome;
