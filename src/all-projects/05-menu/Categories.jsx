import styles from "./menu.module.css";

const Categories = ({ filterItems, categories }) => {
  return (
    <div className={styles["btn-container"]}>
      {categories.map((category, index) => {
        return (
          <>
            <button
              type="button"
              className="filter-btn"
              key={index}
              onClick={() => filterItems(category)}
            >
              {category}
            </button>
          </>
        );
      })}
    </div>
  );
};

export default Categories;
