import { useStripeAppContext } from "./context";
import styles from "./stripe.module.css";
import logo from "../../assets/logo.svg";
import { FaBars } from "react-icons/fa";

const NavBar = () => {
  const { openSideBar, openSubmenu, closeSubmenu } = useStripeAppContext();

  const displaySubmenu = (e) => {
    // console.log(e.target.textContent);
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    // we want to lift our sub menu 3 pixels up:
    const bottom = tempBtn.bottom - 3;
    openSubmenu(page, { center, bottom });
  };
  const handleSubMenu = (e) => {
    if (!e.target.classList.contains(styles["link-btn"])) {
      closeSubmenu();
    }
    console.log(e.target.classList);
  };
  return (
    <nav className={styles.nav} onMouseOver={handleSubMenu}>
      <div className={styles["nav-center"]}>
        <div className={styles["nav-header"]}>
          <img src={logo} alt="logo" className={styles["nav-logo"]} />
          <button
            className={`${styles.btn} ${styles["toggle-btn"]}`}
            onClick={openSideBar}
          >
            <FaBars />
          </button>
        </div>
        {/* nav header ended */}
        <ul className={styles["nav-links"]}>
          <li>
            <button className={styles["link-btn"]} onMouseOver={displaySubmenu}>
              products
            </button>
          </li>
          <li>
            <button className={styles["link-btn"]} onMouseOver={displaySubmenu}>
              developers
            </button>
          </li>
          <li>
            <button className={styles["link-btn"]} onMouseOver={displaySubmenu}>
              company
            </button>
          </li>
        </ul>
        <button className={`${styles.btn} ${styles["signin-btn"]}`}>
          sign in
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
