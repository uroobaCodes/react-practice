import styles from "./sidebar.module.css";
import { FaBars } from "react-icons/fa";
import { useAppContext } from "./context";

const Home = () => {
  const { openSideBar, openModal } = useAppContext();
  return (
    <main>
      <button className={styles["sidebar-toggle"]} onClick={openSideBar}>
        <FaBars />
      </button>
      <button className={styles["modal-btn"]} onClick={openModal}>
        Show Modal
      </button>
    </main>
  );
};

export default Home;
