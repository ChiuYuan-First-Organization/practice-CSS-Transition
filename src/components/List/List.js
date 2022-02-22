import { useState } from "react";

import { CSSTransition, TransitionGroup } from "react-transition-group";

import styles from "./List.module.css";

const List = () => {
  const [items, setItems] = useState([1, 2, 3]);

  console.log(styles)

  const addItemHandler = () => {
    setItems((prev) => [...prev, prev.length + 1]);
  };

  const removeItemHandler = (targetIndex) => {
    setItems((prev) => prev.filter((item, index) => index !== targetIndex));
  };

  const listItems = items.map((item, index) => (
    <CSSTransition key={index} classNames={{
        ...styles
    }} timeout={300}>
      <li
        className={styles.listItem}
        onClick={removeItemHandler.bind(null, index)}
      >
        {item}
      </li>
    </CSSTransition>
  ));

  return (
    <div>
      <button className="Button" onClick={addItemHandler}>
        Add Item
      </button>
      <TransitionGroup component="ul" className={styles.list}>
        {listItems}
      </TransitionGroup>
    </div>
  );
};

export default List;