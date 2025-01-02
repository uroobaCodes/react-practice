import styles from "./stripe.module.css";
import { FaTimes } from "react-icons/fa";
import sublinks from "./data";
import { useStripeAppContext } from "./context";

const SideBar = () => {
  const { isSideBarOpen, closeSideBar } = useStripeAppContext();
  return (
    <aside
      className={`${styles["sidebar-wrapper"]} ${
        isSideBarOpen ? styles["show"] : ""
      }`}
    >
      <div className={styles.sidebar}>
        <button className={styles["close-btn"]} onClick={closeSideBar}>
          <FaTimes />
        </button>
        <div className={styles["sidebar-links"]}>
          {sublinks.map((item, index) => {
            const { links, page } = item;
            return (
              <section key={index}>
                <h4>{page}</h4>
                <div className={styles["sidebar-sublinks"]}>
                  {links.map((link, index) => {
                    const { url, icon, label } = link;
                    return (
                      <a key={index} href={url}>
                        {icon}
                        {label}
                      </a>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
        {/* sidebar links ended */}
      </div>
    </aside>
  );
};

export default SideBar;
