import { useState, useEffect } from "react";
import data from "./data";
import styles from "./accordion.module.css";
import SingleQuestion from "./SingleQuestion";

const AccordionParent = () => {
  const [questions, setQuestions] = useState(data);
  const [openQuestionId, setOpenQuestionId] = useState(null);

  //   const handleScroll = () => {
  //     // Close the open question when user scrolls
  //     setOpenQuestionId(null);
  //   };

  //   // Set up the scroll event listener when the component mounts
  //   useEffect(() => {
  //     window.addEventListener("scroll", handleScroll);

  //     // Clean up the event listener when the component unmounts
  //     return () => {
  //       window.removeEventListener("scroll", handleScroll);
  //     };
  //   }, []); // Empty dependency array means this runs once when the component mounts

  const handleToggle = (id) => {
    if (openQuestionId === id) {
      setOpenQuestionId(null);
    } else {
      setOpenQuestionId(id);
    }
  };

  return (
    <main>
      <div className={styles.container}>
        <h3 className={styles["h-three"]}>questions and answers about login</h3>

        <section className={styles.info}>
          {questions.map((question) => {
            return (
              <SingleQuestion
                key={question.id}
                {...question}
                isOpen={openQuestionId === question.id}
                handleToggle={handleToggle}
              />
            );
          })}
        </section>
      </div>
    </main>
  );
};

export default AccordionParent;
