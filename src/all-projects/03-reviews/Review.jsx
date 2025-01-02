import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import reviews from "./data";
import { useState } from "react";
import styles from "./review.module.css";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = reviews[index];

  // this implementation will always be called with 0 in the parameter
  // const nextPerson = (prevIndex) => {
  //   const newIndex = prevIndex + 1;
  //   setIndex(newIndex);
  // };

  // this implementation will have access to the previous state before updating
  // we know there are 4 elements but with API data we wont now the array length
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = (index + 1) % reviews.length;
      return newIndex;
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index === 0 ? 3 : index - 1;
      return newIndex;
    });
  };

  const randomPerson = () => {
    setIndex(() => {
      const arrLength = reviews.length;
      let random = Math.floor(Math.random() * arrLength);

      // avoid setting the same index
      if (random === index) {
        random = (random + 1) % arrLength;
      }

      // console.log(random);
      // console.log("index: " + index);
      return random;
    });
  };

  return (
    <div className={styles.review}>
      <div className={styles["img-container"]}>
        <img src={image} alt={name} className={styles.img} />
        <span className={styles["quote-icon"]}>
          <FaQuoteRight />
        </span>
      </div>
      {/* image container ends here */}
      <h4 className={styles.author}>{name}</h4>
      <p className={styles.job}>{job}</p>
      <p className={styles.info}>{text}</p>

      {/* button container */}
      <div className={styles.btnContainer}>
        <button onClick={prevPerson} className={styles.prev}>
          <FaChevronLeft />
        </button>
        <button onClick={nextPerson} className={styles.next}>
          <FaChevronRight />
        </button>
      </div>
      <button onClick={randomPerson} className={styles.random}>
        Surprise me
      </button>
    </div>
  );
};

export default Review;

{
  /* <FaChevronLeft />
<FaChevronRight/>
<FaQuoteRight />

className={styles.} */
}
