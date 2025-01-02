import { useState } from "react";
import menu from "./data";
import styles from "./menu.module.css";
import Menu from "./Menu";
import Categories from "./Categories";

const allCategories = [
  "all",
  ...new Set(
    menu.map((menuItem) => {
      return menuItem.category;
    })
  ),
];

const MenuParent = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(menu);
      return;
    }
    const newItems = menu.filter((item) => {
      return item.category === category;
    });
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className={`${styles.menu} ${styles.section}`}>
        <div className={styles.title}>
          <h2>Our Menu</h2>
          <div className={styles.underline}></div>
        </div>

        <Categories filterItems={filterItems} categories={allCategories} />
        <Menu menu={menuItems} />
      </section>
    </main>
  );
};

export default MenuParent;
