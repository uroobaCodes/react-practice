import { useState, useEffect } from "react";
import styles from "./grocery.module.css";
import List from "./List";
import Alert from "./Alert";
import uniqueId from "./utils";

function getLocalStorage() {
  let list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(localStorage.getItem("list"));
  } else {
    return [];
  }
}

const GroceryParent = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);

  // show needs to be true here
  // our types are: success and error in css
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      // show alert
      // setAlert({
      //   show: true,
      //   msg: "Please enter a value",
      //   type: "error",
      // });
      //  we will use the function instead
      showAlert(true, "Please type something", "error");
    } else if (name && isEditing) {
      // if we try to pass an empty name here, alert will show
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        })
      ); //setList
      setName("");
      setEditID(null);
      setIsEditing(false);
      showAlert(true, "value changed", "success");
    } else {
      showAlert(true, "Item Added to the List", "success");
      const Id = uniqueId();
      // console.log("unique Id: " + Id);
      const newItem = { id: Id, title: name };
      setList([...list, newItem]);
      setName("");
    }
    // console.log("hello");
  };

  function showAlert(show = false, msg = "", type = "") {
    // setAlert({show:show, msg:msg, type:type})
    //  OR use object shorthand
    setAlert({ show, msg, type });
  }

  function clearList() {
    showAlert(true, "Cleared all Items", "error");
    setList([]);
  }

  function removeItem(id) {
    showAlert(true, "item removed", "error");
    const newList = list.filter((item) => {
      return item.id !== id;
    });
    setList(newList);
  }

  function editItem(id) {
    const specificItem = list.find((item) => item.id === id);
    // this will make the button show edit
    setIsEditing(true);

    // we found this id in the List component when we iterate over the
    // state list and create individual list items on screen
    setEditID(id);

    // we match the specific item by iterating over the list, and
    // we find the title property of that specific Item and give the name input field that title
    setName(specificItem.title);
  }

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <section className={styles["section-center"]}>
      <form className={styles["grocery-form"]} onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <h3>Grocery Bud</h3>
        <div className={styles["grocery-form-control"]}>
          <input
            type="text"
            className={styles["grocery-input"]}
            placeholder="e.g. chocolate"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className={styles["submit-btn"]}>
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className={styles["grocery-container"]}>
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button className={styles["clear-btn"]} onClick={clearList}>
            Clear Items
          </button>
        </div>
      )}
    </section>
  );
};

export default GroceryParent;

//  className={styles}
