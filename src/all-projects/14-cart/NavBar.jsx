import { useCartAppContext } from "./context";
import styles from "./cart.module.css";
import { FaShoppingBag } from "react-icons/fa";

const NavBar = () => {
  const { amount } = useCartAppContext();
  return (
    <nav>
      <div className={styles["nav-center"]}>
        <h3>useReducer</h3>
        <div className={styles["nav-container"]}>
          <FaShoppingBag className={styles["shopping-icon"]} />
          <div className={styles["amount-container"]}>
            <p className={styles["total-amount"]}>{amount}</p>
          </div>
          {/* nav container ends */}
        </div>

        {/* nav center ends */}
      </div>
    </nav>
  );
};
export default NavBar;
