import { useEffect } from "react";
import styles from "./grocery.module.css";

// show property will be handled in index.js
const Alert = ({ type, msg, removeAlert, list }) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, [list]);
  return <p className={`${styles.alert} ${styles[`alert-${type}`]}`}>{msg}</p>;
};

export default Alert;
