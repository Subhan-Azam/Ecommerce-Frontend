import { useState } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "./useRedux.ts";

const useSingleProduct = () => {
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);

  const { id } = useParams();
  const allProduct = useAppSelector((store) => store.storeProducts.products);
  const product = allProduct.find((p) => p.id === Number(id));

  return { isImageLoaded, setIsImageLoaded, product };
};

export default useSingleProduct;
