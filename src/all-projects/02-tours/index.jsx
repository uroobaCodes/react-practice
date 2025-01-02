import Loading from "./Loading";
import Tours from "./Tours";
import {
  useState,
  useCallback,
  useEffect,
  createContext,
  useContext,
} from "react";
import styles from "./tour.module.css";

const url = `https://www.course-api.com/react-tours-project`;

export const TourContext = createContext();

export const useTourContext = () => {
  return useContext(TourContext);
};

const ToursParent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTours = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  // useCallback
  const fetchTours = useCallback(async () => {
    // setIsLoading(true)
    // if our isLoading state is not true, we need to set it here
    // it has to be true for when our component is fetching data

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("network error");
      }

      const data = await response.json();
      // console.log(data);
      setTours(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }, [url]);

  // useEffect
  useEffect(() => {
    fetchTours();
  }, [fetchTours]);

  // conditional return one

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className={styles["empty-array-title"]}>
          <h2>No Tours Left! get some more by hitting 'Refresh'</h2>
          <button onClick={fetchTours}>Refresh</button>
        </div>
      </main>
    );
  }

  // conditional return two
  return (
    <TourContext.Provider value={{ removeTours, tours }}>
      <main>
        <Tours />
      </main>
    </TourContext.Provider>
  );
};

export default ToursParent;
