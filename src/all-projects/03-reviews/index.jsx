import Review from "./Review";
import styles from "./review.module.css";

const ReviewParent = () => {
  return (
    <main>
      <section className={styles.container}>
        <div className={styles.title}>
          <h2>Our Reviews</h2>
          <div className={styles.underline}></div>
        </div>
        <Review />
      </section>
    </main>
  );
};

export default ReviewParent;
