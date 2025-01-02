import { useState } from "react";
import data from "../../data";
import List from "./List";
import styles from "./birthday.module.css";

const BirthdayComponent = () => {
  const [people, setPeople] = useState(data);

  return (
    <div className={styles.parent}>
      <main>
        <hr />
        <section className={styles.container}>
          <h3>{people.length} birthdays today</h3>
          <List people={people} />
          {people.length > 0 ? (
            <button
              className={styles.birthdaybutton}
              onClick={() => setPeople([])}
            >
              clear all
            </button>
          ) : (
            <button
              className={styles.birthdaybutton}
              onClick={() => setPeople(data)}
            >
              reset
            </button>
          )}
        </section>
      </main>
    </div>
  );
};

export default BirthdayComponent;
