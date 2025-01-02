import styles from "./sidebar.module.css";
import { FaTimes } from "react-icons/fa";
import { useAppContext } from "./context";
import { useEffect } from "react";

const Modal = () => {
  const { isModalOpen, openModal, closeModal } = useAppContext();
  useEffect(() => {
    const hasShownModal = sessionStorage.getItem("hasShownModal");
    if (!hasShownModal) {
      const timerId = setTimeout(() => {
        openModal();
        sessionStorage.setItem("hasShownModal", "true");
      }, 2000);
      return () => clearTimeout(timerId);
    }
  }, [openModal]);
  return (
    // <div className={`${styles["modal-overlay"]} ${styles["show-modal"]}`}>
    <div
      className={`${styles["modal-overlay"]} ${
        isModalOpen ? styles["show-modal"] : ""
      }`}
    >
      <div className={styles["modal-container"]}>
        <h3>modal container</h3>
        <button className={styles["close-modal-btn"]} onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
