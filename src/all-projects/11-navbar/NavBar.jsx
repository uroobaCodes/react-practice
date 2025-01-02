import { useState, useRef, useEffect } from "react";
import { FaBars, FaTwitter, FaLinkedin } from "react-icons/fa";
import { links, social } from "./data";
import styles from "./navbar.module.css";
import logo from "../../assets/logo.png";
import { TbAdjustmentsHeart } from "react-icons/tb";

// first approach 🅰️
// const NavBar = () => {
//   const [showLinks, setShowLinks] = useState(false);
//   return (
//     <nav>
//       <div className={styles["nav-center"]}>
//         <div className={styles["nav-header"]}>
//           <img src={logo} alt="logo" className={styles.logo} />
//           <button
//             className={styles["nav-toggle"]}
//             onClick={() => setShowLinks(!showLinks)}
//           >
//             <FaBars />
//           </button>
//         </div>
//         {/* nav header ends here, we are still inside nav center */}

//         {showLinks && (
//           <div
//             className={`${styles["links-container"]} ${styles["show-container"]}`}
//           >
//             {/* <ul className={styles.links}>
//             <li>
//               <a href="#">home</a>
//             </li>
//             <li>
//               <a href="#">about</a>
//             </li>
//             <li>
//               <a href="#">contact</a>
//             </li>
//           </ul> */}
//             <ul className={styles.links}>
//               {links.map((link) => {
//                 const { id, url, text } = link;
//                 return (
//                   <li key={id}>
//                     <a href={url}>{text}</a>
//                   </li>
//                 );
//               })}
//             </ul>
//           </div>
//         )}

//         <ul className={styles["social-icons"]}>
//           {/* <li>
//             <a href="https://www.linkedin.com/">
//               <FaLinkedin />
//             </a>
//           </li>
//           <li>
//             <a href="https://www.linkedin.com/">
//               <FaLinkedin />
//             </a>
//           </li> */}
//           {social.map((icons) => {
//             const { id, url, icon } = icons;
//             return (
//               <li key={id}>
//                 <a href={url}>{icon}</a>
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;

// second Approach 🅱️

// const NavBar = () => {
//   const [showLinks, setShowLinks] = useState(false);
//   return (
//     <nav>
//       <div className={styles["nav-center"]}>
//         <div className={styles["nav-header"]}>
//           <img src={logo} alt="logo" className={styles.logo} />
//           <button
//             className={styles["nav-toggle"]}
//             onClick={() => setShowLinks(!showLinks)}
//           >
//             <FaBars />
//           </button>
//         </div>
//         {/* nav header ends here, we are still inside nav center */}
// must remove the showLinks condition for the animations to work
//  <div
//    // className={styles["links-container"]}
//    className={`${styles["links-container"]} ${
//      showLinks ? styles["show-container"] : ""
//    }`}
//  >
//    <ul className={styles.links}>
//      {links.map((link) => {
//        const { id, url, text } = link;
//        return (
//          <li key={id}>
//            <a href={url}>{text}</a>
//          </li>
//        );
//      })}
//    </ul>
//  </div>;

//         <ul className={styles["social-icons"]}>
//           {social.map((icons) => {
//             const { id, url, icon } = icons;
//             return (
//               <li key={id}>
//                 <a href={url}>{icon}</a>
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;

// third approach 🌋

const NavBar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef();
  const linksRef = useRef();

  useEffect(() => {
    const adjustHeight = () => {
      const linksHeight = linksRef.current.getBoundingClientRect().height;

      if (window.innerWidth > 800) {
        linksContainerRef.current.style.height = `${linksHeight + 50}px`;
      }
    };
    adjustHeight();
    window.addEventListener("resize", adjustHeight);
    return () => window.removeEventListener("resize", adjustHeight);
  }, []);

  useEffect(() => {
    // const linksHeight = linksRef.current.getBoundingClientRect()
    // console.log(linksHeight)
    const adjustSmallHeight = () => {
      const linksHeight = linksRef.current.getBoundingClientRect().height;

      if (showLinks && window.innerWidth <= 800) {
        linksContainerRef.current.style.height = `${linksHeight + 50}px`;
      }
      if (!showLinks && window.innerWidth <= 800) {
        linksContainerRef.current.style.height = `0px`;
      }
    };
    adjustSmallHeight();
    window.addEventListener("resize", adjustSmallHeight);
    return () => window.removeEventListener("resize", adjustSmallHeight);
  }, [showLinks]);

  // Using One useEffect

  // useEffect(() => {
  //   const adjustHeight = () => {
  //     const linksHeight = linksRef.current.getBoundingClientRect().height;

  //     if (window.innerWidth > 800) {
  //       linksContainerRef.current.style.height = `${linksHeight + 50}px`;
  //     } else {
  //       linksContainerRef.current.style.height = showLinks
  //         ? `${linksHeight + 50}px`
  //         : "0px";
  //     }
  //   };
  //   adjustHeight();
  //   window.addEventListener("resize", adjustHeight);
  //   return () => window.removeEventListener("resize", adjustHeight);
  // }, [showLinks]);

  return (
    <nav>
      <div className={styles["nav-center"]}>
        <div className={styles["nav-header"]}>
          <img src={logo} alt="logo" className={styles.logo} />
          <button
            className={styles["nav-toggle"]}
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>
        {/* nav header ends here, we are still inside nav center */}

        <div className={styles["links-container"]} ref={linksContainerRef}>
          <ul className={styles.links} ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <ul className={styles["social-icons"]}>
          {social.map((icons) => {
            const { id, url, icon } = icons;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
