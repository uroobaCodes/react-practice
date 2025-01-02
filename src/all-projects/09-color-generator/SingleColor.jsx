import { useEffect, useState } from "react";
import styles from "./colors.module.css";
import rgbToHex from "./util";

// the hex color property in the library isnt working
const SingleColor = ({ rgb, weight, index }) => {
  const [alert, setAlert] = useState(false);
  //   just use this for css, not navigator or rendering its name
  // use rgb directly for name rendering
  const cssColor = rgb.join(",");
  //   console.log("css color" + cssColor);

  // clear the copied to clipboard text

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [alert]);

  return (
    <>
      <div
        className={`${styles["color-containers"]} ${
          index > 10 ? styles.light : ""
        }`}
        style={{ backgroundColor: `rgb(${cssColor})` }}
        onClick={() => {
          setAlert(true);
          navigator.clipboard.writeText(rgbToHex(...rgb));
        }}
      >
        <p className={styles.weight}>{weight}%</p>
        <p className={styles.hex}>{rgbToHex(...rgb)}</p>
        {/* {alert && <p className={styles.alert}>Copied to Clipboard</p>} */}
        {alert ? <p className={styles.alert}>Copied to Clipboard</p> : null}
      </div>
    </>
  );
};

export default SingleColor;

//  className={styles}
