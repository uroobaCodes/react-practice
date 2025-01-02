import Values from "values.js";
import styles from "./colors.module.css";
import { useState } from "react";
import SingleColor from "./SingleColor";

const ColorParent = () => {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values(`#14bac4`).all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const colors = new Values(color).all(10);
      // reset error when color is valid
      // because it was continuously showing red even with correct value
      setError(false);
      setList(colors);
      console.log(colors);
      // console.log(`here are the colors: ${colors}`);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <>
      <section className={styles.container}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label htmlFor="color" className={styles.label}>
            Color Value
          </label>
          <input
            type="text"
            id="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#f15025"
            className={`${styles.input} ${error ? styles.error : null}`}
          />
          <button type="submit" className={styles.btn}>
            Submit
          </button>
        </form>
      </section>

      <section className={styles.colors}>
        {list.map((color, index) => (
          <SingleColor key={index} {...color} index={index} />
        ))}
      </section>
    </>
  );
};

export default ColorParent;

//  className={styles}
