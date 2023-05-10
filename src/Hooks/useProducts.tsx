import { useContext } from "react";
import ProductsContext from "../context/ProductsProvider";
import { UseProductsContectType } from "../context/ProductsProvider";

const useProducts = (): UseProductsContectType => {
  return useContext(ProductsContext);
};
export default useProducts;
