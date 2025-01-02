import { useState } from "react";
import Tour from "./Tour";
import styles from "./tour.module.css";
import { useTourContext } from "./index";

const Tours = () => {
  const { tours } = useTourContext();
  //   console.log(tours);
  return (
    <section>
      <div className={styles.title}>
        <h2 className={styles["tours-h2"]}>Our Tours</h2>
        <div className={styles.underline}></div>
      </div>
      <div>
        {tours.map((tour) => {
          // return <Tour key={tour.id} tourId={tour.id}/>;
          // prop passing, not drilling
          return <Tour key={tour.id} {...tour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
