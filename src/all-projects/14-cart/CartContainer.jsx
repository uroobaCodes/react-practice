import styles from "./cart.module.css";
import CartItem from "./CartItem";
import { useCartAppContext } from "./context";

const CartContainer = () => {
  const { cart, total, clearCart } = useCartAppContext();
  if (cart.length === 0) {
    return (
      <section className={styles.cart}>
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className={styles["empty-cart"]}>is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className={styles.cart}>
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>

      {/* cart items */}
      <div>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>

      {/* cart footer */}
      <footer>
        <hr />

        <div className={styles["cart-total"]}>
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button
          className={`${styles.btn} ${styles["clear-btn"]}`}
          // onClick={() => console.log("clear cart")}
          onClick={clearCart}
        >
          clear cart
        </button>
      </footer>
    </section>
  );
};
export default CartContainer;
