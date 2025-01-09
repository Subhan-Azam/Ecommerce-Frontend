import React, { useEffect, useState } from "react";
import ProductCard from "../productCard/ProductCard.tsx";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../store/slices/allProductsSlice.ts";
import { fetchAllCategories } from "../../store/slices/allCategoriesSlice.ts";
import { AppDispatch, RootState } from "../../store/store.ts";
import { Link } from "react-router-dom";
import Loader from "../loader/Loader.tsx";

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
  // const [productDetail, setProductDetail] = useState<string | null>(null);

  useEffect(() => {
    dispatchProduct(fetchProducts());
    dispatchCategories(fetchAllCategories());
  }, [dispatchProduct, dispatchCategories]);

  const filteredProducts = selectedCategory
    ? getAllProducts.filter((product) => product.category === selectedCategory)
    : getAllProducts;

  // const handleProductClick = (product: any) => {
  //   setProductDetail(product);
  // };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1B5A7D] mb-4">
          Popular Products
        </h2>
      </div>

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
              // onClick={() => handleProductClick(product)}
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
          <div className="flex justify-center items-center col-span-4 ">
            <Loader />
          </div>
        )}
      </div>
    </div>
  );
};

export default AllProductsInHome;

// import React, { useEffect, useState } from "react";
// import ProductCard from "../productCard/ProductCard.tsx";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchProducts } from "../../store/slices/allProductsSlice.ts";
// import { fetchAllCategories } from "../../store/slices/allCategoriesSlice.ts";
// import { AppDispatch, RootState } from "../../store/store.ts";
// import { Link } from "react-router-dom";

// const AllProductsInHome = () => {
//   const dispatch = useDispatch<AppDispatch>();

//   const { products, loading: productsLoading, error: productsError } = useSelector(
//     (store: RootState) => store.storeProducts
//   );

//   const { allCategories, loading: categoriesLoading, error: categoriesError } = useSelector(
//     (store: RootState) => store.storeCategories
//   );

//   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

//   useEffect(() => {
//     dispatch(fetchProducts());
//     dispatch(fetchAllCategories());
//   }, [dispatch]);

//   // Filter products based on selected category
//   const filteredProducts = selectedCategory
//     ? products.filter((product) => product.category === selectedCategory)
//     : products;

//   return (
//     <div className="container mx-auto px-4 py-8">
//       {/* Categories Section */}
//       <div className="text-center mb-8">
//         <h2 className="text-2xl md:text-3xl font-bold text-[#1B5A7D] mb-4">
//           Popular Products
//         </h2>
//       </div>

//       {/* Category Buttons (Show Loader while Fetching) */}
//       {categoriesLoading ? (
//         <p className="text-center text-gray-600">Loading Categories...</p>
//       ) : categoriesError ? (
//         <p className="text-center text-red-500">{categoriesError}</p>
//       ) : (
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
//           {allCategories.map((category) => (
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
//       )}

//       {/* Products Section (Show Loader while Fetching) */}
//       {productsLoading ? (
//         <p className="text-center text-gray-600">Loading Products...</p>
//       ) : productsError ? (
//         <p className="text-center text-red-500">{productsError}</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
//           {filteredProducts.length > 0 ? (
//             filteredProducts.map((product) => (
//               <Link key={product.id} to={`/single-product/${product.id}`}>
//                 <ProductCard
//                   src={product.image}
//                   title={product.title.slice(0, 20) + "..."}
//                   price={product.price}
//                 />
//               </Link>
//             ))
//           ) : (
//             <p className="col-span-full text-center text-gray-600">
//               No products found for this category.
//             </p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default AllProductsInHome;
