import styles from "./slider.module.css";
import { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import data from "./data";

// functionality one:

// const SliderParent = () => {
//   const [people, setPeople] = useState(data);
//   const [index, setIndex] = useState(0);

//   const handleNext = () => {
//     setIndex((index) => {
//       let newIndex = index + 1;
//       if (newIndex > people.length - 1) {
//         newIndex = 0;
//       }
//       return newIndex;
//     });
//   };

//   const handlePrev = () => {
//     setIndex((index) => {
//       let newIndex = index === 0 ? people.length - 1 : index - 1;
//       return newIndex;
//     });
//   };

//   return (
//     <section className={styles.section}>
//       <div className={styles.title}>
//         <h2>
//           <span>/</span>Reviews
//         </h2>
//       </div>

//       {/* we will access the state people */}
//       <div className={styles["section-center"]}>
//         {people.map((person, personIndex) => {
//           const { id, name, image, title, quote } = person;

//           let position = styles.nextSlide;

//           if (personIndex === index) {
//             position = styles.activeSlide;
//           }

//           if (
//             personIndex === index - 1 ||
//             (index === 0 && personIndex === people.length - 1)
//           ) {
//             position = styles.lastSlide;
//           }

//           return (
//             <article className={position} key={id}>
//               <img src={image} alt={name} className={styles["person-img"]} />
//               <h4>{name}</h4>
//               <p className={styles.title}>{title}</p>
//               <p className={styles.text}>{quote}</p>
//               <FaQuoteRight className={styles.icon} />
//             </article>
//           );
//         })}

//         <button className={styles.prev} onClick={handlePrev}>
//           <FaChevronLeft />
//         </button>

//         <button className={styles.next} onClick={handleNext}>
//           <FaChevronRight />
//         </button>
//       </div>
//     </section>
//   );
// };

// functionality two
const SliderParent = () => {
  const [people, setPeople] = useState(data);
  // this code would have been less confusing if
  // the variable was named a "counter" instead of "index"
  const [index, setIndex] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // think of a circle, the start of circle is index 0 and
    // end of circle is people.length-1
    // both points are touching and array is circular. So
    // if we want to behind zero, we will find the last person in the array there
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  const handleNext = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      setIsActive(true);
      return newIndex;
    });
  };

  const handlePrev = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      setIsActive(true);
      return newIndex;
    });
  };

  useEffect(() => {
    if (!isActive) {
      return;
    }
    let intervalID = setInterval(() => {
      setIndex((prevIndex) => prevIndex + 1);
    }, 3000);
    return () => clearInterval(intervalID);
  }, [index]);

  return (
    <section className={styles.section}>
      <div className={styles.title}>
        <h2>
          <span>/</span>Reviews
        </h2>
      </div>

      {/* we will access the state people */}
      <div className={styles["section-center"]}>
        {people.map((person, personIndex) => {
          const { id, name, image, title, quote } = person;

          let position = styles.nextSlide;

          if (personIndex === index) {
            position = styles.activeSlide;
          }

          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = styles.lastSlide;
          }

          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className={styles["person-img"]} />
              <h4>{name}</h4>
              <p className={styles.title}>{title}</p>
              <p className={styles.text}>{quote}</p>
              <FaQuoteRight className={styles.icon} />
            </article>
          );
        })}

        {/* <button className={styles.prev} onClick={handlePrev}> */}
        <button className={styles.prev} onClick={handlePrev}>
          <FaChevronLeft />
        </button>

        {/* <button className={styles.next} onClick={handleNext}> */}
        <button className={styles.next} onClick={handleNext}>
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default SliderParent;

//   className={styles}
