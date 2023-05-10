import Nav from "./Nav";
import useCart from "../Hooks/useCart";

type PropsType = {
  viewCart: Boolean;
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({ viewCart, setViewCart }: PropsType) => {
  const { totalItems, totalPrice } = useCart();
  const content = (
    <header className="header">
      <div className="header_title-bar">
        <h1>Acme Co</h1>
        <div className="header_price-box">
          <p>Total Items: {totalItems}</p>
          <p>Total Price: {totalPrice}</p>
        </div>
        <Nav viewCart={viewCart} setViewCart={setViewCart} />
      </div>
    </header>
  );
  return content;
};

export default Header;
