import styles from "./birthday.module.css";

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <div key={id} className={styles.person}>
            <img src={image} alt={name} className={styles.image} />
            <div className={styles.nameage}>
              <h4>{name}</h4>
              <p>{age}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default List;
