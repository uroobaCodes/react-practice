import styles from "./stripe.module.css";
import phone from "../../assets/phone.svg";
import { useStripeAppContext } from "./context";

const Hero = () => {
  const { closeSubmenu } = useStripeAppContext();
  return (
    <section className={styles.hero} onMouseOver={closeSubmenu}>
      <div className={styles["hero-center"]}>
        <div className={styles["hero-info"]}>
          <h1>Payment infrastructure for the internet</h1>
          <p>
            Millions of companies of all sizes - from startups to Fortune 500s -
            use Stripe's software and APIs to accept payments, send payouts, and
            manage their businesses online.
          </p>
          <button className={styles.btn}>start now</button>
        </div>
        <div className={styles["hero-images"]}>
          <img src={phone} alt="phone" className={styles["phone-img"]} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
