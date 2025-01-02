import styles from "./menu.module.css";

const Menu = ({ menu }) => {
  return (
    <div className={styles["section-center"]}>
      {menu.map((menuItem) => {
        const { id, title, img, desc, price } = menuItem;

        return (
          <div key={id} className={styles["menu-item"]}>
            <img src={img} alt={title} className={styles.photo} />

            <div className={styles["item-info"]}>
              <header className={styles["info-header"]}>
                <h4>{title}</h4>
                <h4 className={styles.price}>{price}</h4>
              </header>
              <p className={styles["item-text"]}>{desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
