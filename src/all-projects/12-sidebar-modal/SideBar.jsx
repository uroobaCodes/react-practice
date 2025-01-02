import styles from "./sidebar.module.css";
import logo from "../../assets/logo.png";
import { FaTimes } from "react-icons/fa";
import { social, links } from "./data";
import { useAppContext } from "./context";

const SideBar = () => {
  const { isSideBarOpen, closeSideBar } = useAppContext();
  return (
    // <aside className={`${styles["sidebar"]} ${styles["show-sidebar"]}`}>
    <aside
      className={`${styles["sidebar"]} ${
        isSideBarOpen ? styles["show-sidebar"] : ""
      }`}
    >
      <div className={styles["sidebar-header"]}>
        <img src={logo} alt="logo" className={styles.logo} />
        <button className={styles["close-btn"]} onClick={closeSideBar}>
          <FaTimes />
        </button>
      </div>
      <ul className={styles["links"]}>
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              {/* <a href={url} style={id === 1 ? { color: "blue" } : {}}> */}
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className={styles["social-icons"]}>
        {social.map((socialIcon) => {
          const { id, url, icon } = socialIcon;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default SideBar;
