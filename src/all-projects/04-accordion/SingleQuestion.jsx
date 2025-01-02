import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import styles from "./accordion.module.css";

const SingleQuestion = ({ title, info, isOpen, handleToggle, id }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <h4 className={styles.heading}>{title} </h4>
        <button className={styles.btn} onClick={() => handleToggle(id)}>
          {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      <div className={`${styles.article} ${isOpen ? styles.expanded : ""}`}>
        <p className={styles.info}>{info}</p>
      </div>
    </>
  );
};

export default SingleQuestion;

// useRef starts here

// import { useState, useRef } from "react";
// import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
// import styles from "./accordion.module.css";

// const SingleQuestion = ({ title, info }) => {
//   const [showInfo, setShowInfo] = useState(false);
//   const contentRef = useRef(null);

//   return (
//     <>
//       <header className={styles.header}>
//         <h4 className={styles.heading}>{title}</h4>
//         <button
//           className={styles.btn}
//           onClick={() => setShowInfo((prevState) => !prevState)}
//         >
//           {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
//         </button>
//       </header>
//       <article
//         className={styles.article}
//         style={{
//           height: showInfo ? `${contentRef.current.scrollHeight}px` : "0px",
//           overflow: "hidden",
//           transition: "height 1s ease",
//         }}
//       >
//         <p ref={contentRef} className={styles.info}>
//           {info}
//         </p>
//       </article>
//     </>
//   );
// };

// export default SingleQuestion;
