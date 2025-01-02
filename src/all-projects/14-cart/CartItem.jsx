import { useCartAppContext } from "./context";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import styles from "./cart.module.css";

const CartItem = ({ id, img, title, price, amount }) => {
  const { remove, increase, decrease, toggleAmount } = useCartAppContext();
  return (
    <div className={styles["cart-item"]}>
      <img src={img} alt={title} />

      {/* price and remove button div */}
      <div>
        <h4>{title}</h4>
        <h4 className={styles["item-price"]}>${price}</h4>
        {/* remove button */}
        <button className={styles["remove-btn"]} onClick={() => remove(id)}>
          remove
        </button>
      </div>

      {/* increase and decrease amount div  */}

      <div>
        {/* increase amount */}
        {/* <button className={styles["amount-btn"]} onClick={() => increase(id)}>
          <FaChevronUp className={styles["amount-increase-btn"]} />
        </button> */}
        {/* amount */}
        {/* <p className={styles.amount}>{amount}</p> */}
        {/* decrease amount */}
        {/* <button className={styles["amount-btn"]} onClick={() => decrease(id)}>
          <FaChevronDown className={styles["amount-decrease-btn"]} />
        </button> */}

        {/* if we are using toggle function, we will change the event handler's functions */}

        {/* increase amount */}
        <button
          className={styles["amount-btn"]}
          onClick={() => toggleAmount(id, "inc")}
        >
          <FaChevronUp className={styles["amount-increase-btn"]} />
        </button>
        {/* amount */}
        <p className={styles.amount}>{amount}</p>
        {/* decrease amount */}
        <button
          className={styles["amount-btn"]}
          onClick={() => toggleAmount(id, "dec")}
        >
          <FaChevronDown className={styles["amount-decrease-btn"]} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
