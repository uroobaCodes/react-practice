import { useCallback, useState } from "react";
import styles from "./lorem.module.css";

const LoremParent = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPara = async (amount) => {
    const url = `https://baconipsum.com/api/?type=all-meat&paras=${amount}`;
    setLoading(true);

    const response = await fetch(url);

    if (!response.ok) {
      setLoading(false);
      throw new Error("network error");
    }

    const data = await response.json();
    console.log(data);
    setLoading(false);
    setText(data);
  };

  //   const fetchPara = useCallback(async (amount) => {
  //     const url = `https://baconipsum.com/api/?type=all-meat&paras=${amount}`;
  //     setLoading(true);

  //     const response = await fetch(url);

  //     if (!response.ok) {
  //       setLoading(false);
  //       throw new Error("network error");
  //     }

  //     const data = await response.json();
  //     console.log(data);
  //     setLoading(false);
  //     setText(data);
  //   }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (amount <= 0) {
      amount = 1;
    }
    if (amount > 8) {
      amount = 8;
    }
    fetchPara(amount);
  };

  return (
    <section className={styles["section-center"]}>
      <h3>Are you tired of boring Lorem Ipsum?</h3>
      <form className={styles["lorem-form"]} onSubmit={handleSubmit}>
        <label htmlFor="amount" className={styles.label}>
          Paragraphs:
        </label>
        <input
          id="amount"
          type="number"
          name="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className={styles["submit-btn"]}>
          Generate
        </button>
      </form>

      {loading && <h1>Loading...</h1>}
      {!loading &&
        text.map((paragraph, index) => (
          <p key={index} className={styles.paragraph}>
            {paragraph}
          </p>
        ))}
    </section>
  );
};

export default LoremParent;

//  className={styles}
