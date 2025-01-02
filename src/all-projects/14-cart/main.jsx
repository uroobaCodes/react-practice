import CartParent from "./CartParent";
import CartAppProvider from "./context";

const Main = () => {
  return (
    <CartAppProvider>
      <CartParent />
    </CartAppProvider>
  );
};

export default Main;
