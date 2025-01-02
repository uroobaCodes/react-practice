import { FaEdit, FaTrash } from "react-icons/fa";
import styles from "./grocery.module.css";

const List = ({ items, removeItem, editItem }) => {
  return (
    <div className={styles["grocery-list"]}>
      {items.map((item) => {
        const { id, title } = item;
        return (
          <div key={id} className={styles["grocery-item"]}>
            <p>{title}</p>
            <button
              type="button"
              className={styles["edit-btn"]}
              onClick={() => {
                editItem(id);
              }}
            >
              <FaEdit />
            </button>
            <button
              type="button"
              className={styles["delete-btn"]}
              onClick={() => removeItem(id)}
            >
              <FaTrash />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default List;
