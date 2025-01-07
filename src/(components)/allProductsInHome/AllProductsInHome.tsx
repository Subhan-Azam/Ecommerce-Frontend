import React, { useEffect } from "react";
import ProductLinks from "../productLinks/ProductLinks.tsx";
import ProductCard from "../productCard/ProductCard.tsx";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../store/slices/allProductsSlice.ts";
import { AppDispatch, RootState } from "../../store/store.ts";

const AllProductsInHome = () => {
  const getAllProducts = useSelector((store:RootState) => store.storeProducts.products);
  console.log("getAllProducts in component", getAllProducts);

  //   const status = useSelector((store) => store.storeProducts.status);
  const dispatchProduct = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatchProduct(fetchProducts());
  }, [dispatchProduct]);

    const onClickHandler = (id) => {
      console.log("All products id", id);
    };

  //   if (status === "loading") {
  //     <p>Loading...</p>;
  //   }
  //   if (status === "failed") {
  //     <p>Data not found</p>;
  //   }

  return (
    <>
      <div className="container mx-auto my-10">
        <div className="flex justify-center -mb-3">
          <ProductLinks />
        </div>
        <div>
          <div className="mt-14 flex flex-wrap justify-center mx-auto gap-6">
            {getAllProducts?.map((product, index) => {
              return (
                <div key={index} onClick={() => onClickHandler(product.id)}>
                  <ProductCard
                    src={product?.image}
                    title={product.title.slice(0, 20) + "..."}
                    price={product.price}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProductsInHome;
