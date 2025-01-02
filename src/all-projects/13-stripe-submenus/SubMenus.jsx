import styles from "./stripe.module.css";
import { useState, useRef, useEffect } from "react";
import { useStripeAppContext } from "./context";

const SubMenu = () => {
  const {
    isSubmenuOpen,
    location,
    page: { page, links },
  } = useStripeAppContext();
  const [columns, setColumns] = useState("col-2");

  const container = useRef(null);

  useEffect(() => {
    setColumns("col-2");
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.bottom = `${bottom}px`;

    if (links.length === 3) {
      setColumns("col-3");
    }
    if (links.length > 3) {
      setColumns("col-4");
    }
  }, [location, links]);
  return (
    <aside
      className={`${styles["submenu"]} ${isSubmenuOpen ? styles["show"] : ""}`}
      ref={container}
    >
      <h4>{page}</h4>
      <div className={`${styles["submenu-center"]} ${styles[columns]}`}>
        {links.map((link, index) => {
          const { label, icon, url } = link;
          return (
            <a key={index} href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default SubMenu;
