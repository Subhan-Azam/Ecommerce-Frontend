// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchAllCategories } from "../../store/slices/allCategoriesSlice.ts";
// import { AppDispatch, RootState } from "../../store/store.ts";

// export default function ProductLinks() {
//   const getAllCategories = useSelector(
//     (store: RootState) => store.storeCategories.allCategories
//   );

//   console.log("Fetched Categories in Component:", getAllCategories);

//   const dispatch = useDispatch<AppDispatch>();

//   useEffect(() => {
//     dispatch(fetchAllCategories());
//   }, [dispatch]);

//   if (!getAllCategories || getAllCategories.length === 0) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div
//       className="flex flex-wrap justify-center gap-5 md:mx-auto lg:justify-between md:items-center
//      max-w-[340px] md:max-w-[600px] lg:max-w-[1310px] lg:w-full"
//     >
      // <h2 className="text-[27px] leading-[41px] font-[600] text-[#1B5A7D] ">
      //   Popular Products
      // </h2>
//       <div className="flex flex-wrap justify-center gap-3">
//         {getAllCategories.map((category) => (
//           <button
//             key={category}
//             className="border border-[#003F62] text-[#003F62] w-[139px] h-[45px] rounded-[20px]"
//           >
//             {category}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }

// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchAllCategories } from "../../store/slices/allCategoriesSlice.ts";
// import { fetchProducts, filterProductsByCategory } from "../../store/slices/allProductsSlice.ts";

// export default function ProductLinks() {
//   const { allCategories } = useSelector((store) => store.category);
//   const { filteredProducts, loading, error } = useSelector((store) => store.product);

//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchAllCategories());  // Fetch categories once
//     dispatch(fetchProducts());       // Fetch products once
//   }, [dispatch]);

//   // Category filter handler
//   const handleCategoryClick = (category) => {
//     dispatch(filterProductsByCategory(category));  // Filter products in Redux store
//   };

//   if (loading) {
//     return <p>Loading products...</p>;
//   }

//   if (error) {
//     return <p>Error loading products: {error}</p>;
//   }

//   return (
//     <div>
//       <h2 className="text-[27px] leading-[41px] font-[600] text-[#1B5A7D]">
//         Popular Products
//       </h2>

//       {/* Category Buttons */}
//       <div className="flex flex-wrap justify-center gap-3">
//         {allCategories.map((category) => (
//           <button
//             key={category}
//             onClick={() => handleCategoryClick(category)}  // Dispatch action on click
//             className="border border-[#003F62] text-[#003F62] w-[139px] h-[45px] rounded-[20px]"
//           >
//             {category}
//           </button>
//         ))}
//       </div>

//       {/* Display filtered products */}
//       <div className="flex flex-wrap justify-center gap-5 mt-5">
//         {filteredProducts.map((product) => (
//           <div key={product.id} className="w-[300px] h-[313px] cursor-pointer group relative border border-[#B6B6B6] rounded-[20px] hover:shadow-md p-4">
//             <img
//               className="w-[160px] h-[160px] aspect-[3/2] object-contain"
//               src={product.image} // Assuming product has image field
//               alt={product.title}
//             />
//             <h3 className="text-[#003F62] text-[17px] font-[500] mt-2">{product.title}</h3>
//             <p className="text-[#4A4A4A] font-[600] text-[17px]">${product.price}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }




// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchAllCategories } from "../../store/slices/allCategoriesSlice.ts";
// import {
//   fetchProducts,
//   fetchProductsByCategory,
// } from "../../store/slices/allProductsSlice.ts";
// import ProductCard from "../productCard/ProductCard.tsx";

// // Component
// const ProductLinks: React.FC = () => {
//   const dispatch = useDispatch();

//   // Selectors
//   const allCategories = useSelector(
//     (state: any) => state.storeCategories.allCategories
//   );
//   const { filteredProducts, loading, error } = useSelector(
//     (state: any) => state.storeProducts
//   );

//   // Fetch categories and products on mount
//   useEffect(() => {
//     dispatch(fetchAllCategories());
//     dispatch(fetchProducts());
//   }, [dispatch]);

//   // Handle category button click
//   const handleCategoryClick = (category: string) => {
//     dispatch(fetchProductsByCategory(category));
//   };

//   if (loading) {
//     return <p>Loading products...</p>;
//   }

//   if (error) {
//     return <p>Error loading products: {error}</p>;
//   }

//   return (
//     <div className="flex flex-col items-center gap-10">
//       {/* Categories */}
//       <div className="flex flex-wrap justify-center gap-3">
//         {allCategories?.length > 0 ? (
//           allCategories.map((category: string) => (
//             <button
//               key={category}
//               className="border border-[#003F62] text-[#003F62] w-[139px] h-[45px] rounded-[20px]"
//               onClick={() => handleCategoryClick(category)}
//             >
//               {category}
//             </button>
//           ))
//         ) : (
//           <p>Loading categories...</p>
//         )}
//       </div>

//       {/* Products */}
//       <div className="flex flex-wrap justify-center gap-5">
//         {filteredProducts?.length > 0 ? (
//           filteredProducts.map((product: any) => (
//             <div key={product.id}>
//               <ProductCard
//                 src={product.image}
//                 title={product.title}
//                 price={product.price}
//               />
//             </div>
//           ))
//         ) : (
//           <p>No products found for this category.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductLinks;
