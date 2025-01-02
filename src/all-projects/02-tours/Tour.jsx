import styles from "./tour.module.css";
import { useState } from "react";
import { useTourContext } from "./index";

const Tour = ({ id, name, info, image, price }) => {
  const [readMore, setReadMore] = useState(false);
  const { removeTours } = useTourContext();

  return (
    <div className={styles["single-tour"]}>
      <img src={image} alt={name} className={styles.image} />

      <footer>
        <div className={styles["tour-info"]}>
          <h4>{name}</h4>
          <h4 className={styles["tour-price"]}>${price}</h4>
        </div>

        <p className={styles.info}>
          {readMore ? info : `${info.substring(0, 200)} ...`}

          <button
            onClick={() => setReadMore(!readMore)}
            className={styles["read-more-btn"]}
          >
            {readMore ? "show less" : "show more"}
          </button>
        </p>
        <button
          className={styles["delete-btn"]}
          onClick={() => removeTours(id)}
        >
          not interested
        </button>
      </footer>
    </div>
  );
};

export default Tour;
