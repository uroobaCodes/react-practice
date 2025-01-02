import CartContainer from "./CartContainer";
import { useCartAppContext } from "./context";
import NavBar from "./NavBar";
import styles from "./cart.module.css";

const CartParent = () => {
  const { loading } = useCartAppContext();
  if (loading) {
    return (
      <div className={styles.loading}>
        <h1>...loading</h1>
      </div>
    );
  }
  return (
    <>
      <NavBar />
      <CartContainer />
    </>
  );
};

export default CartParent;
