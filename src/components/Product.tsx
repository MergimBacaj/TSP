import { ProductType } from "../context/ProductsProvider";
import { REducerActioenTypes, ReducerAction } from "../context/CartProvider";
import { memo } from "react";

type PropsType = {
  product: ProductType;
  dispatch: React.Dispatch<ReducerAction>;
  REDUCER_ACTIONS: REducerActioenTypes;
  inCart: boolean;
};
const Product = ({
  product,
  dispatch,
  REDUCER_ACTIONS,
  inCart,
}: PropsType): JSX.Element => {
  const img: string = new URL(`../images/${product.sku}.jpeg`, import.meta.url)
    .href;

  const onAddToCart = () =>
    dispatch({ type: REDUCER_ACTIONS.ADD, payload: { ...product, qty: 1 } });

  const itemInCart = inCart ? " → Item in Cart: ✔️" : null;

  const content = (
    <article className="product">
      <h3>{product.name}</h3>
      <img src={img} alt={product.name} className="product_img" />
      <p>
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(product.price)}{" "}
        {itemInCart}
      </p>
      <button onClick={onAddToCart}> Add to Cart</button>
    </article>
  );

  return content;
};
function areProductsEqual(
  { product: prevProduct, inCart: prevInCArt }: PropsType,
  { product: nextProduct, inCart: nextInCart }: PropsType
) {
  return (
    Object.keys(prevProduct).every((key) => {
      return (
        prevProduct[key as keyof ProductType] ===
        nextProduct[key as keyof ProductType]
      );
    }) && prevInCArt === nextInCart
  );
}
const memoizedProduct = memo<typeof Product>(Product, areProductsEqual);

export default memoizedProduct;
