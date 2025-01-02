import { useEffect, useState, useCallback } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import styles from "./tabs.module.css";

const url = `https://www.course-api.com/react-tabs-project`;

const TabsParent = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = useCallback(async () => {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        setLoading(false);
        throw new Error("network issue");
      }

      const data = await response.json();
      console.log(data);
      setLoading(false);
      setJobs(data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }, [url]);

  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

  //   handling loading process
  if (loading) {
    return (
      <section>
        <h1>Loading ...</h1>
      </section>
    );
  }

  //   values acts like an index
  //   we cannot destructure before loading otherwise it will give error because
  // before loading jobs is an empty array
  const { company, dates, duties, title } = jobs[value];

  return (
    <section className={styles.section}>
      <div className={styles.title}>
        <h2>Experience</h2>
        <div className={styles.underline}></div>
      </div>

      <div className={styles["job-center"]}>
        {/* buttons container */}
        <div className={styles["btn-container"]}>
          {jobs.map((job, index) => {
            return (
              <button
                key={job.id}
                className={`${styles.btn} ${
                  index === value ? styles.active : ""
                }`}
                onClick={() => setValue(index)}
              >
                {job.company}
              </button>
            );
          })}
        </div>
        {/* job info */}
        <div
          key={value}
          // className={`${styles["job-info-article"]} ${styles["fade-in"]}`}
          className={`${styles["job-info-article"]}`}
        >
          {/* title, company and dates parent */}
          <div className={`${styles["bio-parent"]} ${styles["fade-in"]}`}>
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className={styles["job-date"]}>{dates}</p>
          </div>

          {/* duties is an array so we need to map it */}
          {duties.map((duty, index) => {
            return (
              <div key={index} className={styles["job-desc"]}>
                <FaAngleDoubleRight
                  className={styles["job-icon"]}
                ></FaAngleDoubleRight>
                <p>{duty}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TabsParent;
